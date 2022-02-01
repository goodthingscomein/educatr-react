import React from 'react';

// Import styles
import { HashtagsContainer } from './overview.styles';

// Import custom components
import CopyText from '../../../../components/copy-text/copy-text.components';
import HeadingText from '../../../../components/heading/heading.components';
import Margin from '../../../../components/margin/margin.components';

// Component Props Interface
type Props = {
  hashtags?: string[];
  title: string;
  description: string;
};

// Render Component
const OverviewSubPage: React.FC<Props> = ({ hashtags, title, description }) => (
  <>
    {hashtags && (
      <>
        <HashtagsContainer>
          {hashtags.map((hashtag) => {
            return (
              <>
                <CopyText key={hashtag} size='x-small' color='secondary'>
                  #{hashtag}
                </CopyText>
                <Margin width='4px' />
              </>
            );
          })}
        </HashtagsContainer>
        <Margin height='8px' />
      </>
    )}

    <HeadingText variant='h6' color='textDark'>
      {title}
    </HeadingText>
    <Margin height='6px' />
    <CopyText size='medium' color='textDark'>
      {description}
    </CopyText>
  </>
);

export default OverviewSubPage;
