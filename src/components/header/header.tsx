import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/logo.svg';
import ToggleTheme from 'components/toggleTheme/toggleTheme';

const headerNav = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Movies',
    path: '/movie'
  },
  {
    label: 'TV Series',
    path: '/tv'
  }
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === `/${pathname.split('/')[1]}`);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('bg-gray-200', 'dark:bg-zinc-900', 'shrink');
      } else {
        headerRef.current.classList.remove('bg-gray-200', 'dark:bg-zinc-900', 'shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header z-10">
      <div className="header__wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? 'active ' : ' '}` + 'text-black dark:text-white'}>
                <Link to={e.path}>
                  {e.label}
                </Link>
              </li>
            ))
          }
          <ToggleTheme />
        </ul>
      </div>
    </div>

  )
};

export default Header;