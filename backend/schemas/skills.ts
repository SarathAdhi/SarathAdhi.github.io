export default {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {
            title: 'LANGUAGES',
            value: '1.LANGUAGES',
          },
          {
            title: 'FRAMEWORKS',
            value: '2.FRAMEWORKS',
          },
          {
            title: 'UI LIBRARIES',
            value: '3.UI LIBRARIES',
          },
          {
            title: 'DATABASES',
            value: '4.DATABASES',
          },
          {
            title: 'TOOLS',
            value: '5.TOOLS',
          },
        ],
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
  ],
}
