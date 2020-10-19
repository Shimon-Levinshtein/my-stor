
export default (state = [] , action) =>{
    switch(action.type){
        case 'LIST_STORE':
                return action.payload;
        case 'ADD_PRODUCT':
                return [...state , action.payload]
        case 'EDIT_PRODUCT':
                const newStats = state.map(post => {
                        if (post.UniqueId == action.payload.UniqueId) {
                                return action.payload
                        } else {
                                return post
                        };
                });
                return newStats;
        case 'DELETE_PRODUCT':
                const deletedStats = state.filter(post => {
                        if (post.UniqueId !== action.payload.UniqueId) {
                                return post;
                        };
                });
                return deletedStats;
        default:
            return state;
        
    }
}
