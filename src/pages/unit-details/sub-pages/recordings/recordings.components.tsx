import React from 'react';

// Import styles
import {
  SearchUnitsGridContainer,
  VideoCard,
  Thumbnail,
  ThumbnailTimestamp,
  ThumbnailHoverButton,
  VideoCardTextContainer,
} from './recordings.styles';

// Import custom components
import CopyText from '../../../../components/copy-text/copy-text.components';
import HorizontalDiv from '../../../../components/horizontal-div/horizontal-div.components';
import Margin from '../../../../components/margin/margin.components';
import VerticalDiv from '../../../../components/vertical-div/vertical-div.components';

// Import custom icons
import PlayIcon from '@mui/icons-material/PlayArrow';

// Render Component
const RecordingsSubPage: React.FC = () => (
  <SearchUnitsGridContainer numberOfColumns={3} numberOfRows={4} cardHeight='320px'>
    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((value, index) => {
      return (
        <VideoCard>
          <Thumbnail src={`https://picsum.photos/300?random=${index}`}>
            <ThumbnailTimestamp>24:25</ThumbnailTimestamp>
            <ThumbnailHoverButton>
              <PlayIcon fontSize='inherit' />
            </ThumbnailHoverButton>
          </Thumbnail>
          <VideoCardTextContainer>
            {/* Title + blurb */}
            <VerticalDiv
              backgroundColor='transparent'
              justifyContent='flex-start'
              alignItems='flex-start'
              css={`
                width: 100%;
                flex: 1 0 0;
              `}
            >
              <CopyText size='medium' color='textDark' fontWeight={700}>
                Title of the recording, hello there, this is a decent sized title, across multiple lines
              </CopyText>
              <Margin width='100%' height='' />
              <HorizontalDiv
                backgroundColor='transparent'
                justifyContent='space-between'
                css={`
                  width: 100%;
                  flex: 1 0 0;
                  margin-top: 4px;
                `}
              >
                <CopyText size='small' color='textDark' fontWeight={300}>
                  27/01/2022
                </CopyText>
                <CopyText size='small' color='textDark' fontWeight={300}>
                  Already watched
                </CopyText>
              </HorizontalDiv>
            </VerticalDiv>
          </VideoCardTextContainer>
        </VideoCard>
      );
    })}
  </SearchUnitsGridContainer>
);

export default RecordingsSubPage;
