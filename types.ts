export interface ScheduleItem {
  id: string;
  dateRange: string;
  month: string;
  series: string;
  circuit: string;
  flag: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string; // Using placeholder text or images
  url: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Accomplishment {
  id: string;
  place: string;
  title: string;
  subtitle: string;
}

export interface NavItem {
  label: string;
  anchor: string;
}

export interface ArchiveSeason {
  id: string;
  year: string;
  series: string;
  team: string;
  highlights: string;
}