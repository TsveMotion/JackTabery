import { ScheduleItem, Partner, GalleryItem, Accomplishment, NavItem, ArchiveSeason } from './types';
import { getImageUrl } from './config';

export const NAV_ITEMS: NavItem[] = [
  { label: "About Jack", anchor: "#about" },
  { label: "Racing Calendar", anchor: "#calendar" },
  { label: "History", anchor: "#history" },
  { label: "Partners", anchor: "#partners" },
  { label: "Medias", anchor: "#gallery" },
  { label: "Contact", anchor: "#contact" }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { id: '1', dateRange: '27-29', month: 'MAR', series: 'FRENCH FUNCUP', circuit: 'LE MANS BUGATTI', flag: '' },
  { id: '2', dateRange: '11-12', month: 'APR', series: 'LIGIER EUROPEAN SERIES', circuit: 'BARCELONA', flag: '' },
  { id: '3', dateRange: '01-02', month: 'MAY', series: 'LIGIER EUROPEAN SERIES', circuit: 'LE CASTELLET', flag: '' },
  { id: '4', dateRange: '22-24', month: 'MAY', series: 'FRENCH FUNCUP', circuit: 'MAGNY-COURS', flag: '' },
  { id: '5', dateRange: '30-31', month: 'MAY', series: 'FRENCH FUNCUP', circuit: 'CHARADE', flag: '' },
  { id: '6', dateRange: '07-08', month: 'JUN', series: 'LIGIER EUROPEAN SERIES', circuit: 'LE MANS 24H', flag: '' },
  { id: '7', dateRange: '02-05', month: 'JUL', series: 'FRENCH FUNCUP', circuit: 'SPA-FRANCORCHAMPS 25H', flag: '' },
  { id: '8', dateRange: '21-23', month: 'AUG', series: 'LIGIER EUROPEAN SERIES', circuit: 'SPA-FRANCORCHAMPS', flag: '' },
  { id: '9', dateRange: '04-06', month: 'SEP', series: 'FRENCH FUNCUP', circuit: 'LE CASTELLET', flag: '' },
  { id: '10', dateRange: '11-12', month: 'SEP', series: 'LIGIER EUROPEAN SERIES', circuit: 'SILVERSTONE', flag: '' },
  { id: '11', dateRange: '02-04', month: 'OCT', series: 'FRENCH FUNCUP', circuit: 'PORTIMÃO', flag: '' },
  { id: '12', dateRange: '08-09', month: 'OCT', series: 'LIGIER EUROPEAN SERIES', circuit: 'PORTIMÃO', flag: '' },
  { id: '13', dateRange: '16-18', month: 'OCT', series: 'FRENCH FUNCUP', circuit: 'NOGARO', flag: '' },
];

export const ACCOMPLISHMENTS: Accomplishment[] = [
  { id: '1', place: '1st', title: 'Zolder Promotion Night', subtitle: '2024' },
  { id: '2', place: '4x Podium in Class', title: 'European FunCup', subtitle: '2025' },
  { id: '3', place: 'Vice-Champions in Class', title: 'European FunCup', subtitle: '2025' },
  { id: '4', place: '1x Podium', title: 'Ligier JS Cup France', subtitle: '2025' },
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'Dedicated', logoUrl: '/partners/dedicated.png', url: 'https://dedicated.lu/' },
  { id: '2', name: 'The Little Bakeshop', logoUrl: '/partners/BakeShop.png', url: 'https://www.thelittlebakeshop.me/' },
  { id: '3', name: 'W Legal', logoUrl: '/partners/wlegal.png', url: '#' },
  { id: '4', name: 'WACC', logoUrl: '/partners/wacc2.png', url: 'https://www.wacc.lu/' },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', src: '/IMG_6625.JPG', alt: 'Racing Action', category: 'Race' },
  { id: '2', src: '/Chester-79.jpg', alt: 'Track Action', category: 'Race' },
  { id: '3', src: '/IMG_7553.JPG', alt: 'Helmet Detail', category: 'Gear' },
  { id: '4', src: '/IMG_1904.JPG', alt: 'Cockpit Prep', category: 'Behind the Scenes' },
  { id: '5', src: '/IMG_7574.JPG', alt: 'Blue Racing Car', category: 'Race' },
  { id: '6', src: '/DO01000115.JPG', alt: 'Speed Blur', category: 'Race' },
  { id: '7', src: '/IMG_6616.JPG', alt: 'Race Day', category: 'Race' },
  { id: '8', src: '/IMG_6623.JPG', alt: 'On Track', category: 'Race' },
  { id: '9', src: '/IMG_6624.JPG', alt: 'Racing', category: 'Race' },
  { id: '10', src: '/IMG_6981.JPG', alt: 'Track Session', category: 'Race' },
  { id: '11', src: '/IMG_6990.JPG', alt: 'Circuit Action', category: 'Race' },
  { id: '12', src: '/IMG_7004.JPG', alt: 'Racing', category: 'Race' },
  { id: '13', src: '/IMG_7008.JPG', alt: 'Track', category: 'Race' },
  { id: '14', src: '/IMG_7020.JPG', alt: 'Racing Action', category: 'Race' },
  { id: '15', src: '/IMG_7226.JPG', alt: 'Podium', category: 'Race' },
  { id: '16', src: '/IMG_7557.JPG', alt: 'Race Day', category: 'Race' },
  { id: '17', src: '/IMG_7561.JPG', alt: 'Track Action', category: 'Race' },
  { id: '18', src: '/IMG_7563.JPG', alt: 'Racing', category: 'Race' },
  { id: '19', src: '/IMG_7566.JPG', alt: 'On Track', category: 'Race' },
  { id: '20', src: '/IMG_7567.JPG', alt: 'Circuit', category: 'Race' },
  { id: '21', src: '/IMG_7569.JPG', alt: 'Racing Action', category: 'Race' },
  { id: '22', src: '/IMG_7573.JPG', alt: 'Track', category: 'Race' },
  { id: '23', src: '/IMG_9051.JPG', alt: 'Race Weekend', category: 'Race' },
  { id: '24', src: '/IMG_5068.jpg', alt: 'Racing', category: 'Race' },
  { id: '25', src: '/IMG_5501.JPG', alt: 'Track Action', category: 'Race' },
  { id: '26', src: '/IMG_5854.JPG', alt: 'Circuit', category: 'Race' },
  { id: '27', src: '/2024_BSSC_race_promotion_night_1011_0122.jpg', alt: 'Promotion Night', category: 'Event' },
  { id: '28', src: '/2024_BSSC_race_promotion_night_1011_0280 (1).jpg', alt: 'Promotion Night', category: 'Event' },
  { id: '29', src: '/2024_BSSC_race_promotion_night_1011_0376 (1).jpg', alt: 'Promotion Night', category: 'Event' },
  { id: '30', src: '/IMG_7187.jpeg', alt: 'Racing', category: 'Race' },
  { id: '31', src: '/IMG_6574.jpeg', alt: 'Track', category: 'Race' },
  { id: '32', src: '/IMG_0589.jpeg', alt: 'Behind the Scenes', category: 'Behind the Scenes' },
  { id: '33', src: '/IMG_2991.JPG', alt: 'Racing', category: 'Race' },
  { id: '34', src: '/IMG_4320.JPG', alt: 'Track Action', category: 'Race' },
  { id: '35', src: '/IMG_4323.JPG', alt: 'Circuit', category: 'Race' },
  { id: '36', src: '/IMG_4330.JPG', alt: 'Racing', category: 'Race' },
  { id: '37', src: '/IMG_4333.JPG', alt: 'Track', category: 'Race' },
  { id: '38', src: '/IMG_4335.JPG', alt: 'Racing Action', category: 'Race' },
  { id: '39', src: '/downlo.jpg', alt: 'Racing', category: 'Race' },
  { id: '40', src: '/DO01000235.JPG', alt: 'Track Action', category: 'Race' },
  { id: '41', src: '/IMG_2329.JPG', alt: 'Racing', category: 'Race' },
  { id: '42', src: '/IMG_2550.JPG', alt: 'Track Action', category: 'Race' },
  { id: '43', src: '/IMG_2563.JPG', alt: 'Circuit', category: 'Race' },
  { id: '44', src: '/IMG_3021.JPG', alt: 'Racing', category: 'Race' },
  { id: '45', src: '/IMG_1170.JPG', alt: 'Behind the Scenes', category: 'Behind the Scenes' },
  { id: '46', src: '/IMG_0579.JPG', alt: 'Gear', category: 'Gear' },
  { id: '47', src: '/IMG_0580.JPG', alt: 'Gear', category: 'Gear' },
  { id: '48', src: '/04B19EF2-AEE2-41BC-A5A2-9C0293E0ADFA.jpg', alt: 'Racing', category: 'Race' },
  { id: '49', src: '/0ef63469-ee6b-4b92-b721-fceca47ffa26.jpg', alt: 'Track', category: 'Race' },
  { id: '50', src: '/11.jpg', alt: 'Racing Action', category: 'Race' },
  { id: '51', src: '/2.jpg', alt: 'Circuit', category: 'Race' },
  { id: '52', src: '/2024_BSSC_race_promotion_night_1011_0643 (1).jpg', alt: 'Promotion Night', category: 'Event' },
  { id: '53', src: '/2671d456-a376-4485-997d-8f117a5f29b5.jpg', alt: 'Racing', category: 'Race' },
  { id: '54', src: '/54fb943f-48f1-4799-a8e0-6bb79471554a.JPG', alt: 'Track', category: 'Race' },
  { id: '55', src: '/69e45942-65cc-4792-8102-d8e657c6cbbe.jpg', alt: 'Racing', category: 'Race' },
  { id: '56', src: '/C6C2E732-0994-4CD1-9577-86ABB4E2C1AE.jpeg', alt: 'Hero Shot', category: 'Race' },
  { id: '57', src: '/EAD044E7-2B47-4CD8-9758-BAC85A631445.jpeg', alt: 'Racing Action', category: 'Race' },
  { id: '58', src: '/f662427a-9d28-4908-9f35-c5f6f2b2c62e.JPG', alt: 'Track', category: 'Race' },
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