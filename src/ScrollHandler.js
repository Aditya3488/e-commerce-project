// ScrollHandler.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Set overflow hidden on the body element when the component mounts (i.e., on specific pages)
    const hideOverflowOnPages = ['/register', '/login', '/'];
    if (hideOverflowOnPages.includes(location.pathname)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Remove the overflow hidden when the component unmounts (i.e., when navigating away from specific pages)
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [location]);

  return <>{children}</>;
};

export default ScrollHandler;
