'use client';

import MenuIcon from '@mui/icons-material/Menu'; 
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
 
 export function Header () {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = (event, targetId) => {
      event.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    };

    return (
 
      <header className="sticky top-0 z-10 bg-gray-100 lg:bg-gray-100 flex justify-between items-center rounded-t-md z-100 shadow-md">
        <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
        <MenuIcon 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mr-6"
          sx={{ 
            fontSize: { xs: 42, sm: 42, md: 60 },
            color: 'orange',
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
            color: 'orange',
            transform: 'scale(1.1)',
              }
            }} />
           <AnimatePresence>  
                     {isMenuOpen && (
                        <div className="flex absolute top-0 lg:top-2 right-16 lg:right-24 z-50"> 
                        <motion.div
                                  initial={{ x: 200 }}
                                  animate={{ x: 0 }}
                                  exit={{ x: 200 }}
                                  transition={{ type: "tween", duration: 0.2, delay: 0 }}>
                                  <a href="#home" onClick={(event) => handleNavClick(event, 'home')} 
                                    className="block p-2 hover:text-orange-400 hover:scale-110 cursor-pointer transition text-normal lg:text-xl text-stone-500 font-oswald">Home</a>
                          </motion.div>
                          <motion.div
                            initial={{ x: 200 }}
                                  animate={{ x: 0 }}
                                  exit={{ x: 200 }}
                                  transition={{ type: "tween", duration: 0.2, delay: 0.1 }}>
                                  <a href="#about" onClick={(event) => handleNavClick(event, 'about')} 
                                    className="block p-2 hover:text-orange-400 hover:scale-110 cursor-pointer transition text-normal lg:text-xl text-stone-500 font-oswald">About</a>
                          </motion.div>
                          <motion.div
                                  initial={{ x: 200 }}
                                  animate={{ x: 0 }}
                                  exit={{ x: 200 }}
                                  transition={{ type: "tween", duration: 0.2, delay: 0.2 }}>
                                <a href="#projects" onClick={(event) => handleNavClick(event, 'projects')} 
                                    className="block p-2 hover:text-orange-400 hover:scale-110 cursor-pointer transition text-normal lg:text-xl text-stone-500 font-oswald">Projects</a>
                          </motion.div>
                          <motion.div
                            initial={{ x: 200 }}
                                  animate={{ x: 0 }}
                                  exit={{ x: 200 }}
                                  transition={{ type: "tween", duration: 0.2, delay: 0.3 }}>

                          <a href="#contact" onClick={(event) => handleNavClick(event, 'contact')} 
                            className="block p-2 hover:text-orange-400 hover:scale-110 cursor-pointer transition text-normal lg:text-xl text-stone-500 font-oswald">Contact</a>
                        
                          </motion.div>
                        </div>
                        //these links are hardcoded and can be refactored
                  
                      )}
            </AnimatePresence>      
</header> 
        
)}

// this is a stateful ui component. it manages its own state. uses a boolean state controlling visibility
// uses conditional rendering
//navigation links are hardcodede rather than data driven - can be refactored
