import React, { useEffect, useState } from 'react';

const useMedia = (mediaQuery: string) => {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(mediaQuery);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [mediaQuery]);

  return match;
};

export default useMedia;
