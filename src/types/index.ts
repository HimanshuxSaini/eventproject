export type EventCategory = 
  | 'weddings'
  | 'pre-weddings'
  | 'corporate'
  | 'conferences'
  | 'launches'
  | 'celebrations';

export interface ServiceItem {
  id: string;
  category: EventCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  imageUrl: string;
  typicalScale: string;
  recommendedVenues: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: EventCategory;
  filterTag: 'weddings' | 'corporate' | 'celebrations' | 'brand';
  location: string;
  venueName: string;
  imageUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  caption: string;
  attendees: string;
  highlights: string[];
}

export interface TimelineStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface NCRLocation {
  city: string;
  headline: string;
  description: string;
  popularVenues: string[];
  serviceFocus: string[];
  tagline: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  companyOrRole: string;
  eventType: string;
  location: string;
  quote: string;
  isVerified: boolean;
  date: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventCity: string;
  guestCount: string;
  requirements: string;
  consent: boolean;
}
