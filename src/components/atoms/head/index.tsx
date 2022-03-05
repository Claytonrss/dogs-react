import React, { useEffect } from 'react';

const Head: React.FC<HeadProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title + ' | Dogs';
    document
      .querySelector('meta[name=description]')
      ?.setAttribute('content', description || '');
  }, []);

  return <></>;
};

export default Head;
