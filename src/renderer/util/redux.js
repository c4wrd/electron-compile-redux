export function createReducer(initialState, reducerHandlers) {
    return function(state=initialState, action) {
        const {
            ["type"]: deleted,
            ...payload
        } = action;

        if ( reducerHandlers.hasOwnProperty(action.type)) {
            return reducerHandlers[action.type](state, payload);
        }
        
        return state;
    }
}