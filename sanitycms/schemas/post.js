import {defineType} from 'sanity'

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
      name: 'original',
      title: 'Original',
      type: 'string',
    },
    {
      name: 'alternativeone',
      title: 'AlternativeOne',
      type: 'string',
    },
    {
      name: 'alternativetwo',
      title: 'AlternativeTwo',
      type: 'string',
    },
  ],
})
