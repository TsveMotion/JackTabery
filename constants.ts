import { ScheduleItem, Partner, GalleryItem, Accomplishment, NavItem, ArchiveSeason } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: "About Jack", anchor: "#about" },
  { label: "Racing Calendar", anchor: "#calendar" },
  { label: "History", anchor: "#history" },
  { label: "Partners", anchor: "#partners" },
  { label: "Medias", anchor: "#gallery" },
  { label: "Contact", anchor: "#contact" }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { id: '1', dateRange: '27-29', month: 'MAR', series: 'FRENCH FUNCUP', circuit: 'LE MANS BUGATTI', flag: '🇫🇷' },
  { id: '2', dateRange: '11-12', month: 'APR', series: 'LIGIER EURO', circuit: 'BARCELONA', flag: '🇪🇸' },
  { id: '3', dateRange: '01-02', month: 'MAY', series: 'LIGIER EURO', circuit: 'LE CASTELLET', flag: '🇫🇷' },
  { id: '4', dateRange: '22-24', month: 'MAY', series: 'FRENCH FUNCUP', circuit: 'MAGNY-COURS', flag: '🇫🇷' },
  { id: '5', dateRange: '30-31', month: 'MAY', series: 'FRENCH FUNCUP', circuit: 'CHARADE', flag: '🇫🇷' },
  { id: '6', dateRange: '07', month: 'JUN', series: 'LIGIER EURO', circuit: 'LE MANS 24H', flag: '🇫🇷' },
  { id: '7', dateRange: '02-05', month: 'JUL', series: 'FRENCH FUNCUP', circuit: 'SPA 25H', flag: '🇧🇪' },
  { id: '8', dateRange: '21-23', month: 'AUG', series: 'LIGIER EURO', circuit: 'SPA-FRANCORCHAMPS', flag: '🇧🇪' },
  { id: '9', dateRange: '04-06', month: 'SEP', series: 'FRENCH FUNCUP', circuit: 'LE CASTELLET', flag: '🇫🇷' },
  { id: '10', dateRange: '11-12', month: 'SEP', series: 'LIGIER EURO', circuit: 'SILVERSTONE', flag: '🇬🇧' },
  { id: '11', dateRange: '02-04', month: 'OCT', series: 'FRENCH FUNCUP', circuit: 'PORTIMÃO', flag: '🇵🇹' },
  { id: '12', dateRange: '08-09', month: 'OCT', series: 'LIGIER EURO', circuit: 'PORTIMÃO', flag: '🇵🇹' },
  { id: '13', dateRange: '16-18', month: 'OCT', series: 'FRENCH FUNCUP', circuit: 'NOGARO', flag: '🇫🇷' },
];

export const ACCOMPLISHMENTS: Accomplishment[] = [
  { id: '1', place: '1st Overall', title: 'Zolder Promotion Night', subtitle: '2024', emoji: '🏆' },
  { id: '2', place: '1x Rookie Win', title: 'European FunCup', subtitle: '2025', emoji: '🥇' },
  { id: '3', place: '1x Rookie Podium', title: 'European FunCup', subtitle: '2025', emoji: '🥈' },
  { id: '4', place: '2x Podium in Class', title: 'European FunCup', subtitle: '2025', emoji: '🏎️' },
  { id: '5', place: 'Vice-Champions', title: 'European FunCup', subtitle: '2025', emoji: '🥈' },
  { id: '6', place: '1x Podium', title: 'Ligier JS Cup France', subtitle: '2025', emoji: '🥉' },
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'Alpha Performance', logoUrl: 'https://placehold.co/400x150/1e293b/38bdf8?text=ALPHA', url: '#' },
  { id: '2', name: 'TechStream', logoUrl: 'https://placehold.co/400x150/1e293b/38bdf8?text=TECHSTREAM', url: '#' },
  { id: '3', name: 'Velocity Gear', logoUrl: 'https://placehold.co/400x150/1e293b/38bdf8?text=VELOCITY', url: '#' },
  { id: '4', name: 'Apex Simulators', logoUrl: 'https://placehold.co/400x150/1e293b/38bdf8?text=APEX', url: '#' },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop', alt: 'Formula Car', category: 'Race' },
  { id: '2', src: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop', alt: 'Track Action', category: 'Race' },
  { id: '3', src: 'https://images.unsplash.com/photo-1599474924187-334a4ae513df?q=80&w=800&auto=format&fit=crop', alt: 'Helmet Detail', category: 'Gear' },
  { id: '4', src: 'https://images.unsplash.com/photo-1516515510860-327c5417978d?q=80&w=800&auto=format&fit=crop', alt: 'Cockpit Prep', category: 'Behind the Scenes' },
  { id: '5', src: 'https://images.unsplash.com/photo-1625026937107-13318995a940?q=80&w=800&auto=format&fit=crop', alt: 'Blue Racing Car', category: 'Race' },
  { id: '6', src: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=800&auto=format&fit=crop', alt: 'Speed Blur', category: 'Race' },
];

export const ARCHIVE_DATA: ArchiveSeason[] = [
  { id: '1', year: '2025', series: 'LIGIER JS CUP FRANCE', team: 'TRAJECTUS MOTORSPORT', highlights: 'P2 Overall at Magny-Cours' },
  { id: '2', year: '2025', series: 'EUROPEAN FUNCUP', team: 'M3M', highlights: 'Vice-Champions in Class' },
  { id: '3', year: '2025', series: 'FRENCH FUNCUP', team: 'M3M', highlights: 'P6 Overall at Nogaro' },
  { id: '4', year: '2024', series: 'FRENCH FUNCUP', team: 'M3M', highlights: '25H of Spa-Francorchamps' },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/jacktaberyracing",
  tiktok: "#",
  privacy: "/privacy"
};