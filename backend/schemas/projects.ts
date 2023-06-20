export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'key',
      type: 'string',
      title: 'Key',
    },

    {
      name: 'starred',
      title: 'Starred',
      type: 'boolean',
    },

    {
      name: 'highlights',
      title: 'Highlights',
      type: 'boolean',
    },

    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },

    {
      name: 'techstack',
      title: 'TechStack',
      type: 'array',
      of: [
        {
          title: 'Framework',
          name: 'framework',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'url',
            },
          ],
        },
      ],
    },

    // {
    //   name: 'tc',
    //   title: 'tc',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'fw',
    //       name: 'fw',
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'image',
    //           title: 'image',
    //           type: 'string',
    //           components: {input: TechStackSelectField},
    //         },
    //       ],
    //     },
    //   ],
    // },

    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
    },

    {
      name: 'github',
      title: 'Github',
      type: 'string',
    },

    {
      name: 'demo',
      title: 'Demo',
      type: 'string',
    },
  ],
}
