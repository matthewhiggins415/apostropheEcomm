module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Hero',
    addFields: [
        {
          name: 'title',
          label: 'Hero Title', 
          type: 'string', 
          required: true
        }, 
        {
          name: 'image',
          label: 'Hero Image',
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
          fields: ['title', 'image']
        }
      ]
  };