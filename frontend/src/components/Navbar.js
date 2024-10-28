import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserIcon from '../assets/images/usericon.png';
import Side from '../assets/images/sidelogo.png';
import Cookies from 'js-cookie';
import { Button } from 'flowbite-react';
import { base_url } from '../constants/contants';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate(); 

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleProfileClick = () => {
    const isLoggedIn = !!Cookies.get('token'); 
    if (isLoggedIn) {
      navigate('/profile'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <header
      className={`bg-opacity-75 backdrop-blur-sm p-4 text-[#AB7529] fixed w-full top-0 left-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="flex items-center justify-between container mx-auto">
        <h1 className="text-2xl font-bold">
          <img src={Side} className="h-10" alt="Logo" />
        </h1>
        <div className="flex items-center space-x-12">
          <Link to="/" className="hover:text-[#D3A553]">HOME</Link>
          <Link to="/children" className='hover:text-[#D3A553]'>CHILDREN</Link>
          <Link to="/learning" className="hover:text-[#D3A553]">LEARNING</Link>
          <Link to="/awareness" className="hover:text-[#D3A553]">AWARENESS</Link>
          <div className="flex items-center cursor-pointer" onClick={handleProfileClick}>
            <img src={UserIcon} alt="User Icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
