export type DiscussionMessageType = {
  id: string;
  replyingToId?: string;
  username: string;
  displayPhotoUrl: string;
  message: string;
};

const data: DiscussionMessageType[] = [
  {
    id: '724203897',
    username: 'Jai Carey',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=3',
    message:
      'This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.',
  },
  {
    id: '724203898',
    replyingToId: '724203897',
    username: 'Jester McManister',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=4',
    message:
      'This is the header message of a discussion, there will be a string oelow to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.',
  },
  {
    id: '724203899',
    replyingToId: '724203897',
    username: 'Jai Carey',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=3',
    message:
      'This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.',
  },
  {
    id: '724223897',
    username: 'Caroline Spunar',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=7',
    message:
      'This isIf you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.',
  },
  {
    id: '724203597',
    replyingToId: '724223897',
    username: 'Jai Carey',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=3',
    message:
      'This is the header message of a discussion, there wilt, like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.',
  },
  {
    id: '7242103297',
    replyingToId: '724223897',
    username: 'Caroline Spunar',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=7',
    message: 'This is the header message of a discussion, there view all replies.',
  },
  {
    id: '7241203897',
    replyingToId: '724223897',
    username: 'Jester McManister',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=4',
    message:
      'This is the header message elow to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.',
  },
  {
    id: '7242038597',
    replyingToId: '724223897',
    username: 'Jesus Christu',
    displayPhotoUrl: 'https://picsum.photos/80/80?random=1',
    message:
      'This is the header messagelick the button below to view all replies.This is the header message of a disook into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.This is the header message of a discussion, there will be a string of replies underneath this message.  If you would like to look into that, just click the button below to view all replies.',
  },
];

export default data;
