import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StoreInfo = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="flex flex-col md:flex-row min-h-[700px] bg-white overflow-hidden">
      
      {/* Left Content Area: Information Card / Contact Form */}
      <div className="w-full md:w-[45%] lg:w-[40%] flex items-center justify-center p-6 md:p-12 lg:p-16 bg-zinc-50/50 md:bg-white">
        <motion.div 
          layout
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-zinc-200 p-8 md:p-12 lg:p-14 w-full max-w-md bg-white shadow-sm"
        >
          <AnimatePresence mode="wait">
            {!showForm ? (
              /* --- STORE INFO VIEW --- */
              <motion.div
                key="info"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-serif text-3xl mb-8 text-zinc-800">Our Store</h3>
                <div className="space-y-1 text-[13px] leading-relaxed text-zinc-600 font-light">
                  <p className="font-medium text-zinc-800">BAL Aoyama 2F</p>
                  <p>2-12-27 Kitaaoyama</p>
                  <p>Minatoku, Tokyo, Japan</p>
                  <p className="pt-6 italic text-zinc-500">By appointment</p>
                  <p className="pt-4">Mon to Sat: 11am — 7pm</p>
                  <p>Sun: Closed</p>
                  <p className="pt-6 text-zinc-900 font-medium">+81 3 6804 6979</p>
                </div>

                <motion.button 
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-10 w-full py-4 bg-[#2e2e2e] text-white text-[10px] tracking-[0.3em] uppercase hover:bg-black transition-all"
                >
                  Contact Form
                </motion.button>
              </motion.div>
            ) : (
              /* --- CONTACT FORM VIEW --- */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-serif text-2xl text-zinc-800">Inquiry</h3>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="text-[10px] tracking-widest text-zinc-400 hover:text-black uppercase"
                  >
                    Back
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="NAME" 
                      className="w-full border-b border-zinc-200 py-2 text-[11px] outline-none focus:border-black transition-colors bg-transparent placeholder:text-zinc-400"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="EMAIL" 
                      className="w-full border-b border-zinc-200 py-2 text-[11px] outline-none focus:border-black transition-colors bg-transparent placeholder:text-zinc-400"
                    />
                  </div>
                  <div>
                    <select className="w-full border-b border-zinc-200 py-2 text-[11px] outline-none focus:border-black transition-colors bg-transparent text-zinc-400">
                      <option>SUBJECT</option>
                      <option>BESPOKE INQUIRY</option>
                      <option>RTW SIZING</option>
                      <option>TRUNK SHOWS</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      placeholder="MESSAGE" 
                      rows="4"
                      className="w-full border-b border-zinc-200 py-2 text-[11px] outline-none focus:border-black transition-colors bg-transparent placeholder:text-zinc-400 resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-4 bg-black text-white text-[10px] tracking-[0.3em] uppercase"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Right Content Area: Large Store Image */}
      <div className="w-full md:w-[55%] lg:w-[60%] relative h-[450px] md:h-auto overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974" 
          alt="Yohei Fukuda Store Interior"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
};

export default StoreInfo;