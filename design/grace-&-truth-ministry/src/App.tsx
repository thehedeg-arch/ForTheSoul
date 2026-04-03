import React from 'react';
import { Search, Menu, ArrowDown, Play, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from './lib/utils';

// --- Components ---

const TypewriterVerse = ({ text, className }: { text: string; className?: string }) => (
  <div className={cn("font-mono text-jet-black/40 text-xs md:text-sm leading-relaxed whitespace-pre-wrap pointer-events-none select-none", className)}>
    {text}
  </div>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-ministry-beige/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-jet-black rounded-lg flex items-center justify-center text-white font-serif italic text-xl">
          G
        </div>
        <div className="text-xl font-serif font-bold leading-tight tracking-tighter">
          Grace & Truth<br />
          <span className="text-sm font-sans font-normal tracking-widest uppercase text-ministry-gray text-[10px]">Foundations of Faith</span>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-ministry-gray">
        <a href="#" className="hover:text-jet-black transition-colors">Teachings</a>
        <a href="#" className="hover:text-jet-black transition-colors">Testimonies</a>
        <a href="#" className="hover:text-jet-black transition-colors">Foundations</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors md:hidden">
          <Menu size={20} />
        </button>
      </div>
    </div>
  </header>
);

const VerticalDecorativeText = ({ text, className }: { text: string, className?: string }) => (
  <div className={cn("absolute pointer-events-none select-none font-serif text-[15rem] md:text-[25rem] leading-none text-jet-black opacity-[0.03] whitespace-nowrap z-0", className)} style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
    {text}
  </div>
);

const Hero = () => (
  <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
    <TypewriterVerse 
      className="absolute -right-10 top-20 w-64 opacity-60 rotate-1"
      text={`For the word of 
God is living 
and active, 
sharper than 
any two-edged 
sword, piercing 
to the division 
of soul and of 
spirit, of 
joints and of 
marrow, and 
discerning the 
thoughts and 
intentions of 
the heart.`}
    />
    <VerticalDecorativeText text="The Word" className="-right-20 top-0" />
    
    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-6 relative">
        <p className="text-ministry-gray font-medium tracking-tight uppercase text-xs">Come • Learn • Believe</p>
        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight text-jet-black">
          Discover the <br />
          <span className="italic">Foundations</span> of Faith.
        </h1>
        <p className="text-xl text-ministry-gray max-w-lg leading-relaxed">
          A digital archive of teachings, testimonies, and the basic knowledge of the Word, curated for those seeking truth and understanding.
        </p>
      </div>
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden shadow-2xl aspect-video relative group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000" 
            alt="The Word"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-jet-black shadow-lg">
              <Play fill="currentColor" size={24} className="ml-1" />
            </div>
          </div>
        </motion.div>
        <div className="mt-4">
          <h3 className="font-bold text-lg">Introduction to the Gospel</h3>
          <p className="text-ministry-gray text-sm">A foundational teaching on the core of our belief.</p>
        </div>
      </div>
    </div>
    
    <div className="mt-20 flex justify-center relative z-10">
      <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-200">
        <path d="M0 40C200 40 250 10 250 10V0H252V10C252 10 302 40 502 40C702 40 752 10 752 10V0H754V10C754 10 804 40 1004 40" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
  </section>
);

const FoundationCard = ({ title, description, color, index }: { title: string, description: string, color: string, index: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="group cursor-pointer"
  >
    <div className={cn("h-1 w-full mb-6 transition-all duration-500 group-hover:h-2", color)} />
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-ministry-gray tracking-widest">{index}</span>
      </div>
      <div className="space-y-3">
        <h3 className="text-3xl font-sans font-black tracking-tighter text-jet-black uppercase leading-none">
          {title}
        </h3>
        <p className="text-ministry-gray leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
      <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-jet-black group-hover:translate-x-2 transition-transform">
        Explore Foundation <ArrowRight size={14} />
      </div>
    </div>
  </motion.div>
);

const FoundationsGrid = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto border-t border-slate-200 relative overflow-hidden">
    <TypewriterVerse 
      className="absolute -left-20 bottom-40 w-80 opacity-40 -rotate-2"
      text={`In the beginning 
was the Word, 
and the Word 
was with God, 
and the Word 
was God. He 
was in the 
beginning with 
God. All things 
were made 
through him, 
and without 
him was not 
any thing made 
that was made.`}
    />
    <VerticalDecorativeText text="Foundations" className="-left-20 top-20 opacity-[0.02]" />
    
    <div className="mb-20 max-w-2xl">
      <h2 className="text-5xl font-serif font-bold tracking-tight text-jet-black mb-6 italic">The Pillars of Belief</h2>
      <p className="text-xl text-ministry-gray leading-relaxed">
        Our faith is built upon these core foundations, each providing a unique perspective on the truth of the Word.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      <FoundationCard 
        index="01"
        title="The Word" 
        description="Understanding the historical and spiritual context of the Holy Scriptures." 
        color="bg-jet-black"
      />
      <FoundationCard 
        index="02"
        title="Grace" 
        description="Exploring the unmerited favor and the transformative power of God's love." 
        color="bg-sky-blue"
      />
      <FoundationCard 
        index="03"
        title="Salvation" 
        description="The core message of redemption and the journey of faith through Christ." 
        color="bg-oxblood"
      />
      <FoundationCard 
        index="04"
        title="Community" 
        description="The importance of fellowship and walking together in the light of truth." 
        color="bg-olive-leaf"
      />
    </div>
  </section>
);

const BannerSection = () => (
  <section className="bg-jet-black text-white py-32 relative overflow-hidden">
    <TypewriterVerse 
      className="absolute -left-10 top-10 w-64 opacity-20 text-white rotate-12"
      text={`Grace to you 
and peace from 
God our Father 
and the Lord 
Jesus Christ. 
I thank my 
God in all my 
remembrance 
of you.`}
    />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-sky-blue font-medium tracking-widest uppercase text-xs">The Invitation</p>
        <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
          "For where your treasure is, there your heart will be also."
        </h2>
        <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
          We invite you to explore these archives not as a history of an institution, but as a living testimony of faith available to all.
        </p>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif select-none">
        Truth
      </div>
    </div>
  </section>
);

const StoryCard = ({ title, description, time, image, category }: { title: string, description: string, time: string, image: string, category: string }) => (
  <div className="space-y-4 group cursor-pointer relative">
    <div className="aspect-video rounded-xl overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
        {category}
      </div>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
    </div>
    <div className="space-y-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-ministry-gray text-sm line-clamp-2">{description}</p>
      <p className="text-xs font-mono text-ministry-gray">{time}</p>
    </div>
  </div>
);

const StoriesSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
    <VerticalDecorativeText text="Testimonies" className="-left-20 top-0 opacity-[0.02]" />
    
    <div className="relative z-10">
      <div className="flex items-baseline justify-between border-b border-slate-200 pb-8 mb-12">
        <h2 className="text-6xl font-serif font-bold tracking-tighter">Teachings & Testimonies</h2>
        <button className="flex items-center gap-2 text-sm font-medium hover:text-jet-black transition-colors">
          View Archive <ArrowRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <StoryCard 
          title="The Foundation of Hope"
          description="A deep dive into the theological roots of hope and its practical application in daily life."
          time="12:45"
          category="Teaching"
          image="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600"
        />
        <StoryCard 
          title="The Heritage Foundation Report"
          description="A collaborative testimony on the impact of faith-based initiatives in urban development."
          time="08:20"
          category="Foundation"
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
        />
        <StoryCard 
          title="A Journey Through Grace"
          description="An individual testimony of transformation and the discovery of faith in unexpected places."
          time="05:30"
          category="Testimony"
          image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600"
        />
      </div>
    </div>
  </section>
);

const TopicItem = ({ label, color, delay = 0, className }: { label: string, color: string, delay?: number, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    className={cn("flex flex-col items-center group cursor-pointer relative pt-8", className)}
  >
    {/* The Pin */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={cn("w-3 h-3 rounded-full mb-1 shadow-sm ring-4 ring-white", color)} 
      />
      <div className="w-px h-4 bg-slate-200 group-hover:h-6 group-hover:bg-slate-400 transition-all duration-700" />
    </div>
    
    {/* Gradient Shadow Background */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-44 h-44 md:w-56 md:h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-700 scale-75 group-hover:scale-125 -z-10">
      <div className={cn("absolute inset-0 rounded-full bg-gradient-to-br", 
        color.replace('bg-', 'from-'), 
        "to-sky-blue/30"
      )} />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0" />
    </div>
    
    {/* The Circle */}
    <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-white border border-slate-100 flex flex-col items-center justify-center p-6 group-hover:-translate-y-4 transition-all duration-700 relative overflow-hidden z-10 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-50/30 to-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="w-full border-t border-dotted border-slate-300 mb-4 relative z-10 opacity-60" />
      <span className="font-sans font-black text-center text-sm md:text-xl tracking-tighter text-jet-black px-4 uppercase leading-none relative z-10 transition-transform duration-700 group-hover:scale-110">
        {label}
      </span>
      <div className="w-full border-t border-dotted border-slate-300 mt-4 relative z-10 opacity-60" />
      
      {/* Decorative inner ring */}
      <div className="absolute inset-4 border border-dashed border-slate-100 rounded-full pointer-events-none group-hover:rotate-45 transition-transform duration-1000" />
    </div>
  </motion.div>
);

const TopicsSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
    <TypewriterVerse 
      className="absolute -right-12 bottom-20 w-72 opacity-50 rotate-3"
      text={`Faith comes 
from hearing, 
and hearing 
through the 
word of Christ. 
How then will 
they call on 
him in whom 
they have not 
believed? And 
how are they 
to believe in 
him of whom 
they have 
never heard?`}
    />
    <VerticalDecorativeText text="Teachings" className="-right-20 top-40 opacity-[0.02]" />
    
    <div className="mb-12 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-6 mb-4"
      >
        <div className="h-px w-12 md:w-24 bg-slate-200" />
        <span className="text-lg font-hand text-ministry-gray italic">Core Doctrines</span>
        <div className="h-px w-12 md:w-24 bg-slate-200" />
      </motion.div>
      <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter text-jet-black uppercase leading-none">
        Topics
      </h2>
      <p className="mt-6 text-base md:text-lg font-serif text-ministry-gray leading-relaxed max-w-3xl mx-auto italic">
        "Explore the fundamental principles that guide our understanding of faith, scripture, and the divine."
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative z-10">
      <TopicItem label="The Trinity" color="bg-sky-blue" delay={0.1} />
      <TopicItem label="The Gospel" color="bg-olive-leaf" delay={0.2} />
      <TopicItem label="Prayer" color="bg-powder-blush" delay={0.3} />
      <TopicItem label="Scripture" color="bg-oxblood" delay={0.4} />
      
      <TopicItem label="Salvation" color="bg-amber-earth" delay={0.5} />
      <TopicItem label="The Church" color="bg-pale-oak" delay={0.6} />
      <TopicItem label="Creation" color="bg-olive-leaf" delay={0.7} />
      <TopicItem label="Eternity" color="bg-sky-blue" delay={0.8} />
    </div>
    
    {/* Background decorative elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02] -z-10">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
        <circle cx="500" cy="500" r="250" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
      </svg>
    </div>
  </section>
);

const NewsCard = ({ date, title, category, color }: { date: string, title: string, category: string, color: string }) => (
  <div className="space-y-6 pt-8 border-t border-slate-200 group cursor-pointer">
    <p className="text-xs font-medium text-ministry-gray">{date}</p>
    <h3 className="text-2xl font-bold leading-tight group-hover:text-jet-black transition-colors">{title}</h3>
    <div className="flex items-center gap-2">
      <div className={cn("w-3 h-3 rounded-full", color)} />
      <span className="text-xs font-bold uppercase tracking-widest">{category}</span>
    </div>
  </div>
);

const NewsSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto relative">
    <div className="flex items-baseline gap-4 mb-16">
      <h2 className="text-8xl font-serif font-bold tracking-tighter">Latest</h2>
      <span className="text-4xl font-serif italic text-ministry-gray">Teachings</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <NewsCard 
        date="April 2026"
        title="Understanding the Parables: A Modern Perspective"
        category="Teaching"
        color="bg-sky-blue"
      />
      <NewsCard 
        date="March 2026"
        title="The Role of Faith in the Modern World"
        category="Video"
        color="bg-amber-earth"
      />
      <NewsCard 
        date="February 2026"
        title="A Foundation's Perspective on Global Mission"
        category="Testimony"
        color="bg-olive-leaf"
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-pale-oak pt-32 pb-12 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
      <ArrowDown className="mx-auto text-slate-500" size={48} />
      <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-jet-black drop-shadow-sm">
        Learn. Believe. <br /> Grow in Truth.
      </h2>
      <div className="max-w-xl mx-auto relative">
        <input 
          type="email" 
          placeholder="Email address" 
          className="w-full bg-transparent border-b-2 border-slate-500 py-4 px-2 focus:outline-none focus:border-jet-black transition-colors text-lg placeholder:text-slate-500"
        />
        <button className="absolute right-0 bottom-4 flex items-center gap-2 font-bold hover:text-jet-black transition-colors text-jet-black">
          Subscribe <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="pt-32 flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-medium text-jet-black uppercase tracking-widest">
        <div>© 2026 Grace & Truth Ministry Archive</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-oxblood transition-colors">Teachings</a>
          <a href="#" className="hover:text-oxblood transition-colors">Testimonies</a>
          <a href="#" className="hover:text-oxblood transition-colors">Privacy</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-jet-black selection:text-white relative">
      <Header />
      <main className="relative">
        <Hero />
        <FoundationsGrid />
        <BannerSection />
        <StoriesSection />
        <TopicsSection />
        
        {/* Navigate Concept */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 relative">
          <h2 className="text-7xl font-serif font-bold tracking-tighter mb-4">Explore</h2>
          <p className="text-xl text-ministry-gray mb-12">Journey through the interconnected truths and testimonies of our faith.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[16/10] bg-slate-100 rounded-2xl flex items-center justify-center p-12">
               <div className="w-full h-1 bg-slate-300 relative">
                  {[20, 40, 60, 80].map(pos => (
                    <div key={pos} className="absolute top-1/2 -translate-y-1/2 w-1 h-4 bg-jet-black" style={{ left: `${pos}%` }} />
                  ))}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-2xl font-serif">{"{"}</div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-2xl font-serif">{"}"}</div>
               </div>
            </div>
            <div className="aspect-[16/10] bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
               <div className="text-center space-y-4 px-8 relative z-10">
                 <h3 className="text-3xl font-serif italic">"Faith is the substance of things hoped for, the evidence of things not seen."</h3>
                 <p className="text-sm font-bold uppercase tracking-widest text-ministry-gray">— Hebrews 11:1</p>
               </div>
            </div>
          </div>
        </section>

        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
