import { useEffect, useState } from 'react';

import Logo1 from '../../assets/logo/shortletlogo.png';

import { Link } from 'react-scroll';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { menuItems } from '../constants';

const Header = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [modalOpen, setModalOpen] = useCycle(false, true);

  const changeScroll = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScroll);

    return () => {
      window.removeEventListener('scroll', changeScroll);
    };
  }, []);

  const modalVariants = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: 0,
      transition: {
        type: 'tween', // Set transition type to 'tween'
        duration: 0.3, // Specify duration
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        type: 'tween',
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: '50%',
      transition: {
        duration: 0.1,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const handleClick = (url: string) => {
    if (url !== 'https://flutterwave.com/pay/1vd6dso7c3yn') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`${
        navScroll ? 'bg-[#000000]/90 bg-blend-overlay' : 'bg-transparent'
      } w-full sticky top-0 h-20 z-50`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        <div className="flex justify-between items-center w-full h-20 z-50 border-none text-pry">
          <nav className="hidden md:flex gap-20">
            <ul className="w-full flex items-center justify-between space-x-8">
              {menuItems.map((menu, i) => (
                <Link
                  to={menu.url}
                  smooth={true}
                  duration={800}
                  key={i}
                  className={`text-pry tracking-wide text-base capitalize cursor-pointer py-2 px-3 hover:text-pry transition duration-300 ease-in-out relative w-fit block after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-pry after:bg-pry after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
                  onClick={() => handleClick(menu.url)}
                >
                  {menu.title}
                </Link>
              ))}
            </ul>
          </nav>
          <div className="text-white h-full overflow-hidden">
            <Link to={'/'}>
              <img
                src={Logo1}
                alt="logo"
                width={100}
                height={100}
                className="h-20 w-20 object-cover object-center"
              />
            </Link>
          </div>
          <div className="inset-0 flex w-full h-screen items-center justify-center flex-col lg:hidden">
            <div
              className="absolute right-5 top-0 translate-y-1/2 z-50 cursor-pointer"
              onClick={() => setModalOpen()}
            >
              {modalOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 border border-white p-2 rounded-md text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 border border-pry p-2 rounded-md text-pry"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
            <AnimatePresence>
              {modalOpen && (
                <motion.div
                  className="absolute inset-0 z-40 bg-[#000] h-screen w-full"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <nav className="w-full h-[80%]">
                    <motion.ul
                      className="flex flex-col gap-10 items-start justify-center h-full w-full px-10"
                      variants={navLinksVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {menuItems.map((menu, i) => (
                        <Link
                          to={menu.url}
                          smooth={true}
                          duration={800}
                          onClick={() => {
                            handleClick(menu.url);
                            setModalOpen();
                          }}
                        >
                          <motion.li
                            key={i}
                            className="w-full text-lg text-pry py-2 px-6 hover:text-sec cursor-pointer text-start capitalize"
                            variants={linkItemVariants}
                          >
                            {menu.title}
                          </motion.li>
                        </Link>
                      ))}
                    </motion.ul>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
