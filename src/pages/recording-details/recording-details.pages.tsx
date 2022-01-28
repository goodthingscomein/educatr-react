import React, { useState } from 'react';
import CopyText from '../../components/copy-text/copy-text.components';
import HeadingText from '../../components/heading/heading.components';
import Link from '../../components/link/link.components';

// Import styles
import {
  PageContainer,
  DrawerContainer,
  MainContainer,
  VideoContainer,
  Video,
  AllContentContainer,
  ContentSelectionBar,
  ContentContainer,
} from './recording-details.styles';

// Render Component
const RecordingsPage: React.FC = () => {
  // State for content container

  return (
    <PageContainer>
      <MainContainer>
        <VideoContainer>
          <Video controls src='https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4' />
        </VideoContainer>
        <AllContentContainer>
          <ContentSelectionBar>
            <Link
              fontSize='large'
              fontWeight={400}
              color='textDark'
              hoverColor='primary'
              underlineEffect='always'
              margin='0 16px 0 0'
            >
              Overview
            </Link>
            <Link
              fontSize='large'
              fontWeight={400}
              color='textDark'
              hoverColor='primary'
              underlineEffect='always'
              margin='0 16px 0 0'
            >
              Resources
            </Link>
            <Link
              fontSize='large'
              fontWeight={400}
              color='textDark'
              hoverColor='primary'
              underlineEffect='always'
              margin='0 16px 0 0'
            >
              Notes
            </Link>
            <Link fontSize='large' fontWeight={400} color='textDark' hoverColor='primary' underlineEffect='always'>
              Practice
            </Link>
          </ContentSelectionBar>
          <ContentContainer>
            <HeadingText variant='h4' color='textDark'>
              Video Title goes right here, how cool! We can have quite a long video title, there are no issues.
            </HeadingText>
            <CopyText size='medium' color='textDark'>
              Here we have the sub text of the recording. This is the description and includes any relevant information
              that the teacher would like to provide along with the video.
            </CopyText>
          </ContentContainer>
        </AllContentContainer>
      </MainContainer>
      <DrawerContainer></DrawerContainer>
    </PageContainer>
  );
};

export default RecordingsPage;
