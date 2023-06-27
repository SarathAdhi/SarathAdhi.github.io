export default {
  name: 'certificates',
  type: 'document',
  title: 'Certificates',
  fields: [
    {
      name: 'no',
      type: 'number',
      title: 'Number',
    },

    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'images',
      title: 'Images',
      type: 'image',
    },
  ],
}
