import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext'; // 1. Import your cart hook

// ... [Keep your collectionDetails and collectionItems data here] ...
const collectionDetails = {
  'READY TO WEAR': [
    { 
      id: 101, name: 'The Heritage Oxford', price: 'Rs. 450,000', 
      img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
      desc: 'Our signature Oxford. Featuring a seamless back and hand-painted fiddle-back waist.' 
    },
    { 
      id: 102, name: 'Adelaide Semi-Brogue', price: 'Rs. 420,000', 
      img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
      desc: 'A refined silhouette featuring delicate punching along the facings.' 
    },
    { 
      id: 103, name: 'Museum Calf Derby', price: 'Rs. 480,000', 
      img: 'https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1616406432452-07bc5938759d',
      desc: 'Crafted from rare marbled calfskin, offering a unique patina for every pair.' 
    }
  ],
  'LIMITED PRODUCT': [
    { 
      id: 201, name: 'Shell Cordovan No. 8', price: 'Rs. 850,000', 
      img: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc',
      desc: 'Sourced from the world-renowned Horween tannery. Limited to 5 commissions annually.' 
    },
    { 
      id: 202, name: 'Exotic Gator Loafer', price: 'Rs. 1,200,000', 
      img: 'https://images.unsplash.com/photo-1621230182258-c7afc63a77f5?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1621230182258-c7afc63a77f5',
      desc: 'Hand-selected alligator hide with a soft leather lining for ultimate comfort.' 
    },
    { 
      id: 203, name: 'Single-Piece Wholecut', price: 'Rs. 980,000', 
      img: 'https://images.unsplash.com/photo-1449244445805-bc0df39edb8c?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1449244445805-bc0df39edb8c',
      desc: 'Cut from a single piece of hide with no seams. A masterclass in leather selection.' 
    }
  ],
  'CARD CASE': [
    { 
      id: 301, name: 'Slim Epsom Case', price: 'Rs. 45,000', 
      img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
      desc: 'Hand-stitched using the saddle-stitch method for lifetime durability.' 
    },
    { 
      id: 302, name: 'Bifold Barenia', price: 'Rs. 65,000', 
      img: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86',
      desc: 'Traditional French calf leather that develops a beautiful oily patina over time.' 
    },
    { 
      id: 303, name: 'Vertical Card Holder', price: 'Rs. 38,000', 
      img: 'https://images.unsplash.com/photo-1606503153255-59d818b13d16?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1606503153255-59d818b13d16',
      desc: 'Minimalist vertical design for front-pocket carry.' 
    }
  ],
  'KEY CHAIN': [
    { 
      id: 401, name: 'Cloche Key Ring', price: 'Rs. 18,000', 
      img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      desc: 'A minimal leather shroud protecting your keys and your pocket.' 
    },
    { 
      id: 402, name: 'Brass Hook Tether', price: 'Rs. 22,000', 
      img: 'https://images.unsplash.com/photo-1611082230132-7521e8436444?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1611082230132-7521e8436444',
      desc: 'Solid brass hardware with bridle leather loop for belt attachment.' 
    },
    { 
      id: 403, name: 'Stitch Wrap Keyring', price: 'Rs. 15,000', 
      img: 'https://images.unsplash.com/photo-1622325327228-a3f11244e8f7?q=80&w=1000',
      imageLink: 'https://images.unsplash.com/photo-1622325327228-a3f11244e8f7',
      desc: 'Single fold leather wrap with contrast hand-stitching.' 
    }
  ]
};
const collectionItems = [
  { 
    title: 'READY TO WEAR', 
    img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2000',
    description: 'Precision-engineered footwear for immediate distinction.'
  },
  { 
    title: 'LIMITED PRODUCT', 
    img: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=2000',
    description: 'Rare materials and numbered editions for the collector.'
  },
  { 
    title: 'CARD CASE', 
    img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2000',
    description: 'Hand-stitched leather goods for the modern essentialist.'
  },
  { 
    title: 'KEY CHAIN', 
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2000',
    description: 'Refined accessories crafted with artisanal care.'
  },
];
const Collections = () => {
  const { addToCart } = useCart(); // 2. Access the addToCart function
  const [selectedCol, setSelectedCol] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper function to clean price string for the cart logic
  const handleAddToCart = (item) => {
    // Converts "Rs. 450,000" -> 450000
    const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
    addToCart({ ...item, price: numericPrice });
  };

  // Auto-slide logic
  useEffect(() => {
    if (selectedCol) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedCol, currentIndex]);

  const handleNext = () => {
    const products = collectionDetails[selectedCol] || [];
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    const products = collectionDetails[selectedCol] || [];
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-24 px-4 md:px-14 bg-white" id="collections">
      <motion.h2 className="text-center font-serif text-3xl md:text-4xl mb-16 text-zinc-800 tracking-wide">
        Collections
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collectionItems.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => {
                setSelectedCol(item.title);
                setCurrentIndex(0); // Reset slider to first item
            }}
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden cursor-pointer h-[450px] md:h-[550px]"
          >
            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h3 className="text-white text-[12px] tracking-[0.4em] uppercase">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCol && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[50] bg-white flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCol(null)}
              className="absolute top-8 right-8 z-[110] text-[10px] tracking-widest uppercase border-b border-black"
            >
              Close
            </button>

            {/* Left: Product Slider */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-zinc-50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={collectionDetails[selectedCol]?.[currentIndex]?.img}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-10 left-10 flex gap-4 z-[110]">
                <button onClick={handlePrev} className="p-2 border border-black/20 hover:bg-black hover:text-white transition-all text-xs">←</button>
                <button onClick={handleNext} className="p-2 border border-black/20 hover:bg-black hover:text-white transition-all text-xs">→</button>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[10px] tracking-[0.3em] text-zinc-400 uppercase">{selectedCol}</span>
                <h2 className="font-serif text-3xl md:text-5xl mt-4 mb-6 uppercase">
                  {collectionDetails[selectedCol]?.[currentIndex]?.name}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-md mb-8">
                  {collectionDetails[selectedCol]?.[currentIndex]?.desc}
                </p>
                <p className="text-xl font-light mb-10">
                  {collectionDetails[selectedCol]?.[currentIndex]?.price}
                </p>
                
                {/* 3. ADD TO CART BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleAddToCart(collectionDetails[selectedCol][currentIndex])}
                    className="bg-black text-white px-12 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-zinc-800 transition-colors"
                  >
                    Add to Bag +
                  </button>
                  
                  <a 
                    href={collectionDetails[selectedCol]?.[currentIndex]?.imageLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="border border-black px-12 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-zinc-50 transition-colors text-center"
                  >
                    View High-Res
                  </a>
                </div>
              </motion.div>

              <div className="mt-20 h-[1px] w-full bg-zinc-100 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / (collectionDetails[selectedCol]?.length || 1)) * 100}%` }}
                  className="absolute top-0 left-0 h-full bg-black"
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