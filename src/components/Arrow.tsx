import React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface ArrowProps {
  onClick: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <ArrowBack
    onClick={onClick}
    style={{ position: 'absolute', top: '50%', left: '-25px', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 2 }}
  />
);


export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <ArrowForward
    onClick={onClick}
    style={{ position: 'absolute', top: '50%', right: '-25px', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 2 }}
  />
);
