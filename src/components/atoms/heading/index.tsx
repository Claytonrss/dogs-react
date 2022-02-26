import React from 'react';
import { ContainerHeading } from './styles';

const Heading: React.FC<HeadingProps> = props => {
  return <ContainerHeading as={props.tag}>{props.children}</ContainerHeading>;
};

export default Heading;
