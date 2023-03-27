export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [ 
        {
            title: 'Biography', 
            name: 'biography',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Tecnologies', 
            name: 'tecnologies',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'instagram',
            type: 'string',
            title: 'Instagram'
        },
    ]
}