module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Header',
    addFields: [
      {
        name: 'primaryNav',
        label: 'Primary Navigation',
        type: 'array',
        titleField: 'primaryNavItem.items[0].linkText',
        schema: [
          {
            name: 'primaryNavItem',
            label: 'Navigation Item',
            type: 'singleton',
            widgetType: 'link',
            required: true
         }
        ]
      }
    ],
    arrangeFields: [
      {
        name: 'basics',
        label: 'Basics',
        fields: ['primaryNav']
      }
    ]
  };