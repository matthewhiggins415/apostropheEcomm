module.exports = {
  extend: 'apostrophe-widgets', 
  label: 'featured',
  addFields: [
    {
      name: 'title',
      label: 'Featured Title', 
      type: 'string', 
      required: false
    }
  ], 
  arrangeFields: [
    {
      name: 'basics',
      label: 'Basics', 
      fields: ['title']
    }
  ]
}

// apostrophe-pieces widgets 
// master reusable content with pieces

// helpfer functions related to images 
// apos.images.first(page.body)? 

// watch out for gulp builds and webpack 