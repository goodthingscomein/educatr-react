import React from 'react';

// Import styles
import {CardImageContainer} from './card-image.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  src: string;
  alt: string;
  imageBrightness?: number;
};

// Render Component
const CardImage: React.FC<Props> = ({children, src, alt, imageBrightness}) => (
  <CardImageContainer src={src} alt={alt} imageBrightness={imageBrightness}>
    {children}
  </CardImageContainer>
);

export default CardImage;
