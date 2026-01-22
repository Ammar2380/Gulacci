import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navLinks = [
    { name: 'home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Collections', id: 'collections' },
    { name: 'Contact', id: 'contact' }
  ];

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      <nav className='absolute top-0 w-full z-50 fixed text-white bg-black/10 backdrop-blur-[2px] border-b border-white/10' >
        <div className='max-w-[1440px] mx-auto px-6 md:px-12 py-4 md:py-6 flex justify-between items-center'>
          
          {/* Mobile Menu Toggle */}
          <button className='lg:hidden text-2xl' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>

          <div className='font-serif italic text-xl md:text-2xl tracking-tighter cursor-pointer absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0'>
            <img src={logo} alt="" className='h-5' />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex gap-10 items-center'>
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className='cursor-pointer uppercase text-[11px] tracking-[0.3em] font-light hover:opacity-60 transition-opacity'
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <div className='flex items-center'>
            <button 
              onClick={() => setIsCartOpen(true)}
              className='relative hover:scale-110 transition-transform text-lg'
            >
              👜
              <span className='absolute -top-1 -right-1 bg-white text-black text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold'>0</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className='fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-8'
            >
              <button className='absolute top-6 left-6 text-2xl' onClick={() => setIsOpen(false)}>✕</button>
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => scrollToSection(link.id)}
                  className='text-xl uppercase tracking-[0.4em] font-light'
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- CART DRAWER --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center border-b pb-6">
                <h2 className="font-serif text-2xl uppercase tracking-widest">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-xl">✕</button>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center space-y-4 text-zinc-400">
                <p className="font-serif italic">Your cart is currently empty.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-[10px] tracking-[0.2em] underline uppercase text-black"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between text-sm tracking-widest uppercase">
                  <span>Subtotal</span>
                  <span>Rs. 0.00</span>
                </div>
                <button className="w-full bg-black text-white py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-zinc-800 transition-colors">
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;