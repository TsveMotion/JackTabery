import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Instagram, ArrowRight, ArrowUpRight, Trophy, Award, Medal, ChevronLeft, ChevronRight, Facebook, Mail } from 'lucide-react';
import { Section } from './components/Section';
import { Heading } from './components/Heading';
import { NAV_ITEMS, SCHEDULE_DATA, PARTNERS, GALLERY_IMAGES, ACCOMPLISHMENTS, SOCIAL_LINKS, ARCHIVE_DATA } from './constants';
import { getImageUrl } from './config';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [instaSlide, setInstaSlide] = useState(0);

  const instagramImages = [
    '/IMG_6625.JPG',
    '/Chester-79.jpg',
    '/IMG_1904.JPG',
    '/IMG_7574.JPG',
    '/DO01000115.JPG'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll carousel - every 3.5 seconds
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setInstaSlide((prev) => (prev + 1) % instagramImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [instagramImages.length]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = anchor.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Preload first 5 carousel images for instant display
  useEffect(() => {
    const preloadImages = GALLERY_IMAGES.slice(0, 5);
    preloadImages.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });
  }, []);

  const getAchievementIcon = (id: string) => {
    const iconClass = "w-10 h-10 md:w-12 md:h-12 text-brand-navy";
    switch (id) {
      case '1':
        return <Trophy className={iconClass} strokeWidth={1.5} />;
      case '2':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="12" width="5" height="8" rx="0.5" />
            <rect x="9.5" y="6" width="5" height="14" rx="0.5" />
            <rect x="16" y="10" width="5" height="10" rx="0.5" />
          </svg>
        );
      case '3':
        return <Award className={iconClass} strokeWidth={1.5} />;
      case '4':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="12" width="5" height="8" rx="0.5" />
            <rect x="9.5" y="6" width="5" height="14" rx="0.5" />
            <rect x="16" y="10" width="5" height="10" rx="0.5" />
          </svg>
        );
      default:
        return <Trophy className={iconClass} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="font-sans text-base antialiased selection:bg-brand-accent selection:text-white bg-brand-navy text-brand-text">
      
      {/* --- NAVIGATION --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-heading font-black italic text-2xl tracking-tighter text-white">
            JACK<span className="text-brand-accent">TABERY</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.anchor} 
                onClick={(e) => handleNavClick(e, item.anchor)}
                className="uppercase text-sm font-bold tracking-widest hover:text-brand-accent transition-colors text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-navy shadow-xl py-8 flex flex-col items-center space-y-6 md:hidden border-b border-white/10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.anchor} 
                onClick={(e) => handleNavClick(e, item.anchor)}
                className="text-white uppercase text-lg font-bold tracking-widest hover:text-brand-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen min-h-[600px] w-full bg-brand-navy overflow-hidden flex items-end">
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ backgroundImage: `url(/IMG_6625.JPG)` }} 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-glow mix-blend-color-dodge pointer-events-none opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-85" />

        <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 md:px-12 pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Text Content */}
          <div className="relative z-20 order-2 md:order-1">
            <h1 className="flex flex-col">
              <span className="font-heading font-black italic text-6xl md:text-8xl lg:text-9xl text-white leading-[0.85] tracking-tighter">
                JACK
              </span>
              <span className="font-heading font-black italic text-6xl md:text-8xl lg:text-9xl text-brand-accent leading-[0.85] tracking-tighter">
                TABERY
              </span>
              <span className="font-heading font-bold italic text-2xl md:text-3xl text-brand-muted mt-4 ml-2 tracking-wide">
                RACING DRIVER
              </span>
            </h1>
            
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="inline-flex items-center mt-10 px-8 py-4 bg-brand-accent text-brand-navy font-bold uppercase tracking-wider hover:bg-white hover:text-brand-accent transition-colors rounded-sm"
            >
              Learn More About Jack
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className="absolute bottom-10 right-6 md:right-12 flex flex-col items-center space-y-2 animate-bounce cursor-pointer z-20 group"
          >
              <span className="text-[10px] text-white uppercase tracking-[0.2em] [writing-mode:vertical-rl] group-hover:text-brand-accent transition-colors">Scroll</span>
              <div className="w-[1px] h-12 bg-white/30 group-hover:bg-brand-accent transition-colors"></div>
          </a>
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <Section id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Copy Block */}
          <div className="md:col-span-7">
            <Heading level={2} className="text-4xl md:text-5xl mb-12" accentWord="Jack">About Jack</Heading>
            <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
              <p>
                Jack Tabery is a dedicated racing driver focused on performance, consistency, and progression. 
                His journey has evolved from rental karting to motor racing all around Europe.
              </p>
              <p>
                From rental karting to competitive circuit racing, his journey is built on discipline and measurable improvement.
              </p>
              <p className="font-bold text-white border-l-4 border-brand-accent pl-4">
                As Jack turned 16 in 2024, he found a sudden interest in motorsports, where he decided to join his family’s team in the French FunCup Championship. Since then, Jack has been determined to continue his racing journey, embracing every challenge that comes with competitive racing. From adapting to the intensity of wheel-to-wheel battles to building consistency under pressure, he has shown steady growth on track. With strong ambition driving him forward, he continues to push his limits and gain valuable experience with every race weekend.
              </p>
            </div>
            <div className="mt-8">
              <img 
                src="/use.png" 
                alt="Jack racing on track" 
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg transition-all duration-500 border border-white/10"
              />
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center mt-6 px-5 py-2.5 bg-brand-accent text-brand-navy text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-brand-accent transition-colors rounded-sm"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats List */}
          <div className="md:col-span-5 bg-brand-surface p-8 md:p-10 rounded-xl h-fit sticky top-24 border border-white/5">
            <h3 className="font-heading font-bold italic text-2xl mb-6 uppercase text-white">Driver Profile</h3>
            <ul className="space-y-6">
              {[
                { label: "Date of Birth", value: "August 21, 2007" },
                { label: "Nationality", value: "Belgian" },
                { label: "Height", value: "186 cm" },
                { label: "Interests", value: "Motorsports, Tennis, Skiing" },
                { label: "Current Series", value: <div className="text-right">Ligier European Series<br/>French FunCup</div> },
              ].map((stat) => (
                <li key={stat.label} className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-sm font-bold text-brand-muted uppercase tracking-wider">{stat.label}</span>
                  <span className="font-semibold text-white text-right">{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* --- ACCOMPLISHMENTS --- */}
      <Section id="accomplishments" className="bg-white relative overflow-hidden py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} className="text-4xl md:text-5xl" accentWord="Accomplishments" dark>Career Accomplishments</Heading>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ACCOMPLISHMENTS.map((item) => {
              const CardWrapper = item.link ? 'a' : 'div';
              const linkProps = item.link ? { href: item.link, target: '_blank' as const, rel: 'noopener noreferrer' } : {};
              return (
                <CardWrapper key={item.id} {...linkProps} className={`relative bg-gradient-to-br from-white to-slate-50 border border-brand-navy/10 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center group hover:border-brand-accent transition-all duration-300 ${item.link ? 'cursor-pointer' : ''}`}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-blue-400 to-brand-accent" />
                    
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-colors duration-300">
                      {getAchievementIcon(item.id)}
                    </div>
                    
                    <h4 className="font-heading font-black italic text-xl md:text-2xl text-brand-navy uppercase tracking-tighter mb-2 leading-none">
                      {item.place}
                    </h4>
                    <p className="font-bold text-xs md:text-sm text-slate-500 uppercase tracking-widest mb-3">
                      {item.title}
                    </p>
                    <div className="w-8 h-[2px] bg-brand-accent mb-3" />
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-widest">
                      {item.subtitle}
                    </p>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </Section>

      {/* --- SCHEDULE --- */}
      <Section id="calendar">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
          <Heading level={2} className="text-4xl md:text-5xl" accentWord="Schedule">2026 Race Schedule</Heading>
          <span className="hidden md:inline-block font-bold text-brand-muted uppercase tracking-widest mt-4 md:mt-0 text-right">
            Ligier European Series<br/>& French FunCup
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {SCHEDULE_DATA.map((race) => {
            const RaceWrapper = race.link ? 'a' : 'div';
            const raceProps = race.link ? { href: race.link, target: '_blank' as const, rel: 'noopener noreferrer' } : {};
            return (
              <RaceWrapper key={race.id} {...raceProps} className={`group flex items-center bg-brand-surface border border-white/5 p-4 md:p-6 hover:border-brand-accent transition-colors rounded-lg ${race.link ? 'cursor-pointer' : ''}`}>
                <div className="bg-brand-navy text-white w-20 h-20 md:w-28 md:h-28 flex flex-col justify-center items-center text-center mr-4 md:mr-6 group-hover:bg-brand-accent group-hover:text-brand-navy transition-colors rounded-lg shrink-0 border-2 border-white/20">
                  <span className="font-heading font-black italic text-lg md:text-3xl leading-none">{race.dateRange}</span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider mt-1">{race.month}</span>
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-wider mb-1 block">{race.series}</span>
                  <h4 className="font-heading font-bold italic text-sm md:text-xl uppercase text-white break-words leading-tight">{race.circuit}</h4>
                  {race.duration && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-brand-accent/15 text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-wider rounded">{race.duration}</span>
                  )}
                </div>
              </RaceWrapper>
            );
          })}
        </div>
      </Section>

      {/* --- HISTORY / OLD SESSIONS --- */}
      <Section id="history" className="bg-brand-surface" dark>
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2 block">Career Archive</span>
          <Heading level={2} className="text-4xl md:text-5xl" accentWord="Archive">Race History</Heading>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-6 text-lg font-black text-brand-accent italic uppercase tracking-wider">Year</th>
                <th className="py-6 px-6 text-lg font-black text-brand-accent italic uppercase tracking-wider">Series</th>
                <th className="py-6 px-6 text-lg font-black text-brand-accent italic uppercase tracking-wider">Team</th>
                <th className="py-6 px-6 text-lg font-black text-brand-accent italic uppercase tracking-wider text-right">Highlights</th>
              </tr>
            </thead>
            <tbody>
              {ARCHIVE_DATA.map((season) => (
                <tr key={season.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-6 px-6 font-heading font-bold text-xl text-white group-hover:text-brand-accent transition-colors">{season.year}</td>
                  <td className="py-6 px-6 font-bold text-white">{season.series}</td>
                  <td className="py-6 px-6 text-white">{season.team}</td>
                  <td className="py-6 px-6 text-sm text-white text-right">{season.highlights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* --- GALLERY --- */}
      <Section id="gallery" className="relative !py-0 bg-brand-navy [&>div]:max-w-[1650px] [&>div]:px-3 sm:[&>div]:px-5 md:[&>div]:px-8 lg:[&>div]:px-12" dark>
        {/* Background Text Overlay */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
           <span className="font-heading font-black italic text-[15rem] md:text-[20rem] uppercase whitespace-nowrap leading-none text-white">
             Gallery
           </span>
        </div>

        <div className="relative py-10 md:py-20 lg:py-24 w-full">
            {/* Carousel - arrows on sides outside images */}
            <div className="flex items-stretch gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                {/* Left Arrow - beside the grid, not on top */}
                <button
                  onClick={prevSlide}
                  className="flex-shrink-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 flex items-center justify-center text-white/80 hover:text-brand-accent transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </button>

                {/* 12-Image Two Row Grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 lg:gap-4">
                    {Array.from({ length: 12 }).map((_, i) => {
                        const imgIndex = (currentSlide * 12 + i) % GALLERY_IMAGES.length;
                        return (
                          <div 
                            key={`${currentSlide}-${i}`}
                            className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[5/6] bg-brand-surface relative group overflow-hidden cursor-pointer hover:brightness-110 transition-all rounded-lg"
                            onClick={() => setLightboxIndex(imgIndex)}
                          >
                              <img 
                                  src={GALLERY_IMAGES[imgIndex].src} 
                                  alt={GALLERY_IMAGES[imgIndex].alt} 
                                  loading={i < 2 ? 'eager' : 'lazy'}
                                  decoding="async"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold uppercase tracking-widest">View</span>
                              </div>
                          </div>
                        );
                    })}
                </div>

                {/* Right Arrow - beside the grid, not on top */}
                <button
                  onClick={nextSlide}
                  className="flex-shrink-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 flex items-center justify-center text-white/80 hover:text-brand-accent transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </button>
            </div>
        </div>
      </Section>

      {/* --- CONTACT --- */}
      <Section id="contact">
        <div className="text-center mb-12">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2 block">Get in Touch</span>
          <Heading level={2} className="text-3xl md:text-4xl mb-4">Contact Jack</Heading>
          <p className="text-brand-muted max-w-xl mx-auto">Interested in collaborating, sponsorship, or media enquiries? Reach out below.</p>
        </div>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="mailto:jack@tabery.lu" 
            className="relative bg-brand-surface border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-accent transition-all duration-300"
          >
            <ArrowUpRight className="w-5 h-5 text-white/40 absolute top-4 right-4 group-hover:text-brand-accent transition-colors" />
            <Mail className="w-10 h-10 text-brand-accent mb-3" />
            <h4 className="font-heading font-bold italic text-lg uppercase text-white mb-2">Email</h4>
            <p className="text-brand-muted text-sm">jack@tabery.lu</p>
          </a>
          <a 
            href="https://instagram.com/jacktaberyracing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative bg-brand-surface border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-accent transition-all duration-300"
          >
            <ArrowUpRight className="w-5 h-5 text-white/40 absolute top-4 right-4 group-hover:text-brand-accent transition-colors" />
            <Instagram className="w-10 h-10 text-brand-accent mb-3" />
            <h4 className="font-heading font-bold italic text-lg uppercase text-white mb-2">Instagram</h4>
            <p className="text-brand-muted text-sm">@jacktaberyracing</p>
          </a>
        </div>
      </Section>

      {/* --- PARTNERS --- */}
      <div id="partners" className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="font-heading font-black italic text-4xl md:text-6xl text-brand-navy uppercase tracking-tighter">
                Partners
            </h2>
            </div>

            {/* Large Partner Logos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {PARTNERS.map((partner) => (
                <a 
                    key={partner.id} 
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 md:p-12 flex items-center justify-center hover:scale-105 transition-all duration-300 group"
                >
                <img src={partner.logoUrl} alt={partner.name} className="max-h-24 md:max-h-32 max-w-full object-contain transition-all group-hover:scale-110" />
                </a>
            ))}
            </div>

            <div className="text-center mt-16">
            <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-block border-b-2 border-brand-navy text-brand-navy font-bold uppercase hover:text-brand-accent hover:border-brand-accent transition-colors tracking-widest text-sm"
            >
                Become a Partner
            </a>
            </div>
        </div>
      </div>

      {/* --- INSTAGRAM --- */}
      <div className="py-12 bg-brand-navy border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center mb-8">
            <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 mb-4 md:mb-0 group"
            >
                <Instagram className="w-8 h-8 text-white group-hover:text-brand-accent transition-colors" />
                <h3 className="font-heading font-bold italic text-2xl uppercase text-white group-hover:text-brand-accent transition-colors">Follow The Journey</h3>
            </a>
            <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="flex items-center text-sm font-bold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors">
                    <Instagram className="w-4 h-4 mr-1.5" /> Instagram <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="flex items-center text-sm font-bold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors">
                    <Facebook className="w-4 h-4 mr-1.5" /> Facebook <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="flex items-center text-sm font-bold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors">
                    TikTok <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
            </div>
        </div>
        {/* Rotating Image Display */}
        <div className="max-w-[1180px] mx-auto px-6 flex justify-center">
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-white/10">
                {instagramImages.map((src, i) => (
                    <img 
                        key={i}
                        src={src}
                        alt="Instagram post"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === instaSlide ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <a 
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-accent hover:text-brand-navy transition-all"
                >
                    <Instagram className="w-4 h-4" /> @jacktaberyracing
                </a>
            </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-surface text-white border-t border-white/10">
        {/* Top Footer */}
        <div className="max-w-[1180px] mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block mb-6">
                <span className="font-heading font-black italic text-3xl md:text-4xl tracking-tighter text-white">JACK<span className="text-brand-accent">TABERY</span></span>
              </a>
              <p className="text-brand-muted text-sm leading-relaxed max-w-sm mb-6">
                Belgian racing driver competing in the Ligier European Series and French FunCup Championship. Driven by passion, built on discipline.
              </p>
              <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-navy hover:border-brand-accent text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-navy hover:border-brand-accent text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-navy hover:border-brand-accent text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-heading font-bold italic text-sm uppercase tracking-widest text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a href={item.anchor} onClick={(e) => handleNavClick(e, item.anchor)} className="text-brand-muted text-sm hover:text-brand-accent transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-3">
              <h4 className="font-heading font-bold italic text-sm uppercase tracking-widest text-white mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:jack@tabery.lu" className="text-brand-muted text-sm hover:text-brand-accent transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-accent shrink-0" /> jack@tabery.lu
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-brand-muted text-sm hover:text-brand-accent transition-colors flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-brand-accent shrink-0" /> @jacktaberyracing
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="text-brand-muted text-sm hover:text-brand-accent transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-accent shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z"/></svg>
                    @jack.tabery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Built By Credit */}
        <div className="border-t border-white/10 bg-white/5">
          <div className="max-w-[1180px] mx-auto px-6 py-6 flex justify-center">
            <a href="https://tsvweb.com" target="_blank" rel="noopener noreferrer" className="text-xl font-extrabold tracking-widest uppercase text-white hover:text-brand-accent transition-colors underline underline-offset-4 decoration-brand-accent/60 hover:decoration-brand-accent">
              Built by tsvweb.com
            </a>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1180px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-brand-muted">&copy; {new Date().getFullYear()} Jack Tabery Racing. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-brand-muted">
              <a href="/privacy.html" className="hover:text-white transition-colors uppercase font-bold tracking-wider">Privacy Policy</a>
              <span className="text-white/20">|</span>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors uppercase font-bold tracking-wider">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- LIGHTBOX --- */}
      {lightboxIndex !== null && (
        <div 
            className="fixed inset-0 z-[60] bg-brand-navy/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
        >
            <button className="absolute top-6 right-6 text-white hover:text-brand-accent z-10" onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}>
                <X className="w-10 h-10" />
            </button>
            {/* Left Arrow */}
            <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-brand-accent text-white hover:text-brand-navy p-3 rounded-full transition-all backdrop-blur-sm"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <img 
                src={GALLERY_IMAGES[lightboxIndex].src} 
                alt={GALLERY_IMAGES[lightboxIndex].alt} 
                className="max-h-[90vh] max-w-[85vw] object-contain shadow-2xl border border-white/10 rounded-lg"
                onClick={(e) => e.stopPropagation()}
            />
            {/* Right Arrow */}
            <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-brand-accent text-white hover:text-brand-navy p-3 rounded-full transition-all backdrop-blur-sm"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length); }}
            >
                <ChevronRight className="w-8 h-8" />
            </button>
        </div>
      )}

    </div>
  );
};

export default App;
