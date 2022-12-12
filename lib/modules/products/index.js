// extend apostrophe-pices to define this as something that can b e used all over the site.
// name property is always singular - used to identify one piece in db

// create this module.export
// add to app.js
module.exports = {
  extend: 'apostrophe-pieces', 
  name: 'product', 
  label: 'Product', 
  pluralLabel: 'Products', 
  addFields: [
    {
      name: 'title',
      label: 'Product Name', 
      type: 'string', 
      required: true
    }, 
    {
      name: 'price',
      label: 'Product Price',
      type: 'float', 
      required: true
    },
    {
      name: 'count',
      label: 'Count in Stock',
      type: 'integer',
      required: true
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        minSize: [ 200, 200 ],
        aspectRatio: [ 1, 1 ],
        enableAltField: true
      }
    }
  ], 
  arrangeFields: [
    {
      name: 'basics',
      label: 'Basics', 
      fields: ['title', 'price', 'count', 'thumbnail']
    }
  ]
}