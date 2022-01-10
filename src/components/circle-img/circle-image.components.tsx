import React from 'react';

// Import styles
import { CircleImageContainer } from './circle-image.styles';

// Component Props Interface
type Props = {
	src: string;
	altText: string;
	css?: string;
};

// Render Component
const CircleImage: React.FC<Props> = ({ src, altText, css }) => (
	<CircleImageContainer src={src} alt={altText} css={css} />
);

export default CircleImage;
