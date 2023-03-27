export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'client',
        type: 'string',
        title: 'Client'
      },
      {
        name: 'credits',
        type: 'string',
        title: 'Credits'
      },
      {
        name: 'techs',
        type: 'string',
        title: 'Tecnologies'
      },
      {
        name: 'website',
        type: 'string',
        title: 'Website'
      },
      {
        title: 'Description', 
        name: 'description',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        type: 'array',
        title: 'Images', 
        name: 'images',
        of: [
            {
                title: 'Image',
                name: 'image',
                type: 'image',
                options: {
                    hotspot: true, // <-- Defaults to false
                    metadata: [
                        'blurhash',   // Default: included
                        'lqip',       // Default: included
                        'palette',    // Default: included
                        'exif',       // Default: not included
                        'location',   // Default: not included
                    ],
                },
            }
        ]
      }
    ]


}