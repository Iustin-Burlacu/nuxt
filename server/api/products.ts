const data = [
    {
        'name': 'Product 1',
        'price': 9.99,
        'desctiption': 'Lorem ipsum'
    },
    {
        'name': 'Product 2',
        'price': 10.99,
        'desctiption': 'Lorem ipsum'
    },
    {
        'name': 'Product 3',
        'price': 11,
        'desctiption': 'Lorem ipsum'
    }
]

export default defineEventHandler( () => {
    return {
        data
    };
});
