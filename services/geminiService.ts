import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { GeneratedItinerary, TravelType } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generatePersonalizedPlan = async (
  type: TravelType,
  userInput: string
): Promise<GeneratedItinerary> => {
  const ai = getClient();
  
  const userContext = type === TravelType.CREW_ON_SHORE 
    ? "El usuario es un tripulante de barco (Crew) buscando una experiencia rápida en Guayaquil."
    : "El usuario busca un viaje familiar o con amigos estilo VIP/Tiempo compartido.";

  const prompt = `
    Contexto: ${userContext}
    Necesidad del usuario: "${userInput}"
    
    Genera una propuesta corta y persuasiva vendiendo el servicio de OZNITRAVEL adecuado.
  `;

  // Define schema for structured output
  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "Un título atractivo y elegante para la propuesta." },
      description: { type: Type.STRING, description: "Un párrafo persuasivo de 2-3 oraciones vendiendo la experiencia." },
      highlights: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "3 puntos clave o beneficios específicos."
      },
      cta: { type: Type.STRING, description: "Una llamada a la acción corta e inspiradora." }
    },
    required: ["title", "description", "highlights", "cta"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as GeneratedItinerary;

  } catch (error) {
    console.error("Error creating plan:", error);
    // Fallback in case of error
    return {
      title: "Experiencia OZNITRAVEL",
      description: "Descubre el mundo con nuestro toque exclusivo. Contáctanos para un plan a medida.",
      highlights: ["Atención Personalizada", "Destinos Exclusivos", "Seguridad Total"],
      cta: "Contáctanos Hoy"
    };
  }
};