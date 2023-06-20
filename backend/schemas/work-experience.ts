export default {
  name: 'work-experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      title: 'Company Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
    },
    {
      title: 'Start Date',
      name: 'start',
      type: 'string',
    },
    {
      title: 'End Date',
      name: 'end',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'markdown',
    },
  ],
}
