'use client';

import MenuIcon from '@mui/icons-material/Menu'; 
import { useState } from 'react';
import { AnimatePresence } from "framer-motion"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {MenuItems } from './array'
import { Menu } from './menu'
 
 export function Header() {

    const [isMenuOpen,setIsMenuOpen] = useState(false)   //creates state, stored in a variable, for if menu is open or closed
    const pathname = usePathname()   //react inbuilt function to evaluate what page user is on 
    const isBlockedPage = pathname === '/blog' || pathname === '/shop';
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      event.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    };

     return (
     
        <header className="sticky top-0 z-10 bg-gray-100 lg:bg-gray-100 flex justify-between items-center rounded-t-md z-100 shadow-md">
            {pathname === '/' ? (
              <a href="#home" onClick={(event) => handleNavClick(event, 'home')}>
              <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
            </a> ) : (
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
            </Link> )
            }
            {/* Hide menu icon and nav links on blog pages */}
            {!pathname.startsWith('/blog') && !pathname.startsWith('/shop') && (
              <>
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
                </>
            )}
            <AnimatePresence>
                                 {isMenuOpen && !isBlockedPage && (
                                    <div className="flex gap-2 lg:gap-4 absolute top-0 lg:top-4 right-16 lg:right-24 z-50"> 
                                        {MenuItems.map((item) => 
                                            <Menu 
                                                key={item.id}
                                                link={item.link}
                                                text={item.text}
                                                startOpacity={item.startOpacity}
                                                animateOpacity={item.animateOpacity}
                                                duration={item.duration}
                                                delay={item.delay}
                                            />
                                        )}
                                    </div>

                                 )}

            </AnimatePresence>
                                
            
        </header>
        )
    }
  