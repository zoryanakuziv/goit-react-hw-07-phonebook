import React from 'react';
import { Oval } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';
export const Loader = () => (
  <LoaderStyled>
    <Oval color=" #3f51b5" height={14} width={16} />
  </LoaderStyled>
);
