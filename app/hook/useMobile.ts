'use client';
import { useState } from 'react';

const useMobile = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobileView = () => {
    setMobile((prev) => !prev);
  };
  return {
    mobile,
    handleMobileView,
  };
};

export default useMobile;
