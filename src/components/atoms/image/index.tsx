import React, { SyntheticEvent, useState } from 'react';
import { Container } from './styles';

const Image: React.FC<ImageProps> = ({ src, alt, loading, className }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoadImage(event: SyntheticEvent<HTMLDivElement>) {
    event.currentTarget.style.opacity = '1';
    setSkeleton(false);
  }
  return (
    <Container className={className}>
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoadImage} src={src} alt={alt} loading={loading} />
    </Container>
  );
};

export default Image;
