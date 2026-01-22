import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const products = [
  { id: 1, name: 'TEAL', price: 575642.30, soldOut: true, img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4" },
  { id: 2, name: 'CELESTE', price: 575642.30, soldOut: true, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" },
  { id: 3, name: 'GUETHE', price: 575642.30, soldOut: true, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2" },
  { id: 4, name: 'EBONY', price: 575642.30, soldOut: false, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86" },
];

const FeaturedCollection = () => {
  const { addToCart } = useCart();

  // JavaScript Smooth Scroll Handler
  const scrollToCollections = (e) => {
    e.preventDefault();
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 px-6 md:px-14 bg-white overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-serif text-3xl md:text-4xl mb-16 text-zinc-800 tracking-wide"
      >
        Featured collection
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
      >
        {products.map((product) => (
          <motion.div 
            key={product.id} 
            variants={itemVariants}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f9f9f9] mb-6">
              {!product.soldOut && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="absolute bottom-0 w-full bg-black text-white py-4 text-[10px] tracking-[0.3em] uppercase z-20 translate-y-0 opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:ease-out"
                >
                  Add to Bag +
                </button>
              )}
              
              <img
                src={product.img}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 ${product.soldOut ? 'opacity-60 grayscale-[30%]' : ''}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            <h3 className="uppercase tracking-[0.3em] text-[12px] font-medium text-zinc-900 mb-2 transition-colors group-hover:text-zinc-500">
              {product.name}
            </h3>
            <p className="text-[11px] text-zinc-400 font-light tracking-wider">
              Rs. {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* --- SMOOTH SCROLL BUTTON --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-20 flex justify-center"
      >
        <button 
          onClick={scrollToCollections}
          className="group relative px-12 py-4 border border-zinc-200 text-[10px] tracking-[0.4em] uppercase transition-all duration-500"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            View All Collections
          </span>
          <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturedCollection;