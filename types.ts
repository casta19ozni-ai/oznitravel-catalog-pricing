export enum TravelType {
  FAMILY_VIP = 'FAMILY_VIP',
  CREW_ON_SHORE = 'CREW_ON_SHORE'
}

export interface GeneratedItinerary {
  title: string;
  description: string;
  highlights: string[];
  cta: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}