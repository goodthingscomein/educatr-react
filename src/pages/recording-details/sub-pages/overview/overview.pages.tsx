import React from 'react';

// Import styles
import { HashtagsContainer } from './overview.styles';

// Import custom components
import CopyText from '../../../../components/copy-text/copy-text.components';
import HeadingText from '../../../../components/heading/heading.components';
import Link from '../../../../components/link/link.components';
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
      <HashtagsContainer>
        {hashtags.map((hashtag) => {
          return (
            <Link key={hashtag} fontSize='x-small' color='primaryAccent' hoverColor='secondaryAccent'>
              #{hashtag}
            </Link>
          );
        })}
      </HashtagsContainer>
    )}

    <HeadingText variant='h5' color='textDark'>
      {title}
    </HeadingText>
    <Margin height='6px' />
    <CopyText size='medium' color='textDark'>
      {description}
    </CopyText>
  </>
);

export default OverviewSubPage;
