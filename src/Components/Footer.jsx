import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-[#2e2e2e] text-zinc-300 pt-20 pb-10 px-6 md:px-14 overflow-hidden" >
      
      {/* Newsletter Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center mb-24"
      >
        <h4 className="text-2xl md:text-3xl font-serif text-white mb-4">Subscribe to Our Newsletter</h4>
        <p className="text-[11px] tracking-widest mb-8 opacity-70 uppercase">
          Keep up to date with the latest products and our trunk show dates.
        </p>
        <form className="flex border-b border-zinc-500 pb-2 group">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-transparent flex-grow outline-none text-xs placeholder:text-zinc-500 italic"
          />
          <motion.button 
            whileHover={{ x: 5 }}
            className="uppercase text-[10px] tracking-[0.3em] text-white font-bold ml-4"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>

      {/* Main Footer Links Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
      >
        {/* Brand Info */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-white text-xl font-serif italic tracking-tighter">Yohei Fukuda</h2>
          <div className="text-[11px] leading-relaxed space-y-1 font-light opacity-80">
            <p>BAL Aoyama 2F, 2-12-27 Kitaaoyama</p>
            <p>Minatoku, Tokyo, Japan</p>
            <p className="pt-4">Mon to Sat: 11am — 8pm</p>
            <p>Sun: Closed</p>
            <p className="pt-4 text-white">info@yoheifukuda.com</p>
            <p>+81 3 6804 6979</p>
          </div>
        </motion.div>

        {/* Links Columns */}
        {[
          { title: "Navigation", links: ["About", "The Art of Shoemaking", "Order and Process", "Online Shop", "Contact"] },
          { title: "Products", links: ["Shoes", "Accessories", "Limited Products"] },
          { title: "Support", links: ["FAQs", "Size Guide", "Terms & Conditions", "Privacy Policy", "Shipping Information"] }
        ].map((col, idx) => (
          <motion.div key={idx} variants={itemVariants} className="space-y-4">
            <h5 className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">{col.title}</h5>
            <div className="text-[10px] uppercase tracking-[0.2em] space-y-3 font-light">
              {col.links.map(link => (
                <p key={link} className="cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-300">
                  {link}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border-t border-zinc-700/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        {/* Social Links */}
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest">
          <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
          <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
        </div>

        {/* Copyright */}
        <div className="text-[9px] tracking-[0.3em] text-zinc-500 text-center uppercase">
          © 2026 YOHEI FUKUDA — ALL RIGHTS RESERVED
        </div>

        {/* Payment & Localization */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-2 opacity-40">
            {['AMEX', 'VISA', 'PAYPAL'].map(pay => (
              <span key={pay} className="border border-zinc-500 px-1.5 py-0.5 rounded-[2px] text-[7px] tracking-tighter">{pay}</span>
            ))}
          </div>
          <div className="text-[9px] tracking-widest opacity-80 border-l border-zinc-700 pl-6 cursor-pointer hover:text-white">
            ENGLISH / JPY ¥
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;