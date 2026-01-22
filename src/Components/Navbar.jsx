import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.png';
import { useCart } from './CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Collections', id: 'collections' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    if (isOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsCheckingOut(false);
    }
  }, [isOpen, isCartOpen]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppOrder = (e) => {
    e.preventDefault();
    const phoneNumber = "923001234567"; // Your WhatsApp Number
    
    const itemsList = cartItems
      .map(item => `• ${item.name} (x${item.quantity}) - Rs. ${item.price.toLocaleString()}`)
      .join('%0A');

    const message = `*NEW COMMISSION REQUEST*%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Address: ${formData.address}, ${formData.city}%0A%0A` +
      `*Order Summary:*%0A${itemsList}%0A%0A` +
      `*Total Amount:* Rs. ${subtotal.toLocaleString()}%0A%0A` +
      `Please confirm availability.`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 350);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 text-white bg-black/10 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center relative">
          <button className="lg:hidden flex flex-col items-center justify-center w-8 h-8 z-50" onClick={() => setIsOpen(true)}>
            <span className="w-6 h-[1px] bg-white mb-1.5" />
            <span className="w-6 h-[1px] bg-white mb-1.5" />
            <span className="w-6 h-[1px] bg-white" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="Logo" className="h-4 md:h-5 brightness-0 invert tracking-[0.5em]" />
          </div>

          <ul className="hidden lg:flex gap-12 items-center">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => scrollToSection(link.id)} className="cursor-pointer uppercase text-[10px] tracking-[0.4em] font-light hover:text-zinc-400 transition-all">
                {link.name}
              </li>
            ))}
          </ul>

          <button onClick={() => setIsCartOpen(true)} className="text-lg opacity-80 hover:opacity-100 transition-opacity z-50 relative">
            👜 {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-white text-black text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">({totalItems})</span>}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/80 z-[150] backdrop-blur-md" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 200 }} className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[160] shadow-2xl p-8 flex flex-col text-black">
              
              <div className="flex justify-between items-center border-b border-zinc-100 pb-6">
                <h2 className="font-serif text-xl uppercase tracking-widest">{isCheckingOut ? 'Checkout' : `Bag (${totalItems})`}</h2>
                <button onClick={() => isCheckingOut ? setIsCheckingOut(false) : setIsCartOpen(false)} className="text-xl p-2">{isCheckingOut ? '←' : '✕'}</button>
              </div>

              <div className="flex-grow overflow-y-auto py-6">
                {!isCheckingOut ? (
                  cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-zinc-400">
                      <p className="font-serif italic text-lg text-center">Your bag is currently empty</p>
                    </div>
                  ) : (
                    cartItems.map(item => (
                      <div key={item.id} className="flex gap-4 mb-6 border-b border-zinc-50 pb-6">
                        <img src={item.img} className="w-20 h-24 object-cover bg-zinc-50" alt={item.name} />
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="text-[11px] tracking-widest uppercase font-bold">{item.name}</h3>
                            <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 text-xs">✕</button>
                          </div>
                          <p className="text-xs mt-2 font-medium italic">Rs. {item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-3 mt-4">
                            <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 border border-zinc-200 flex items-center justify-center text-xs">-</button>
                            <span className="text-xs w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 border border-zinc-200 flex items-center justify-center text-xs">+</button>
                          </div>
                        </div>
                      </div>
                    ))
                  )
                ) : (
                  <div className="space-y-8">
                    {/* Order Summary Block */}
                    <div className="bg-zinc-50 p-5 rounded-sm">
                      <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-4 text-zinc-800">Order Review</h4>
                      <div className="space-y-3">
                        {cartItems.map(item => (
                          <div key={item.id} className="flex justify-between items-center text-[11px]">
                            <span className="text-zinc-600 truncate mr-4">{item.name} (x{item.quantity})</span>
                            <span className="font-medium text-zinc-900 shrink-0">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <form id="checkout-form" onSubmit={sendWhatsAppOrder} className="space-y-6">
                      <div className="border-l-2 border-black pl-4 mb-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-medium">Shipping Details</h3>
                      </div>
                      <div className="space-y-4">
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm" placeholder="Full Name" />
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm" placeholder="WhatsApp Number" />
                        <div className="grid grid-cols-2 gap-4">
                          <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm" placeholder="City" />
                          <input type="text" name="zip" className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm" placeholder="Zip Code" />
                        </div>
                        <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full border-b border-zinc-200 py-3 focus:border-black outline-none transition-colors text-sm" placeholder="Shipping Address" />
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t border-zinc-100 pt-6 space-y-4">
                  <div className="flex justify-between text-sm tracking-widest uppercase">
                    <span>Total Amount</span>
                    <span className="font-bold underline underline-offset-4">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  {!isCheckingOut ? (
                    <button onClick={() => setIsCheckingOut(true)} className="w-full bg-black text-white py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all">
                      Proceed to Details
                    </button>
                  ) : (
                    <button type="submit" form="checkout-form" className="w-full bg-[#25D366] text-white py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2">
                      Complete via WhatsApp
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;