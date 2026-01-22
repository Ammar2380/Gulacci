import React from 'react'
import { motion } from 'framer-motion'
import heroBg from './shoe bbg.webp'

const Hero = () => {
  // Smooth scroll handler
  const scrollToCollections = () => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='overflow-hidden' id='home'>
      {/* Background Image Section */}
      <div className='relative h-screen flex items-end overflow-hidden'>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className='relative z-20 w-full md:bottom-0 bottom-15 p-6 md:p-16 lg:p-24 space-y-6'>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-5xl md:text-7xl lg:text-8xl text-white font-serif tracking-tight'
          >
            Ready to Wear
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-white text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light'
          >
            Our ready to wear line shoes are hand lasted and hand welted, featuring 
            many of the same elements for which our bespoke shoes are known. We 
            offer our RTW and MTO shoes in a variety of widths: D, E, F, and G.
          </motion.p>

          <motion.button 
            onClick={scrollToCollections} // Added click handler
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "#000" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className='px-10 py-3 text-[10px] tracking-[0.3em] font-bold text-white border border-white uppercase cursor-pointer'
          >
            SHOP
          </motion.button>
        </div>
      </div>

      {/* Intro Text Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className='w-full bg-white text-black text-center space-y-6 py-24 px-6 flex flex-col justify-center items-center'
      >
        <h2 className='text-3xl md:text-4xl font-serif text-zinc-800 tracking-wide'>
          The Art of Shoemaking
        </h2>

        <p className='text-base md:text-lg max-w-3xl leading-relaxed font-light text-zinc-600'>
          We proudly offer our Ready to Wear collection and line of accessories, 
          all made with our considered approach to craftsmanship.
        </p>

        {/* Secondary "Explore" link to encourage deeper scrolling */}
        <button 
          onClick={scrollToCollections}
          className='text-[10px] tracking-[0.3em] uppercase border-b border-zinc-300 pb-2 hover:border-black transition-colors mt-4'
        >
          Explore Collection
        </button>
      </motion.div>
    </section>
  )
}

export default Hero