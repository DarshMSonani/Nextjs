import { ADD_TO_CART, REMOVE_TO_CART } from "../constant"

// const intialState = {
//     cartData: []
// }

export default function cartItem(state = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            // console.log('action :>> ', action);
            return [
                ...state,
                { cartData: action.data }
            ]

        case REMOVE_TO_CART:
            state.pop();
            return [
                ...state
            ]
            break;

        default:
            return state;
    }

}