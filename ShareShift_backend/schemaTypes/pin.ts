import { defineField, defineType } from 'sanity';

export const pin = defineType({
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'string'
        }),
        defineField({
            name: 'destination',
            title: 'Destination',
            type: 'url'
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
              hotspot: true 
            }
        }),
        defineField({
            name: 'userId',
            title: 'UserID',
            type: 'string'
        }),
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy'
        }),
        defineField({
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{type: 'save'}]
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'array',
            of: [{type: 'comment'}]
        }),
    ]
})