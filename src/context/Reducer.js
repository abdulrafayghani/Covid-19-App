export const reducer = (state, action) =>{
    switch(action.type){
        case "UPDATE_DATA":
            return{
                ...state,
                data: action.payload
            }
        case "UPDATE_COUNTRY":
            return{
                ...state,
                country: action.payload
            }
        default:
            return state
    }
}