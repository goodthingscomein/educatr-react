import React from 'react';
import CopyText from '../../../../components/copy-text/copy-text.components';
import HeadingText from '../../../../components/heading/heading.components';
import HorizontalDiv from '../../../../components/horizontal-div/horizontal-div.components';
import Margin from '../../../../components/margin/margin.components';
import VerticalDiv from '../../../../components/vertical-div/vertical-div.components';

// Import styles
import { PageContainer, PageHeaderContainer, GridContainer, GridItem } from './dashboard.styles';

// Render Component
const Application_DashboardPage: React.FC = () => (
	<PageContainer>
		<PageHeaderContainer>
			<HeadingText variant='h4' color='white'>
				Dashboard
			</HeadingText>
		</PageHeaderContainer>
		<GridContainer>
			<GridItem>
				<VerticalDiv
					backgroundColor='transparent'
					justifyContent='space-between'
					alignItems='flex-start'
					css={`
						width: 100%;
						height: 100%;
					`}>
					<VerticalDiv
						backgroundColor='transparent'
						justifyContent='center'
						alignItems='center'
						css={`
							height: fit-content;
							width: fit-content;
						`}>
						<CopyText size='large' fontWeight={300} color='textDark'>
							Total Followers
						</CopyText>
						<HorizontalDiv
							backgroundColor='transparent'
							justifyContent='flex-start'
							alignItems='center'
							css={`
								height: fit-content;
								width: 100%;
								padding: 4px 12px;
							`}>
							<CopyText size='x-small' fontWeight={300} color='textLight'>
								Instagram
							</CopyText>
						</HorizontalDiv>
					</VerticalDiv>
					<VerticalDiv
						backgroundColor='transparent'
						justifyContent='center'
						alignItems='flex-start'
						css={`
							height: fit-content;
							width: 100%;
						`}>
						<CopyText size='x-large' fontWeight={700} color='textDark'>
							45 829
						</CopyText>
						<CopyText size='small' fontWeight={700} color='successDark'>
							+ 947
						</CopyText>
					</VerticalDiv>
					<HorizontalDiv
						backgroundColor='transparent'
						justifyContent='flex-start'
						alignItems='center'
						css={`
							height: fit-content;
							width: 100%;
						`}>
						<CopyText size='small' fontWeight={700} color='successDark'>
							+ 21.3%
						</CopyText>
						<HorizontalDiv
							backgroundColor='transparent'
							justifyContent='center'
							alignItems='center'
							css={`
								width: fit-content;
								height: fit-content;
								padding: 0;
								margin: 0;
								margin-left: 4px;
							`}>
							<CopyText size='small' fontWeight={400} color='textLight'>
								since January 2022
							</CopyText>
						</HorizontalDiv>
					</HorizontalDiv>
				</VerticalDiv>
			</GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
			<GridItem></GridItem>
		</GridContainer>
	</PageContainer>
);

export default Application_DashboardPage;
