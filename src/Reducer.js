

export const initialState = {
    cart: [],
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return ({
                ...state,
                cart: [...state.cart, action.item]
            })
        case 'REMOVE_FROM_CART':
            const newCart = [...state.cart]
            const removedItemIndex = newCart.findIndex(item => item.id === action.id)
            if (removedItemIndex >= 0) {
                newCart.splice(removedItemIndex, 1)
            }
            else {
                console.warn('This is an attempt to remove a non-existing element')
            }
            return ({
                ...state,
                cart: newCart
            })
        case 'SET_USER':
            return ({
                ...state,
                user: action.user
            })
        default:
            return state
    }
}

export default reducer