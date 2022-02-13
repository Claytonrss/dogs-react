import React from 'react';
import { DataCyProps } from '../../../types';
import { TitleStyled } from './styles';

const Title: React.FC<DataCyProps> = ({ dataCypress, children }) => {
  return <TitleStyled data-cy={dataCypress}>{children}</TitleStyled>;
};

export default Title;
