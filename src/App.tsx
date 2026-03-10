/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  MessageCircle,
  MapPin,
  Instagram,
  Facebook,
  ChevronDown,
  ShoppingBag,
  Heart,
  Info,
  Phone
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "كاراكو عاصمي للأطفال",
    image: "/karako.webp",
    price: "اتصل للسعر",
    category: "تقليدي"
  },
  {
    id: 2,
    name: "قفطان بناتي مطرز بالذهب",
    image: "/qoftan.webp",
    price: "اتصل للسعر",
    category: "مناسبات"
  },
  {
    id: 3,
    name: "جبة قبائلية للصغار",
    image: "/jobba.webp",
    price: "اتصل للسعر",
    category: "تراث"
  },
  {
    id: 4,
    name: "الشدة التلمسانية",
    image: "/chedda.webp",
    price: "اتصل للسعر",
    category: "فخامة"
  },
  {
    id: 5,
    name: "قشابية للصغار",
    image: "/kachabia.webp",
    price: "اتصل للسعر",
    category: "عصري"
  },
  {
    id: 6,
    name: "قندورة قسنطينية صغيرة",
    image: "/qendora.webp",
    price: "اتصل للسعر",
    category: "كلاسيك"
  }
];

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="-1.5 0 259 259" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
      <path d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z" fill="currentColor"></path>
    </g>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.reload();
    }
  };

  const handleWhatsApp = (productName: string) => {
    const message = productName === "استفسار عام"
      ? "مرحبًا، أود الاستفسار أكثر عن خدماتكم ومنتجاتكم."
      : `مرحبا اريد كراء هذا المنتج (${productName})`;
    window.open(`https://wa.me/213000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full pattern-bg selection:bg-gold selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#7e0913] shadow-md border-b border-black/10 py-3">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img src="/al-malika-logo.webp" alt="Al Malika" className="h-10 md:h-12 w-auto" />
            <span className="text-2xl font-amiri font-bold text-white">Al Malika</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white hover:text-gold transition-colors font-medium">الرئيسية</a>
            <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="text-white hover:text-gold transition-colors font-medium">المنتجات</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-gold transition-colors font-medium">من نحن</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-gold transition-colors font-medium">تواصل معنا</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white cursor-pointer"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <button
              onClick={() => handleWhatsApp("استفسار عام")}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-5 py-2 rounded-full hover:from-[#B8860B] hover:to-[#996515] transition-all shadow-lg cursor-pointer"
            >
              <WhatsAppIcon />
              <span>احجز الآن</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden border-t border-gold/10"
            >
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-lg py-2 border-b border-gold/5">الرئيسية</a>
              <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="text-lg py-2 border-b border-gold/5">المنتجات</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg py-2 border-b border-gold/5">من نحن</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-lg py-2 border-b border-gold/5">تواصل معنا</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_image_algerian_outfits.webp"
            alt="Traditional Algerian Kids Clothing"
            className="w-full h-full object-cover opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-amiri font-bold mb-3 md:mb-6 leading-tight flex flex-col gap-1">
              <span className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] md:mt-12">أناقة التراث الجزائري</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F1D279] to-[#D4AF37] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-3xl md:text-5xl mt-2 italic py-2 leading-[normal]">لأميراتكم وأمرائكم الصغار</span>
            </h1>
            <p className="text-xl text-white font-medium drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] max-w-2xl mb-10 leading-relaxed md:ml-auto md:mr-0 mx-auto mt-4">
              نقدم لكم في "Al Malika" أرقى الملابس التقليدية الجزائرية للأطفال، مصممة بحب لتناسب أفراحكم ومناسباتكم الخاصة. كراء الملابس التقليدية بجودة ملكية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="bg-algerian-green text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gold transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag size={20} />
                تصفح الملابس
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#B8860B] drop-shadow-md"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white/50">
        <div className="container mx-auto px-2 lg:px-6">
          <div className="text-center mb-16 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-amiri font-bold text-algerian-green mb-4"
            >
              مجموعتنا المختارة
            </motion.h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-algerian-green/70 max-w-xl mx-auto">
              اكتشفوا تشكيلتنا الواسعة من الكاراكو، القفطان، والجبة القبائلية المصممة خصيصاً للأطفال.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gold/10"
              >
                <div className="relative h-56 md:h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm text-[#B8860B] px-2 py-1 md:px-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="bg-white text-algerian-green p-2 md:p-4 rounded-full shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 cursor-pointer"
                    >
                      <Heart className="fill-gold text-[#B8860B] w-4 h-4 md:w-6 md:h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-3 md:p-6 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-algerian-green mb-1 md:mb-2 line-clamp-2 md:line-clamp-none leading-snug">{product.name}</h3>
                  <p className="text-[#B8860B] text-xs md:text-base font-medium mb-3 md:mb-6">{product.price}</p>
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="w-full bg-[#25D366] text-white py-2 md:py-3 rounded-lg md:rounded-xl font-bold hover:bg-[#1DA851] transition-all flex items-center justify-center gap-1 md:gap-2 text-[11px] md:text-base cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 hidden sm:block" />
                    احجز هذا المنتج
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/Mila.webp"
                  alt="Algerian Craftsmanship"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">قصتنا</span>
              <h2 className="text-4xl font-amiri font-bold text-algerian-green mb-8">عن Al Malika</h2>
              <div className="space-y-6 text-lg text-algerian-green/80 leading-relaxed">
                <p>
                  بدأت "Al Malika" كحلم صغير للحفاظ على الهوية الجزائرية العريقة ونقلها للأجيال القادمة. نحن نؤمن أن كل طفل يستحق أن يشعر بالفخامة والتميز في المناسبات السعيدة.
                </p>
                <p>
                  نختار ملابسنا بعناية فائقة، مع التركيز على جودة الأقمشة، دقة التطريز اليدوي، والتصاميم التي تجمع بين أصالة الماضي ولمسة الحاضر. كل قطعة في مجموعتنا تحكي قصة من تراثنا الجزائري الغني.
                </p>
                <p>
                  سواء كان ذلك لحفل زفاف، ختان، أو عيد، نحن هنا لنضمن أن أطفالكم يتألقون بأجمل حلة تقليدية تليق بمقامهم.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-cream overflow-hidden border-t border-gold/10">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-amiri font-bold text-algerian-green mb-4">ماذا يقول عملاؤنا؟</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>

        <div className="relative flex overflow-x-hidden w-full marquee-container py-10 gap-6" dir="ltr">
          <div className="animate-marquee flex gap-6 shrink-0">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={`testimonial-1-${idx}`} className="w-56 md:w-80 h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white shrink-0 bg-white transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img src="/al-malika-logo_optimized.webp" alt="Customer Feedback" className="w-full h-full object-contain p-4 mix-blend-multiply" />
              </div>
            ))}
          </div>
          <div className="animate-marquee flex gap-6 shrink-0" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={`testimonial-2-${idx}`} className="w-56 md:w-80 h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white shrink-0 bg-white transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img src="/al-malika-logo_optimized.webp" alt="Customer Feedback" className="w-full h-full object-contain p-4 mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-algerian-green text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-amiri font-bold mb-8">تواصلوا معنا</h2>
            <p className="text-white/70 mb-12 text-lg">
              نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار اللباس المثالي لأطفالكم.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold mb-2">اتصل بنا</h3>
                <p dir="ltr">+213 000 000 000</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold mb-2">موقعنا</h3>
                <p>مدينة ميلة، الجزائر</p>
              </div>
              <div
                onClick={() => handleWhatsApp("استفسار عام")}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">واتساب</h3>
                <p>متاحون للرد السريع</p>
              </div>
            </div>

            <button
              onClick={() => handleWhatsApp("استفسار عام")}
              className="bg-[#25D366] text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-[#1DA851] transition-all shadow-2xl inline-flex items-center gap-3 cursor-pointer"
            >
              <WhatsAppIcon className="w-6 h-6" />
              تواصل معنا عبر واتساب الآن
            </button>
          </div>
        </div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none pattern-bg"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-cream border-t border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right">
              <div className="text-2xl font-amiri font-bold text-algerian-green mb-2">Al Malika</div>
              <p className="text-algerian-green/60 text-sm">أناقة التراث الجزائري للأطفال</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all cursor-pointer">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all cursor-pointer">
                <Facebook size={20} />
              </a>
            </div>

            <div className="text-sm text-algerian-green/60">
              جميع الحقوق محفوظة © {new Date().getFullYear()} Al Malika
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
