const showGoods = (state = [],action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            console.log('show all works');
             return state
        default:
            return state
    }
}

export default showGoods
