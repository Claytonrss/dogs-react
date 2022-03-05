import React from 'react';
import { Container } from './styles';
import { ReactComponent as DogBrand } from '@/assets/images/dogs-footer.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <DogBrand />
      <p>Dogs. Alguns direitos reservados</p>
    </Container>
  );
};

export default Footer;
