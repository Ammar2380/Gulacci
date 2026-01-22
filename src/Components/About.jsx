import React from 'react'
import { motion } from 'framer-motion'
import aboutBg from './shoe bbg.webp'

const About = () => {
  return (
    <section 
      className='relative w-full min-h-[500px] md:min-h-[700px] flex items-center py-16 md:py-24 overflow-hidden'id="about"
    >
      {/* Background Image with a subtle parallax-like entry */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay for mobile readability */}
      <div className="absolute inset-0 bg-black/10 md:bg-transparent z-10" />

      <div className='container mx-auto px-6 md:px-12 relative z-20'>
        
        {/* Animated White Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className='bg-white w-full max-w-[90%] mx-auto md:mx-0 md:max-w-md p-8 md:p-16 shadow-xl md:shadow-none'
        >
          
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='block text-[10px] tracking-[0.3em] uppercase font-semibold text-gray-400 mb-6'
          >
            ABOUT
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className='text-3xl md:text-4xl font-serif mb-8 text-zinc-900 leading-tight'
          >
            Ready to Wear
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className='text-sm md:text-base leading-relaxed text-zinc-600 font-light'
          >
            Our Ready to Wear line has been developed from our experience in bespoke 
            shoemaking, applying our knowledge of last making and shoemaking to offer 
            you our handmade approach to the craft. Each shoe is hand lasted and hand 
            welted and features many of the same elements for which our bespoke shoes 
            are known.
          </motion.p>
          
        </motion.div>
      </div>
    </section>
  )
}

export default About