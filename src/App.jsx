import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Mail, 
  ArrowRight, 
  Pencil, 
  BookOpen, 
  Check, 
  Menu, 
  X,
  Flame,
  Award,
  Book,
  Smartphone,
  ShieldCheck,
  Dumbbell,
  Users,
  Heart,
  Activity,
  Shield,
  MapPin,
  Phone
} from 'lucide-react';

// Custom Sketchy Doodles & Icons
const SketchyStar = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z" />
  </svg>
);

const SketchyArrow = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12 h18 M15 6 l6 6 l-6 6" />
  </svg>
);

const SketchyCheck = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 L9 17 L4 12" />
  </svg>
);

const ConfusedHuman = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="50" cy="45" r="22" />
    <circle cx="42" cy="40" r="2.5" fill="currentColor" />
    <circle cx="58" cy="40" r="2.5" fill="currentColor" />
    <path d="M38,31 Q43,28 46,32" />
    <path d="M54,32 Q57,28 62,31" />
    <path d="M42,55 Q50,48 58,55" />
    <path d="M45,15 Q50,5 56,12 T50,20" />
    <circle cx="50" cy="25" r="1.5" fill="currentColor" />
  </svg>
);

const RigidGrid = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="15" y="15" width="70" height="70" rx="6" />
    <path d="M15,38 L85,38" />
    <path d="M15,62 L85,62" />
    <path d="M38,15 L38,85" />
    <path d="M62,15 L62,85" />
    <path d="M22,22 L31,31" stroke="currentColor" strokeWidth="3" />
    <path d="M31,22 L22,31" stroke="currentColor" strokeWidth="3" />
    <path d="M46,46 L54,54" stroke="currentColor" strokeWidth="3" />
    <path d="M54,46 L46,54" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const EmptyBattery = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="20" y="30" width="55" height="40" rx="5" />
    <path d="M75,45 C78,45 80,47 80,50 C80,53 78,55 75,55" />
    <path d="M30,40 L30,60" stroke="currentColor" strokeWidth="3" />
    <path d="M35,62 L60,38" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

const PencilPlannerSketch = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="25" y="18" width="50" height="66" rx="4" className="rotate-[-2deg]" />
    <path d="M20,28 C24,28 26,30 25,33" />
    <path d="M20,42 C24,42 26,44 25,47" />
    <path d="M20,56 C24,56 26,58 25,61" />
    <path d="M20,70 C24,70 26,72 25,75" />
    <path d="M35,32 L65,32" strokeWidth="2.5" opacity="0.6" />
    <path d="M35,46 L65,46" strokeWidth="2.5" opacity="0.6" />
    <path d="M35,60 L65,60" strokeWidth="2.5" opacity="0.6" />
    <rect x="35" y="68" width="8" height="8" rx="1.5" />
    <path d="M33,72 L38,76 L48,65" stroke="var(--color-gold-ink)" strokeWidth="3" />
    <g className="rotate-[18deg] origin-center translate-y-[-14px] translate-x-[20px]">
      <rect x="60" y="20" width="8" height="48" rx="1" fill="var(--color-gold-highlight)" />
      <path d="M60,68 L64,75 L68,68 Z" fill="currentColor" />
      <rect x="60" y="16" width="8" height="4" fill="currentColor" />
    </g>
  </svg>
);

const BarbellWritingSketch = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15,22 L85,22" strokeWidth="4" />
    <rect x="28" y="12" width="6" height="20" rx="1.5" />
    <rect x="66" y="12" width="6" height="20" rx="1.5" />
    <g className="translate-y-[12px] translate-x-[5px]">
      <path d="M15,62 L75,62" strokeWidth="1.5" strokeDasharray="3,3" />
      <path d="M25,56 Q35,40 48,46 Q58,38 65,49 L55,59 Q42,59 36,55 Z" />
      <path d="M42,53 L70,28" strokeWidth="3.5" />
      <path d="M39,55 L42,53 L37,60 Z" fill="currentColor" />
      <path d="M32,43 Q29,38 32,33" strokeWidth="2" />
      <path d="M25,50 Q21,46 23,41" strokeWidth="2" />
    </g>
  </svg>
);

const CrudeGraph = ({ className }) => (
  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20,10 L20,100 L180,100" />
    <path d="M15,18 L20,10 L25,18" />
    <path d="M172,95 L180,100 L172,105" />
    <text x="178" y="116" className="font-sketch text-[10px]" fill="currentColor">Time</text>
    <text x="25" y="18" className="font-sketch text-[10px]" fill="currentColor">Gains</text>
    <text x="2" y="85" className="font-hand text-[9px]" fill="currentColor">135lb</text>
    <text x="2" y="55" className="font-hand text-[9px]" fill="currentColor">225lb</text>
    <text x="2" y="25" className="font-hand text-[9px]" fill="currentColor">315lb</text>
    <path d="M20,80 Q100,81 180,80" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.25" />
    <path d="M20,50 Q100,51 180,50" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.25" />
    <path d="M20,20 Q100,21 180,20" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.25" />
    <path d="M20,95 Q50,75 80,68 T140,40 T180,15" stroke="currentColor" strokeWidth="4" />
    <circle cx="20" cy="95" r="4.5" fill="currentColor" />
    <circle cx="80" cy="68" r="4.5" fill="currentColor" />
    <circle cx="140" cy="40" r="4.5" fill="currentColor" />
    <circle cx="180" cy="15" r="4.5" fill="currentColor" />
    <path d="M80,68 L80,100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.4" />
    <path d="M140,40 L140,100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.4" />
    <path d="M180,0 L181.5,4.5 L186,4.5 L182,6.5 L183.5,11 L180,8.5 L176.5,11 L178,6.5 L174,4.5 L178.5,4.5 Z" fill="var(--color-gold-ink)" stroke="none" />
  </svg>
);

const SketchyBarbellLarge = ({ className }) => (
  <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10,50 L190,50" strokeWidth="5" />
    {/* Left Plates */}
    <rect x="35" y="15" width="12" height="70" rx="4" className="rotate-[-1.5deg]" />
    <rect x="50" y="20" width="10" height="60" rx="3" className="rotate-[1deg]" />
    <rect x="22" y="25" width="10" height="50" rx="2" className="rotate-[-3deg]" />
    {/* Right Plates */}
    <rect x="153" y="15" width="12" height="70" rx="4" className="rotate-[1.5deg]" />
    <rect x="140" y="20" width="10" height="60" rx="3" className="rotate-[-1deg]" />
    <rect x="168" y="25" width="10" height="50" rx="2" className="rotate-[3deg]" />
    {/* Center collar ridges */}
    <circle cx="65" cy="50" r="5" />
    <circle cx="135" cy="50" r="5" />
    {/* Highlight circle doodle */}
    <path d="M6,50 Q100,20 194,50" stroke="var(--color-gold-ink)" strokeWidth="1.5" strokeDasharray="3,3" />
  </svg>
);

const RehabJointSketch = ({ className }) => (
  <svg viewBox="0 0 320 240" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Femur (Upper leg bone structure) */}
    <path d="M160,20 L160,105" strokeWidth="8" />
    <circle cx="160" cy="22" r="7" fill="currentColor" />
    <path d="M152,105 Q160,112 168,105" strokeWidth="5" />
    
    {/* Tibia (Lower leg bone structure flexed at an angle) */}
    <path d="M160,115 L110,205" strokeWidth="7" />
    <circle cx="110" cy="205" r="6" fill="currentColor" />
    <path d="M152,115 Q160,110 168,115" strokeWidth="5" />
    
    {/* Joint Pivot Hinge Indicator */}
    <circle cx="160" cy="110" r="5" fill="#9E7528" stroke="currentColor" strokeWidth="2" />
    
    {/* Patella (Kneecap outline) */}
    <circle cx="172" cy="110" r="8" stroke="#9E7528" strokeWidth="3" />
    
    {/* Force Vectors / Stabilizing ligaments */}
    <path d="M152,70 Q180,110 136,158" stroke="#9E7528" strokeWidth="2.5" strokeDasharray="4,4" />
    <path d="M130,150 L136,158 L144,152" stroke="#9E7528" strokeWidth="2.5" />
    
    {/* Angle Arc */}
    <path d="M160,160 A50,50 0 0,0 160,60" stroke="#9E7528" strokeWidth="2" strokeDasharray="5,5" className="opacity-75" />
    
    {/* Label Pointers */}
    <path d="M220,45 L170,45" stroke="#9E7528" strokeWidth="1.5" strokeDasharray="3,3" />
    <path d="M220,130 L182,118" stroke="#9E7528" strokeWidth="1.5" strokeDasharray="3,3" />
    <path d="M112,165 L132,165" stroke="#9E7528" strokeWidth="1.5" strokeDasharray="3,3" />
    
    {/* Handwritten Labels */}
    <text x="225" y="49" fill="#9E7528" stroke="none" className="font-hand font-bold" style={{ fill: '#9E7528', stroke: 'none', fontSize: '14px' }}>Joint Alignment</text>
    <text x="12" y="169" fill="#9E7528" stroke="none" className="font-hand font-bold" style={{ fill: '#9E7528', stroke: 'none', fontSize: '14px' }}>ROM Flexion: 135°</text>
    <text x="225" y="134" fill="#4A4A4A" stroke="none" className="font-hand" style={{ fill: '#4A4A4A', stroke: 'none', fontSize: '12px' }}>Controlled Loading</text>
  </svg>
);

const StopwatchFlameSketch = ({ className }) => (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Stopwatch body */}
    <circle cx="60" cy="65" r="35" />
    {/* Stopwatch crown */}
    <rect x="54" y="20" width="12" height="10" rx="1.5" />
    <path d="M45,25 L75,25" />
    {/* Stopwatch hand */}
    <path d="M60,65 L78,47" strokeWidth="4" />
    {/* Flame doodle overlaid */}
    <path d="M72,55 C82,68 90,75 90,88 C90,100 80,108 70,108 C60,108 50,100 50,88 C50,75 58,68 70,55 Z" stroke="var(--color-gold-ink)" strokeWidth="2.5" />
    <path d="M70,72 C76,80 80,84 80,92 C80,98 76,102 70,102 C64,102 60,98 60,92 C60,84 64,80 70,72 Z" fill="var(--color-gold-ink)" stroke="none" opacity="0.3" />
  </svg>
);

export default function App() {
  React.useEffect(() => {
    document.title = "Chalk & Iron Co.";
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSent, setContactSent] = useState(false);

  // BMI Calculator State
  const [bmiWeight, setBmiWeight] = useState(70);
  const [bmiHeight, setBmiHeight] = useState(175);

  const activeBmi = React.useMemo(() => {
    const h = bmiHeight / 100;
    return (bmiWeight / (h * h)).toFixed(1);
  }, [bmiWeight, bmiHeight]);

  const bmiLabel = React.useMemo(() => {
    const v = parseFloat(activeBmi);
    if (v < 18.5) return { text: "UNDERWEIGHT", color: "text-blue-600" };
    if (v < 25) return { text: "OPTIMAL RANGE", color: "text-emerald-700" };
    if (v < 30) return { text: "OVERWEIGHT", color: "text-amber-600" };
    return { text: "OBESE RANGE", color: "text-red-600" };
  }, [activeBmi]);

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      text: "Added 35kg to my squat in under 6 months. Viktor doesn't let you plateau — he programs around it on the physical logs.",
      author: "Kasun Alwis",
      role: "Powerlifter, 2yr member",
      rotation: "rotate-[-1.5deg]"
    },
    {
      text: "Sarah's circuits are no joke. Best cardio transformation I've had. She pushes you past what you think is possible.",
      author: "Dilhani Perera",
      role: "Triathlete, 1yr member",
      rotation: "rotate-[2deg]"
    },
    {
      text: "Liam had me back on full squats after knee surgery in 4 months. Exceptional orthopaedic expertise.",
      author: "Nimal Silva",
      role: "Post-surgery rehab, 8mo",
      rotation: "rotate-[-2.5deg]"
    },
    {
      text: "Direct, no-nonsense environment. Great pricing, heavy machinery, and zero ego on the floor.",
      author: "Shenal Fernando",
      role: "General member, 3yr",
      rotation: "rotate-[1deg]"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactName && email) {
      setContactSent(true);
      setContactName('');
      setContactMsg('');
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-height-screen bg-paper font-sans text-ink selection:bg-gold-highlight/70 relative">
      
      {/* Tape Graphic at header */}
      <div className="absolute top-0 right-1/4 w-28 h-6 bg-tape rotate-[3deg] border-x border-ink/10 opacity-70 z-40 hidden md:block" />

      {/* Navigation Header */}
      <header className="sticky top-0 bg-paper/95 backdrop-blur-[2px] border-b-3 border-ink z-50 transition-all">
        <div className="max-w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <Dumbbell className="w-6 h-6 md:w-8 h-8 text-ink group-hover:rotate-12 transition-transform duration-200" />
            <span className="font-sketch text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight select-none whitespace-nowrap">
              Chalk & Iron Co.
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 font-sketch font-bold text-xs lg:text-sm tracking-wide">
            <button onClick={() => scrollTo('why-us')} className="hover:text-gold-ink hover:underline decoration-wavy transition-colors">WHY US</button>
            <button onClick={() => scrollTo('programs')} className="hover:text-gold-ink hover:underline decoration-wavy transition-colors">PROGRAMS</button>
            <button onClick={() => scrollTo('bmi-calc')} className="hover:text-gold-ink hover:underline decoration-wavy transition-colors">BIOMETRIC SCAN</button>
            <button onClick={() => scrollTo('anatomy')} className="hover:text-gold-ink hover:underline decoration-wavy transition-colors">FACILITIES</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-gold-ink hover:underline decoration-wavy transition-colors">MEMBERSHIP</button>
            <button onClick={() => scrollTo('testimonials')} className="hover:text-gold-ink hover:underline decoration-wavy transition-colors">REVIEWS</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-gold-ink hover:underline decoration-wavy transition-colors">CONTACT</button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollTo('pricing')}
              className="font-sketch font-bold bg-ink text-paper hover:bg-paper hover:text-ink px-3 py-2 lg:px-5 lg:py-2.5 text-xs lg:text-sm sketch-border transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              JOIN THE FLOOR
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-ink rounded-lg hover:bg-paper-dark"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-3 border-ink bg-paper animate-shaky py-4 px-6 flex flex-col gap-4 font-sketch font-bold border-b-3 shadow-lg">
            <button onClick={() => scrollTo('why-us')} className="text-left py-2 hover:text-gold-ink">WHY US</button>
            <button onClick={() => scrollTo('programs')} className="text-left py-2 hover:text-gold-ink">PROGRAMS</button>
            <button onClick={() => scrollTo('bmi-calc')} className="text-left py-2 hover:text-gold-ink">BIOMETRIC SCAN</button>
            <button onClick={() => scrollTo('anatomy')} className="text-left py-2 hover:text-gold-ink">FACILITIES</button>
            <button onClick={() => scrollTo('pricing')} className="text-left py-2 hover:text-gold-ink">MEMBERSHIP</button>
            <button onClick={() => scrollTo('testimonials')} className="text-left py-2 hover:text-gold-ink">REVIEWS</button>
            <button onClick={() => scrollTo('contact')} className="text-left py-2 hover:text-gold-ink">CONTACT</button>
            <button 
              onClick={() => scrollTo('pricing')}
              className="w-full text-center mt-2 bg-ink text-paper py-3 sketch-border font-bold"
            >
              JOIN THE FLOOR
            </button>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b-3 border-ink">
        {/* Subtle background highlights */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-gold-highlight/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gold-highlight/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Conversion) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-4">
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-highlight border-2 border-ink rounded-full font-sketch font-bold text-xs rotate-[-1.5deg] shadow-sm w-fit">
                <Flame className="w-3.5 h-3.5 text-gold-ink fill-gold-ink" />
                <span>PREMIUM STRENGTH FACILITY IN COLOMBO</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sketch font-bold text-ink leading-[1.1] relative">
                Discipline Beats <br />
                <span className="relative inline-block mt-1">
                  Motivation.
                  <div className="absolute left-0 right-0 -bottom-3 h-3 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22><path d=%22M0,7 Q30,2 50,7 T100,5%22 fill=%22none%22 stroke=%22%23121212%22 stroke-width=%224%22 stroke-linecap=%22round%22/></svg>')] bg-repeat-x" />
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-ink-light leading-relaxed max-w-xl font-medium">
              Colombo's premier focus-first strength facility. Train under specialized compound coaching, access Olympic-grade platforms and machinery, and experience a direct, distraction-free environment built for real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button 
                onClick={() => scrollTo('pricing')}
                className="w-full sm:w-auto font-sketch text-lg font-bold bg-ink text-paper hover:bg-gold-highlight hover:text-ink px-8 py-4.5 sketch-border-lg transition-all duration-300 transform hover:-translate-y-1 sketch-shadow flex items-center justify-center gap-2 group"
              >
                <span>START WORKOUT →</span>
              </button>
              
              <div className="flex items-center gap-2 font-hand text-xl text-ink-light pl-2">
                <SketchyArrow className="rotate-[120deg] w-6 h-6 text-gold-ink" />
                <span>NO EXCUSES. JUST RESULTS.</span>
              </div>
            </div>

            {/* Micro stats panel */}
            <div className="grid grid-cols-4 gap-2 pt-6 max-w-lg border-t-2 border-ink/10 border-dashed font-hand text-lg">
              <div>
                <span className="block font-bold font-sketch text-xl text-gold-ink">300+</span>
                <span>ACTIVE MEMBERS</span>
              </div>
              <div>
                <span className="block font-bold font-sketch text-xl text-gold-ink">15+ TONS</span>
                <span>CAST IRON</span>
              </div>
              <div>
                <span className="block font-bold font-sketch text-xl text-gold-ink">3 ELITE</span>
                <span>FLOOR COACHES</span>
              </div>
              <div>
                <span className="block font-bold font-sketch text-xl text-gold-ink">24/7 ACCESS</span>
                <span>FOR MEMBERS</span>
              </div>
            </div>
          </div>

          {/* Right Column (Visual Identity) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background hatch shadow box */}
            <div className="absolute inset-0 bg-ink rounded-[20px] rotate-[3deg] opacity-10 translate-x-2 translate-y-3 pointer-events-none hatch-bg" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Taped overlay top */}
              <div className="absolute -top-4 left-1/4 w-24 h-7 bg-tape rotate-[-10deg] border-x border-ink/10 opacity-80 z-20 shadow-sm" />
              
              {/* Frame Card */}
              <div className="sketch-border-lg p-3 bg-paper shadow-xl rotate-[1.5deg] relative overflow-hidden bg-white/40">
                <img 
                  src="/hero_back_sketch.webp" 
                  alt="Detailed hand-drawn artistic pencil sketch illustration of a muscular man's back" 
                  className="w-full h-auto object-cover sketch-border"
                />
                
                {/* Post-it Note taped to the side */}
                <div className="absolute bottom-6 -right-6 w-48 p-5 post-it sketch-border-sm rotate-[-8deg] shadow-lg z-30 font-hand text-ink text-xl leading-snug select-none animate-shaky">
                  {/* Tape on Post-it */}
                  <div className="absolute -top-3.5 left-1/3 w-14 h-5.5 bg-tape rotate-[12deg] border-x border-ink/10 opacity-75 shadow-xs" />
                  <p className="font-bold text-center">
                    "No Pain No Gain"
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Value Proposition / "Why Us" Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-paper-dark/30 border-b-3 border-ink relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Row */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-sketch font-bold text-ink inline-block relative">
              WHY CHALK & IRON CO. IS BUILT FOR PERFORMANCE.
              <div className="absolute left-1/4 right-1/4 -bottom-2.5 h-2 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22><path d=%22M0,5 Q50,9 100,5%22 fill=%22none%22 stroke=%22%23121212%22 stroke-width=%223%22 stroke-linecap=%22round%22/></svg>')] bg-repeat-x" />
            </h2>
            <p className="text-ink-light font-hand text-2xl max-w-lg mx-auto">Colombo's premier dedicated strength center since 2019.</p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center font-sketch font-bold text-sm tracking-wide pt-4 max-w-5xl mx-auto border-y-2 border-dashed border-ink/20 py-6 bg-paper/40">
            <div>
              <span className="block text-2xl text-gold-ink font-black">5</span>
              <span>TRAINING PROGRAMS</span>
            </div>
            <div>
              <span className="block text-2xl text-gold-ink font-black">COLOMBO</span>
              <span>SRI LANKA</span>
            </div>
            <div>
              <span className="block text-2xl text-gold-ink font-black">Rs.2,500</span>
              <span>FROM / MONTH</span>
            </div>
            <div>
              <span className="block text-2xl text-gold-ink font-black">1-ON-1</span>
              <span>TRAINING FOCUS</span>
            </div>
            <div>
              <span className="block text-2xl text-gold-ink font-black">300+</span>
              <span>ACTIVE MEMBERS</span>
            </div>
            <div>
              <span className="block text-2xl text-gold-ink font-black">2019</span>
              <span>OPEN SINCE</span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto pt-8">
            
            {/* Card 1: Equipment */}
            <div className="bg-paper p-8 sketch-border rotate-[-1.5deg] sketch-shadow flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-transform duration-200">
              <div className="w-20 h-20 bg-gold-highlight/50 rounded-full flex items-center justify-center sketch-border-sm p-1.5">
                <Dumbbell className="w-12 h-12 text-ink" />
              </div>
              <h3 className="font-sketch font-bold text-xl">Industrial-Grade Machines</h3>
              <p className="text-ink-light leading-relaxed font-medium">
                Hack squat rigs, smith machines, and a full free weights rack from 5kg – 120kg. No shortcuts. No excuses.
              </p>
            </div>

            {/* Card 2: Coaching */}
            <div className="bg-paper p-8 sketch-border rotate-[1deg] sketch-shadow flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-transform duration-200">
              <div className="w-20 h-20 bg-gold-highlight/50 rounded-full flex items-center justify-center sketch-border-sm p-2">
                <Users className="w-12 h-12 text-ink" />
              </div>
              <h3 className="font-sketch font-bold text-xl">Coach-Led Sessions</h3>
              <p className="text-ink-light leading-relaxed font-medium">
                Expert trainers on the gym floor at all times check your rep progression and biomechanics. No standing behind desks.
              </p>
            </div>

            {/* Card 3: HIIT */}
            <div className="bg-paper p-8 sketch-border rotate-[-1deg] sketch-shadow flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-transform duration-200">
              <div className="w-20 h-20 bg-gold-highlight/50 rounded-full flex items-center justify-center sketch-border-sm p-2">
                <Flame className="w-12 h-12 text-ink" />
              </div>
              <h3 className="font-sketch font-bold text-xl">HIIT Metabolic Circuits</h3>
              <p className="text-ink-light leading-relaxed font-medium">
                Structured fat-burn circuits calibrated to push your cardiorespiratory endurance past your perceived limits.
              </p>
            </div>

          </div>

          <div className="text-center font-hand text-2xl text-gold-ink font-bold pt-4">
            ★ 4.8 GOOGLE RATING FOR OUTSTANDING LIFT RESULTS
          </div>
        </div>
      </section>



      {/* 4. Programs Deep Dive */}
      <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-paper-dark/10 border-b-3 border-ink relative">
        <div className="max-w-6xl mx-auto space-y-20">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-sketch font-bold text-ink inline-block relative">
              Coached Training Splits
              <div className="absolute left-0 right-0 -bottom-2 h-2 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22><path d=%22M0,4 Q50,7 100,3%22 fill=%22none%22 stroke=%22%239e7528%22 stroke-width=%223%22 stroke-linecap=%22round%22/></svg>')] bg-repeat-x" />
            </h2>
            <p className="text-ink-light font-hand text-2xl">Elite training programs tailored to your baseline goals.</p>
          </div>

          <div className="space-y-16 md:space-y-28">
            
            {/* Row 1: Image Left / Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Visual Left */}
              <div className="flex justify-center items-center p-2 bg-paper sketch-border-lg rotate-[-1deg] sketch-shadow overflow-hidden">
                <img src="/sketch-compound.webp" alt="Athlete performing barbell squat - compound coaching sketch" loading="lazy" className="w-full max-w-sm rounded-lg" />
              </div>
              {/* Text Right */}
              <div className="space-y-4 text-left">
                <div className="font-sketch text-gold-ink font-bold text-sm tracking-widest">Viktor Vance - Compounds Director</div>
                <h3 className="font-sketch text-2xl sm:text-3xl font-bold text-ink">1-ON-1 Compound Coaching</h3>
                <p className="text-lg text-ink-light leading-relaxed">
                  Personalized strength cycles led by Viktor Vance (Compounds & Heavy Lifts, 11+ Yrs Exp). Focus on squat biomechanics, deadlifts, and hypertrophy block cycling. Remove plates selection error.
                </p>
                <div className="font-hand text-xl text-gold-ink font-bold flex items-center gap-2">
                  <SketchyCheck className="w-6 h-6" />
                  <span>Builds real, visual compound strength</span>
                </div>
              </div>
            </div>

            {/* Row 2: Text Left / Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Visual Right (Order adjustment for desktop/mobile) */}
              <div className="md:order-2 flex justify-center items-center p-2 bg-paper sketch-border-lg rotate-[1.5deg] sketch-shadow overflow-hidden">
                <img src="/sketch-rehab.webp" alt="Physiotherapist guiding knee rehabilitation - biomechanical rehab sketch" loading="lazy" className="w-full max-w-sm rounded-lg" />
              </div>
              {/* Text Left */}
              <div className="md:order-1 space-y-4 text-left">
                <div className="font-sketch text-gold-ink font-bold text-sm tracking-widest">Liam O'Connor - Biomechanics Lead</div>
                <h3 className="font-sketch text-2xl sm:text-3xl font-bold text-ink">Biomechanical Muscle Rehab</h3>
                <p className="text-lg text-ink-light leading-relaxed">
                  Liam O'Connor (Orthopaedic Rehab, 9+ Yrs Exp) bridges performance coaching and physical recovery. Stables joint mechanics through controlled, safe progressive loading targets.
                </p>
                <div className="font-hand text-xl text-gold-ink font-bold flex items-center gap-2">
                  <SketchyCheck className="w-6 h-6" />
                  <span>Restores structural mechanics after injury</span>
                </div>
              </div>
            </div>

            {/* Row 3: Image Left / Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Visual Left */}
              <div className="flex justify-center items-center p-2 bg-paper sketch-border-lg rotate-[-1.5deg] sketch-shadow overflow-hidden">
                <img src="/sketch-hiit.webp" alt="Athlete doing intense HIIT circuit training - metabolic conditioning sketch" loading="lazy" className="w-full max-w-sm rounded-lg" />
              </div>
              {/* Text Right */}
              <div className="space-y-4 text-left">
                <div className="font-sketch text-gold-ink font-bold text-sm tracking-widest">Sarah Jenkins - Circuits Lead</div>
                <h3 className="font-sketch text-2xl sm:text-3xl font-bold text-ink">HIIT Metabolic Conditioning</h3>
                <p className="text-lg text-ink-light leading-relaxed">
                  Lactic acid conditioning circuits led by Sarah Jenkins (Conditioning & Fat Loss, 7+ Yrs Exp). Sweat-driven workouts designed for cardiorespiratory endurance and aggressive fat loss.
                </p>
                <div className="font-hand text-xl text-gold-ink font-bold flex items-center gap-2">
                  <SketchyCheck className="w-6 h-6" />
                  <span>High-intensity cardiorespiratory conditioning</span>
                </div>
              </div>
            </div>

            {/* Specialty splits list */}
            <div className="bg-paper p-8 sketch-border-lg max-w-3xl mx-auto text-left relative rotate-[-0.5deg]">
              <div className="absolute -top-3 left-10 w-16 h-5.5 bg-tape rotate-[-10deg] border-x border-ink/10 opacity-70" />
              <h4 className="font-sketch font-bold text-xl text-ink mb-4">SPECIALTY SPLITS AVAILABLE:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-hand text-xl text-ink-light">
                <li className="flex items-center gap-2">
                  <SketchyCheck className="w-5 h-5 text-gold-ink" />
                  <span><strong>Elderly Training:</strong> Strength & balance for longevity</span>
                </li>
                <li className="flex items-center gap-2">
                  <SketchyCheck className="w-5 h-5 text-gold-ink" />
                  <span><strong>Pre & Postnatal:</strong> Expert-safe physical conditioning</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Biometric Scan / Interactive BMI Calculator */}
      <section id="bmi-calc" className="py-20 px-4 sm:px-6 lg:px-8 border-b-3 border-ink bg-paper">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-sketch font-bold text-ink inline-block relative">
              Biometric Scan Calculator
              <div className="absolute left-1/4 right-1/4 -bottom-2 h-1 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22><path d=%22M0,5 Q50,7 100,5%22 fill=%22none%22 stroke=%22%23121212%22 stroke-width=%222%22 stroke-linecap=%22round%22/></svg>')] bg-repeat-x" />
            </h2>
            <p className="text-ink-light font-hand text-2xl">Use our interactive BMI metric planner to map your baseline goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-paper-dark/20 p-8 md:p-12 sketch-border-lg">
            
            {/* Input Sliders */}
            <div className="space-y-8 text-left">
              <div className="space-y-3">
                <label className="font-sketch font-bold text-lg flex justify-between">
                  <span>Weight</span>
                  <span className="font-sans font-semibold text-gold-ink">{bmiWeight} kg</span>
                </label>
                <input 
                  type="range"
                  min="40"
                  max="150"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(parseInt(e.target.value))}
                  className="w-full accent-ink bg-paper h-2 sketch-border-sm cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <label className="font-sketch font-bold text-lg flex justify-between">
                  <span>Height</span>
                  <span className="font-sans font-semibold text-gold-ink">{bmiHeight} cm</span>
                </label>
                <input 
                  type="range"
                  min="120"
                  max="220"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(parseInt(e.target.value))}
                  className="w-full accent-ink bg-paper h-2 sketch-border-sm cursor-pointer"
                />
              </div>

              <div className="text-center font-hand text-lg text-gold-ink font-bold pt-2">
                ↑ Adjust sliders — BMI updates live
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="p-8 bg-paper sketch-border rotate-[1.5deg] text-center flex flex-col justify-center items-center gap-3 min-h-[220px]">
              <div className="font-sketch font-bold text-xl text-ink-light">BODY MASS INDEX</div>
              <div className="font-sketch text-5xl font-black text-ink select-none">{activeBmi} kg/m²</div>
              <div className={`font-sketch font-black text-sm tracking-wider px-3 py-1 bg-gold-highlight sketch-border-sm ${bmiLabel.color}`}>
                {bmiLabel.text}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Anatomy of the Facility / Equipment Details */}
      <section id="anatomy" className="py-20 px-4 sm:px-6 lg:px-8 border-b-3 border-ink bg-paper">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-sketch font-bold text-ink inline-block relative">
              Anatomy of the Facility.
              <div className="absolute left-1/4 right-1/4 -bottom-2 h-1 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22><path d=%22M0,5 Q50,7 100,5%22 fill=%22none%22 stroke=%22%23121212%22 stroke-width=%222%22 stroke-linecap=%22round%22/></svg>')] bg-repeat-x" />
            </h2>
            <p className="text-ink-light font-hand text-2xl">Premium training gear built for Colombo's focused lifters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Part 1 */}
            <div className="p-6 bg-paper sketch-border rotate-[-1deg] space-y-3 flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div className="text-gold-ink"><Dumbbell className="w-10 h-10 stroke-[2]" /></div>
              <h4 className="font-sketch font-bold text-lg">Hack Squat Rig</h4>
              <p className="font-hand text-lg text-ink-light">Commercial-grade target loading setup designed for absolute quad strain and heavy quad extensions.</p>
            </div>

            {/* Part 2 */}
            <div className="p-6 bg-paper sketch-border rotate-[1.5deg] space-y-3 flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div className="text-gold-ink"><BookOpen className="w-10 h-10 stroke-[2]" /></div>
              <h4 className="font-sketch font-bold text-lg">Smith Machine</h4>
              <p className="font-hand text-lg text-ink-light">Full Olympic smith setup with counterweights for safe lock-outs and isolated compound reps.</p>
            </div>

            {/* Part 3 */}
            <div className="p-6 bg-paper sketch-border rotate-[-1.5deg] space-y-3 flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div className="text-gold-ink"><Users className="w-10 h-10 stroke-[2]" /></div>
              <h4 className="font-sketch font-bold text-lg">5kg – 120kg Rack</h4>
              <p className="font-hand text-lg text-ink-light">A massive free weight dumbbell rack extending from 5kg to 120kg. No shortcuts. No excuses.</p>
            </div>

            {/* Part 4 */}
            <div className="p-6 bg-paper sketch-border rotate-[1deg] space-y-3 flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div className="text-gold-ink"><ShieldCheck className="w-10 h-10 stroke-[2]" /></div>
              <h4 className="font-sketch font-bold text-lg">Physical Ledger Vault</h4>
              <p className="font-hand text-lg text-ink-light">Keep your personal Gym Journal progress book locked in our floor cabinet. No phones allowed on platforms.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Pricing Plans Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-b-3 border-ink relative overflow-hidden">
        {/* Subtle graphite texture layout */}
        <div className="absolute inset-0 hatch-bg-fine opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-16 relative">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-sketch font-bold text-ink">Choose Your Access Pass</h2>
            <p className="text-ink-light font-hand text-2xl">Access passes in Sri Lankan Rupees (Rs.).</p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
            
            {/* Plan 1: BASIC */}
            <div className="bg-paper p-8 sketch-border rotate-[-1deg] sketch-shadow flex flex-col justify-between h-[520px] relative">
              {/* Tape Accent */}
              <div className="absolute -top-3 left-6 w-16 h-5.5 bg-tape rotate-[12deg] border-x border-ink/10 opacity-75" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-sketch font-bold text-2xl text-ink">BASIC</h3>
                  <p className="font-hand text-lg text-ink-light mt-1">Access to basic compound stations.</p>
                </div>
                
                <div className="border-b border-dashed border-ink/20 pb-4">
                  <span className="font-sketch text-4xl font-black">Rs. 2,500</span>
                  <span className="font-hand text-xl text-ink-light"> / Month</span>
                  <div className="text-xs font-sketch text-gold-ink font-bold mt-1">STANDARD VISITS ONLY</div>
                </div>

                <ul className="space-y-3 font-hand text-lg">
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-4 h-4 text-gold-ink flex-shrink-0" />
                    <span>Daily floor access until 11 PM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-4 h-4 text-gold-ink flex-shrink-0" />
                    <span>Access to basic stations & gear</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-4 h-4 text-gold-ink flex-shrink-0" />
                    <span>Lockers and showers included</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => scrollTo('contact')}
                className="w-full py-3 sketch-border-sm font-sketch font-bold text-sm bg-paper hover:bg-ink hover:text-paper transition-colors duration-200"
              >
                JOIN BASIC (Rs. 2,500)
              </button>
            </div>

            {/* Plan 2: PRO (Recommended) */}
            <div className="bg-paper p-8 sketch-border-lg rotate-[0.5deg] sketch-shadow-lg flex flex-col justify-between h-[570px] relative z-10 border-gold-ink">
              
              {/* RECOMMENDED badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold-highlight text-ink px-4 py-1.5 sketch-border-sm font-sketch font-bold text-xs rotate-[-3deg] shadow-md flex items-center gap-1 select-none animate-bounce">
                <Award className="w-4 h-4 text-gold-ink" />
                <span>POPULAR PLAN</span>
              </div>
              
              <div className="space-y-6 pt-2">
                <div>
                  <h3 className="font-sketch font-bold text-3xl text-ink flex items-center gap-1">
                    PRO
                  </h3>
                  <p className="font-hand text-lg text-ink-light mt-1">Full 24/7 priority access for serious lifters.</p>
                </div>
                
                <div className="border-b border-dashed border-ink/20 pb-4">
                  <span className="font-sketch text-5xl font-black text-gold-ink">Rs. 5,000</span>
                  <span className="font-hand text-2xl text-ink-light"> / Month</span>
                  <div className="text-xs font-sketch text-ink font-bold mt-1">THE PREFERRED SPLIT</div>
                </div>

                <ul className="space-y-3 font-hand text-xl">
                  <li className="flex items-center gap-2 font-bold">
                    <SketchyCheck className="w-5 h-5 text-gold-ink flex-shrink-0" />
                    <span>24/7 Priority floor & platform access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-5 h-5 text-gold-ink flex-shrink-0" />
                    <span>Full equipment access (no limits)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-5 h-5 text-gold-ink flex-shrink-0" />
                    <span>Monthly trainer progression check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-5 h-5 text-gold-ink flex-shrink-0" />
                    <span>Standard peak hour rack bookings</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => scrollTo('contact')}
                className="w-full py-4 sketch-border font-sketch font-bold text-base bg-ink text-paper hover:bg-gold-highlight hover:text-ink transition-colors duration-200 shadow-md"
              >
                JOIN PRO (Rs. 5,000)
              </button>
            </div>

            {/* Plan 3: ELITE */}
            <div className="bg-paper p-8 sketch-border rotate-[1deg] sketch-shadow flex flex-col justify-between h-[520px] relative">
              {/* Tape Accent */}
              <div className="absolute -top-3 right-6 w-16 h-5.5 bg-tape rotate-[-8deg] border-x border-ink/10 opacity-75" />

              <div className="space-y-6">
                <div>
                  <h3 className="font-sketch font-bold text-2xl text-ink">ELITE</h3>
                  <p className="font-hand text-lg text-ink-light mt-1">Elite 1-on-1 personal training access.</p>
                </div>
                
                <div className="border-b border-dashed border-ink/20 pb-4">
                  <span className="font-sketch text-4xl font-black text-gold-ink">Rs. 9,500</span>
                  <span className="font-hand text-xl text-ink-light"> / Month</span>
                  <div className="text-xs font-sketch text-gold-ink font-bold mt-1">FULL PRIVATE ACCESS</div>
                </div>

                <ul className="space-y-3 font-hand text-lg">
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-4 h-4 text-gold-ink flex-shrink-0" />
                    <span>24/7 Priority + VIP section access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-4 h-4 text-gold-ink flex-shrink-0" />
                    <span>Weekly 1-on-1 specialized coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-4 h-4 text-gold-ink flex-shrink-0" />
                    <span>Personalized nutrition programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SketchyCheck className="w-4 h-4 text-gold-ink flex-shrink-0" />
                    <span>Priority peak hour bookings</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => scrollTo('contact')}
                className="w-full py-3 sketch-border-sm font-sketch font-bold text-sm bg-paper hover:bg-ink hover:text-paper transition-colors duration-200"
              >
                JOIN ELITE (Rs. 9,500)
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Social Proof Carousel */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-paper-dark/20 border-b-3 border-ink relative overflow-hidden">
        
        {/* Decorative pins */}
        <div className="absolute inset-0 bg-[radial-gradient(#121212_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-12 text-center relative z-10">
          
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-sketch font-bold text-ink">The Iron Board</h2>
            <p className="text-ink-light font-hand text-2xl">Dispatches posted directly by actual lifters.</p>
          </div>

          {/* bulletin board box */}
          <div className="bg-paper-dark/40 sketch-border-lg p-6 sm:p-10 md:p-14 relative min-h-[360px] flex items-center justify-center shadow-inner">
            
            {/* Hanging String Doodles */}
            <div className="absolute -top-3 left-10 w-24 h-6 border-b-2 border-dashed border-ink/40 rounded-full" />
            <div className="absolute -top-3 right-10 w-24 h-6 border-b-2 border-dashed border-ink/40 rounded-full" />

            {/* Carousel Active Card */}
            <div className={`bg-paper p-8 sketch-border max-w-xl mx-auto transition-transform duration-300 relative ${testimonials[activeTestimonial].rotation} shadow-xl bg-white/70`}>
              
              {/* Tape at the top of note */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-6.5 bg-tape rotate-[-2deg] border-x border-ink/10 opacity-75 shadow-xs" />
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 text-gold-ink">
                <SketchyStar className="w-5 h-5 fill-gold-ink" />
                <SketchyStar className="w-5 h-5 fill-gold-ink" />
                <SketchyStar className="w-5 h-5 fill-gold-ink" />
                <SketchyStar className="w-5 h-5 fill-gold-ink" />
                <SketchyStar className="w-5 h-5 fill-gold-ink" />
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl font-hand leading-relaxed italic text-ink font-bold">
                "{testimonials[activeTestimonial].text}"
              </p>

              {/* Author Info */}
              <div className="mt-6 border-t border-dashed border-ink/20 pt-4 flex flex-col items-center">
                <span className="font-sketch font-bold text-ink text-base">
                  {testimonials[activeTestimonial].author}
                </span>
                <span className="font-hand text-gold-ink text-lg font-bold">
                  {testimonials[activeTestimonial].role}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-6">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-paper border-2 border-ink flex items-center justify-center hover:bg-gold-highlight shadow-md transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-6">
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-paper border-2 border-ink flex items-center justify-center hover:bg-gold-highlight shadow-md transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full border border-ink transition-all ${activeTestimonial === i ? 'bg-ink scale-110' : 'bg-paper-dark'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 9. Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-b-3 border-ink relative overflow-hidden bg-paper">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-sketch font-bold text-ink inline-block relative">
              CONTACT US.
              <div className="absolute left-1/4 right-1/4 -bottom-2 h-1 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 preserveAspectRatio=%22none%22><path d=%22M0,5 Q50,7 100,5%22 fill=%22none%22 stroke=%22%23121212%22 stroke-width=%222%22 stroke-linecap=%22round%22/></svg>')] bg-repeat-x" />
            </h2>
            <p className="text-ink-light font-hand text-2xl">Connect with the training floor staff.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left max-w-5xl mx-auto">
            
            {/* Contact details */}
            <div className="space-y-8 bg-paper p-8 sketch-border rotate-[-1deg] bg-white/30">
              <h3 className="font-sketch font-bold text-2xl border-b-2 border-dashed border-ink/20 pb-3">Training Club Details</h3>
              
              <ul className="space-y-6 font-hand text-2xl text-ink-light">
                <li className="flex items-center gap-3">
                  <Phone className="w-7 h-7 text-gold-ink flex-shrink-0" />
                  <span><strong>Phone:</strong> 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-7 h-7 text-gold-ink flex-shrink-0" />
                  <span><strong>Email:</strong> info@chalkandiron.co</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-gold-ink flex-shrink-0" />
                  <span><strong>Address:</strong> 123, Colombo, Sri Lanka</span>
                </li>
                <li className="flex items-center gap-3 border-t border-dashed border-ink/15 pt-4">
                  <ShieldCheck className="w-7 h-7 text-gold-ink flex-shrink-0" />
                  <span><strong>Hours:</strong> Mon – Sun, 6 AM – 11 PM</span>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="bg-paper p-8 sketch-border-lg rotate-[1deg]">
              {contactSent ? (
                <div className="text-center py-10 space-y-4 animate-shaky">
                  <h3 className="font-sketch font-bold text-3xl text-gold-ink">DISPATCH SENT!</h3>
                  <p className="font-hand text-2xl text-ink-light">Our floor trainers have catalogued your message and will call shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
                  <div className="space-y-2">
                    <label className="font-sketch font-bold text-sm block">FULL NAME</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-3 bg-paper sketch-border-sm focus:outline-none focus:bg-white text-ink font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-sketch font-bold text-sm block">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-paper sketch-border-sm focus:outline-none focus:bg-white text-ink font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-sketch font-bold text-sm block">MESSAGE</label>
                    <textarea 
                      rows="4"
                      required
                      placeholder="How can we help?"
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      className="w-full px-4 py-3 bg-paper sketch-border-sm focus:outline-none focus:bg-white text-ink font-medium"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 sketch-border font-sketch font-black text-sm bg-ink text-paper hover:bg-gold-highlight hover:text-ink transition-colors shadow-md"
                  >
                    &gt; SEND_MESSAGE.RUN()
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 10. Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand Logo & Tag */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-7 h-7" />
              <span className="font-sketch font-bold text-2xl">Chalk & Iron Co.</span>
            </div>
            <div className="font-sans text-[11px] font-semibold text-ink-light tracking-widest mt-1 uppercase">
              © 2026 Chalk & Iron Co. Ink, Sweat, and Iron.
            </div>
          </div>

          {/* Mini Sketched Social links & icons */}
          <div className="flex items-center gap-6 font-sketch font-bold text-sm">
            <a href="#" className="hover:text-gold-ink flex items-center gap-1 hover:underline">
              <span className="font-hand text-lg">🐦</span> TWITTER
            </a>
            <a href="#" className="hover:text-gold-ink flex items-center gap-1 hover:underline">
              <span className="font-hand text-lg">📸</span> INSTAGRAM
            </a>
            <a href="#" className="hover:text-gold-ink flex items-center gap-1 hover:underline">
              <span className="font-hand text-lg">💪</span> CLUB
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
