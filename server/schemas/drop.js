export default {
    name: 'drop',
    title: 'Drop',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Drop Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Release Date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
            },
        
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        }
    ],
}