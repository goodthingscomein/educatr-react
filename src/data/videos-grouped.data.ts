import { VideoMetadataState } from '../redux/video-metadata/video-metadata.reducer';

export type VideoCollectionDataType = {
  collectionTitle: string;
  videos: VideoMetadataState[];
};

export default [
  {
    collectionTitle: 'Week 1 Recordings',
    videos: [
      {
        videoId: '00000001',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=1',
        videoLengthMs: 5000,
        videoTitle: 'Discrete Math - Principles of Discrete (Graph Theory)',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000002',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=2',
        videoLengthMs: 6000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000003',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=3',
        videoLengthMs: 6000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000004',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=4',
        videoLengthMs: 5000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000005',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=5',
        videoLengthMs: 7000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
    ],
  },
  {
    collectionTitle: 'Week 2 Recordings',
    videos: [
      {
        videoId: '00000006',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=6',
        videoLengthMs: 10000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000007',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=7',
        videoLengthMs: 11000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
    ],
  },
  {
    collectionTitle: 'Week 3 Recordings',
    videos: [
      {
        videoId: '00000008',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=8',
        videoLengthMs: 2456000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000009',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=9',
        videoLengthMs: 2456000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000010',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=10',
        videoLengthMs: 2456000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000011',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=11',
        videoLengthMs: 2456000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000012',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=12',
        videoLengthMs: 2456000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000013',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=13',
        videoLengthMs: 2456000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
      {
        videoId: '00000014',
        videoThumbnailSrc: 'https://picsum.photos/1280/720?random=14',
        videoLengthMs: 2456000,
        videoTitle:
          'Discrete Math - Principles of Discrete (Graph Theory) - This title is quite a long one, and allows us to test the title length cutoff!',
        videoDescription:
          'This is the description of this video, it can be quite long, but that is sort of the point is it not?  Anyways, I think this is a pretty cool video, quite valuable and makes you a smarter person!',
        videoPostDate: '27/01/2022',
        alreadyWatched: true,
        videoHashtags: ['Test', 'Cool', 'Math'],
      },
    ],
  },
] as VideoCollectionDataType[];
