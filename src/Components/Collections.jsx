import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';

const collectionDetails = {
  'READY TO WEAR': [
    { 
      id: 101, name: 'The Heritage Oxford', price: 'Rs. 450,000', 
      img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
      desc: 'Our signature Oxford. Featuring a seamless back and hand-painted fiddle-back waist.',
      specs: ['Box Calf Leather', 'Goodyear Welted', 'Hand-finished Patina', 'Leather Lining']
    },
    { 
      id: 102, name: 'Adelaide Semi-Brogue', price: 'Rs. 420,000', 
      img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
      desc: 'A refined silhouette featuring delicate punching along the facings.',
      specs: ['Museum Calf', 'Beveled Waist', 'Single Leather Sole', 'Swan Neck Stitching']
    },
    { 
      id: 103, name: 'Museum Calf Derby', price: 'Rs. 480,000', 
      img: 'https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1616406432452-07bc5938759d',
      desc: 'Crafted from rare marbled calfskin, offering a unique patina for every pair.',
      specs: ['Full-grain Marbled Hide', 'Storm Welt', 'Double Oak Sole', 'Artisanal Last']
    }
  ],
  'LIMITED PRODUCT': [
    { 
      id: 201, name: 'Shell Cordovan No. 8', price: 'Rs. 850,000', 
      img: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc',
      desc: 'Sourced from the world-renowned Horween tannery. Limited to 5 commissions annually.',
      specs: ['Horween Cordovan', 'Hand-sewn Welt', 'Numbered Edition', 'Silk Shoe Bags']
    },
    { 
      id: 202, name: 'Exotic Gator Loafer', price: 'Rs. 1,200,000', 
      img: 'https://images.unsplash.com/photo-1621230182258-c7afc63a77f5?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1621230182258-c7afc63a77f5',
      desc: 'Hand-selected alligator hide with a soft leather lining for ultimate comfort.',
      specs: ['Farm-raised Alligator', 'Soft Napa Lining', 'Blake Stitched', 'Jewelry-grade Hardware']
    },
    { 
      id: 203, name: 'Single-Piece Wholecut', price: 'Rs. 980,000', 
      img: 'https://images.unsplash.com/photo-1449244445805-bc0df39edb8c?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1449244445805-bc0df39edb8c',
      desc: 'Cut from a single piece of hide with no seams. A masterclass in leather selection.',
      specs: ['Seamless Construction', 'Grade-A Hide', 'Piano Gloss Finish', 'Bespoke Last']
    }
  ],
  'CARD CASE': [
    { 
      id: 301, name: 'Slim Epsom Case', price: 'Rs. 45,000', 
      img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
      desc: 'Hand-stitched using the saddle-stitch method for lifetime durability.',
      specs: ['Epsom Textured Leather', 'Saddle Stitched', 'Edge Painted', '4 Card Slots']
    },
    { 
      id: 302, name: 'Bifold Barenia', price: 'Rs. 65,000', 
      img: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86',
      desc: 'Traditional French calf leather that develops a beautiful oily patina over time.',
      specs: ['Heritage Barenia Calf', 'Linen Thread', 'Cash Slot', 'Internal Branding']
    }
  ],
  'KEY CHAIN': [
    { 
      id: 401, name: 'Cloche Key Ring', price: 'Rs. 18,000', 
      img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      desc: 'A minimal leather shroud protecting your keys and your pocket.',
      specs: ['Togo Leather', 'Palladium Finish Ring', 'Hand-creased Edges']
    }
  ]
};

const collectionItems = [
  { title: 'READY TO WEAR', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2000' },
  { title: 'LIMITED PRODUCT', img: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=2000' },
  { title: 'CARD CASE', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2000' },
  { title: 'KEY CHAIN', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2000' },
];

const Collections = () => {
  const { addToCart } = useCart();
  const [selectedCol, setSelectedCol] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToCart = (item) => {
    const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
    addToCart({ ...item, price: numericPrice });
  };

  const handleNext = () => {
    const products = collectionDetails[selectedCol] || [];
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    const products = collectionDetails[selectedCol] || [];
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentItem = collectionDetails[selectedCol]?.[currentIndex];

  return (
    <section className="py-24 px-4 md:px-14 bg-white" id="collections">
      <motion.h2 className="text-center font-serif text-3xl md:text-4xl mb-16 text-zinc-800 tracking-widest uppercase">
        Collections
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collectionItems.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => { setSelectedCol(item.title); setCurrentIndex(0); }}
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden cursor-pointer h-[450px] md:h-[550px]"
          >
            <div className="absolute inset-0 z-10 bg-black/30 group-hover:bg-black/50 transition-all duration-700" />
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
              <h3 className="text-white text-[12px] tracking-[0.5em] uppercase mb-4">{item.title}</h3>
              <span className="text-white/70 text-[9px] tracking-[0.3em] uppercase border border-white/30 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Collection</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCol && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row"
          >
            <button 
              onClick={() => setSelectedCol(null)}
              className="absolute top-8 right-8 z-[120] text-[10px] tracking-widest uppercase border-b border-black hover:opacity-50 transition-opacity"
            >
              Close Archive
            </button>

            {/* Left: Product Image Slider */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-[#f4f4f4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentItem?.img}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-10 left-10 flex gap-4 z-[110]">
                <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all text-xs">←</button>
                <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-all text-xs">→</button>
              </div>
            </div>

            {/* Right: Detailed Product Info */}
            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center overflow-y-auto">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[10px] tracking-[0.4em] text-zinc-400 uppercase font-light">Edition 0{currentIndex + 1} // {selectedCol}</span>
                <h2 className="font-serif text-4xl md:text-6xl mt-6 mb-8 uppercase tracking-tighter text-zinc-900">
                  {currentItem?.name}
                </h2>
                
                <p className="text-zinc-500 text-[13px] leading-relaxed max-w-md mb-10 font-light">
                  {currentItem?.desc}
                </p>

                {/* Technical Details Section */}
                <div className="mb-12">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6 text-zinc-800 flex items-center gap-4">
                    Specifications <div className="h-[1px] flex-grow bg-zinc-100" />
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                    {currentItem?.specs?.map((spec, i) => (
                      <li key={i} className="text-[11px] text-zinc-500 flex items-center gap-3 tracking-wide capitalize font-light">
                        <span className="w-1 h-1 bg-zinc-300 rounded-full" /> {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-2xl font-serif text-zinc-900 mb-10">
                  {currentItem?.price}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleAddToCart(currentItem)}
                    className="flex-grow bg-black text-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-zinc-800 transition-all duration-300"
                  >
                    Add to Bag +
                  </button>
                  
                  <a 
                    href={currentItem?.imageLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="border border-zinc-200 px-8 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-zinc-50 transition-colors text-center"
                  >
                    Zoom
                  </a>
                </div>
              </motion.div>

              {/* Progress Bar */}
              <div className="mt-20 h-[1px] w-full bg-zinc-100 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / (collectionDetails[selectedCol]?.length || 1)) * 100}%` }}
                  className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Collections;