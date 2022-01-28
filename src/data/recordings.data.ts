export type RecordingsCollectionDataType = {
  collectionTitle: string;
  recordings: RecordingDataType[];
};

export type RecordingDataType = {
  recordingUrl: string;
  thumbnailImgSrc: string;
  recordingLength: number;
  title: string;
  date: string;
  alreadyWatched?: boolean;
};

export default [
  {
    collectionTitle: 'Week 1 Recordings',
    recordings: [
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=1',
        recordingLength: 2456,
        title:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        date: '27/01/2022',
        alreadyWatched: true,
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=2',
        recordingLength: 1450,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=3',
        recordingLength: 3746,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=4',
        recordingLength: 198,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=5',
        recordingLength: 1899,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
    ],
  },
  {
    collectionTitle: 'Week 2 Recordings',
    recordings: [
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=6',
        recordingLength: 333,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=7',
        recordingLength: 389,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
    ],
  },
  {
    collectionTitle: 'Week 3 Recordings',
    recordings: [
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=8',
        recordingLength: 3687,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=9',
        recordingLength: 789,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=10',
        recordingLength: 999,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=11',
        recordingLength: 1009,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=12',
        recordingLength: 1544,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=13',
        recordingLength: 454,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingUrl: '/recordings',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=14',
        recordingLength: 4498,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
    ],
  },
] as RecordingsCollectionDataType[];
