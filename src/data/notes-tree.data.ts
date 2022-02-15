export type NotesNodeType = {
  name: string;
  url: string;
  children?: NotesNodeType[];
};

const data: NotesNodeType = {
  name: 'Notes',
  url: '/notes',
  children: [
    {
      name: 'ACCG 1000',
      url: '/accg-1000',
      children: [
        {
          name: 'Week 1',
          url: '/week-1',
        },
        {
          name: 'Week 2',
          url: '/week-2',
          children: [
            {
              name: 'Notes 1',
              url: '/notes-1',
            },
            {
              name: 'Notes 2',
              url: '/notes-2',
            },
          ],
        },
        {
          name: 'Week 3',
          url: '/week-3',
        },
      ],
    },
    {
      name: 'COMP 1000',
      url: '/comp-1000',
      children: [
        {
          name: 'Week 1',
          url: '/week-1',
        },
        {
          name: 'Week 2',
          url: '/week-2',
        },
        {
          name: 'Week 3',
          url: '/week-3',
        },
      ],
    },
    {
      name: 'COMP 1300',
      url: '/comp-1300',
      children: [
        {
          name: 'Week 1',
          url: '/week-1',
          children: [
            {
              name: 'Notes 1',
              url: '/notes-1',
            },
            {
              name: 'Notes 2',
              url: '/notes-2',
            },
          ],
        },
        {
          name: 'Week 2',
          url: '/week-2',
          children: [
            {
              name: 'Notes 1',
              url: '/notes-1',
            },
            {
              name: 'Notes 2',
              url: '/notes-2',
              children: [
                {
                  name: 'Sub Notes 1',
                  url: '/sub-notes-1',
                },
                {
                  name: 'Sub Notes 2',
                  url: '/sub-notes-2',
                },
                {
                  name: 'Sub Notes 3',
                  url: '/sub-notes-3',
                },
                {
                  name: 'Sub Notes 4',
                  url: '/sub-notes-4',
                },
              ],
            },
            {
              name: 'Notes 3',
              url: '/notes-3',
            },
            {
              name: 'Notes 4',
              url: '/notes-4',
            },
          ],
        },
        {
          name: 'Week 3',
          url: '/week-3',
        },
        {
          name: 'Week 4',
          url: '/week-4',
        },
        {
          name: 'Week 5',
          url: '/week-5',
        },
        {
          name: 'Week 6',
          url: '/week-6',
        },
      ],
    },
  ],
};

export default data;
