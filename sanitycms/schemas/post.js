import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'alternative1',
      title: 'Alternative1',
      type: 'string',
    },
    {
      name: 'alternative',
      title: 'Alternative2',
      type: 'string',
    },
  ],
})
