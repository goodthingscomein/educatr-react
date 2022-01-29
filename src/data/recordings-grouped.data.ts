export type RecordingsCollectionDataType = {
  collectionTitle: string;
  recordings: RecordingDataType[];
};

export type RecordingDataType = {
  recordingId: string;
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
        recordingId: '1',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=1',
        recordingLength: 2456,
        title:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        date: '27/01/2022',
        alreadyWatched: true,
      },
      {
        recordingId: '2',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=2',
        recordingLength: 1450,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '3',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=3',
        recordingLength: 3746,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '4',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=4',
        recordingLength: 198,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '5',
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
        recordingId: '6',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=6',
        recordingLength: 333,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '7',
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
        recordingId: '8',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=8',
        recordingLength: 3687,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '9',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=9',
        recordingLength: 789,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '10',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=10',
        recordingLength: 999,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '11',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=11',
        recordingLength: 1009,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '12',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=12',
        recordingLength: 1544,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '13',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=13',
        recordingLength: 454,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
      {
        recordingId: '14',
        thumbnailImgSrc: 'https://picsum.photos/640/360?random=14',
        recordingLength: 4498,
        title: 'Discrete Math - Principles of Discrete (Graph Theory)',
        date: '27/01/2022',
      },
    ],
  },
] as RecordingsCollectionDataType[];
