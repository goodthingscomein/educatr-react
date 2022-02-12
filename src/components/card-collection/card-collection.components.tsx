import React from 'react';

// Import styles
import { CardGrid } from './card-collection.styles';

// Import custom components
import HeadingText from '../heading-text/heading-text.components';
import Margin from '../margin/margin.components';
import Divider from '../divider/divider.components';

// Component Props Interface
type Props = {
  children: React.ReactNode;
  heading?: string;
  numberOfColumns: number;
  numberOfCards: number;
  hasDivider?: boolean;
};

// Render Component
const CardCollection: React.FC<Props> = ({ children, heading, numberOfColumns, numberOfCards, hasDivider }) => (
  <>
    {heading && (
      <>
        <HeadingText variant='h4' color='textDark'>
          {heading}
        </HeadingText>
        <Margin width='100%' height='20px' />
      </>
    )}
    <CardGrid numberOfColumns={numberOfColumns} numberOfRows={Math.ceil(numberOfCards / numberOfColumns)}>
      {children}
    </CardGrid>
    {hasDivider && <Divider color={'dark'} margin='40px 0' />}
  </>
);

export default CardCollection;
