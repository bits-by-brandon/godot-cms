export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'level',
      title: 'Bio',
      type: 'string',
      options: {
        list: [
          {title: "Platinum", value: "platinum"},
          {title: "Gold", value: "gold"},
          {title: "Silver", value: "silver"},
        ],
        layout: 'radio'
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
