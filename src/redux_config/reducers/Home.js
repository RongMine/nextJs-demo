import { CHANGE_CONTENT } from "../actionTypes";

const initialState = {
    title:'hello part2'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CONTENT:
            return {
                ...state,
                title:action.title
            };
        default:
            return state;
    }
}
