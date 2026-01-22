import React from 'react';
import { motion } from 'framer-motion';

const collectionItems = [
  { title: 'READY TO WEAR', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2000' },
  { title: 'LIMITED PRODUCT', img: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=2000' },
  { title: 'CARD CASE', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2000' },
  { title: 'KEY CHAIN', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2000' },
];

const Collections = () => {
  // Container animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card appearing
      },
    },
  };

  // Individual card animation configuration
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-24 px-4 md:px-14 bg-white overflow-hidden" id="collections">
      {/* Animated Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-serif text-3xl md:text-4xl mb-12 md:mb-16 text-zinc-800 tracking-wide"
      >
        Collections
      </motion.h2>
      
      {/* Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
      >
        {collectionItems.map((item, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            className="relative group overflow-hidden cursor-pointer h-[450px] md:h-[550px] lg:h-[650px]"
          >
            {/* Dark Overlay - Deepens on hover */}
            <div className="absolute inset-0 z-10 bg-black/25 group-hover:bg-black/40 transition-colors duration-700" />
            
            {/* Image with slow scale-up on hover */}
            <motion.img 
              src={item.img} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
            />
            
            {/* Centered Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
              <h3 className="text-white text-[11px] md:text-[13px] font-light tracking-[0.4em] uppercase text-center relative">
                {item.title}
                {/* Animated Underline */}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full group-hover:left-0" />
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Collections;