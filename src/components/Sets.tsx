
// const sets = [
//     {
//         'id': 0,
//         'name': 'Adjustment Kit',
//         'desc': 'empty'
//     },
//     {
//         'id': 1,
//         'name': 'Aligner Banding',
//         'desc': 'empty'
//     },
//     {
//         'id': 2,
//         'name': 'Debanding',
//         'desc': 'empty'
//     },
//     {
//         'id': 3,
//         'name': 'Hawley Check',
//         'desc': 'empty'
//     },
//     {
//         'id': 4,
//         'name': 'MSE Check',
//         'desc': 'empty'
//     },
//     {
//         'id': 5,
//         'name': 'Appliance Check',
//         'desc': 'empty'
//     }
// ]

// export default sets;

function Sets(){
    const lists = [
        {
            'id': 0,
            'name': 'Adjustment Kit',
            'desc': 'empty',
            'img' : ''
        },
        {
            'id': 1,
            'name': 'Aligner Banding',
            'desc': 'empty',
            'img' : ''
        },
        {
            'id': 2,
            'name': 'Debanding',
            'desc': 'empty',
            'img' : ''
        },
        {
            'id': 3,
            'name': 'Hawley Check',
            'desc': 'empty',
            'img' : ''
        },
        {
            'id': 4,
            'name': 'MSE Check',
            'desc': 'empty',
            'img' : ''
        },
        {
            'id': 5,
            'name': 'Appliance Check',
            'desc': 'empty',
            'img' : ''
        }
    ]

    return(
        <div>
            {lists?.map((item, id) => (
            <div>
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
                
            </div>
            ))}
        </div>
        
    )
}
export default Sets;