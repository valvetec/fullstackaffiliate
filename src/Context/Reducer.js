

const Reducer = (state, action) =>{
    switch(action.type){
        case "ISLOADING_START":
            return{
                ...state,
                isLoading: true
            };

        case "LOG_SUCCESS":
                return{
            userInfo: action.payload,
            isLoading: false
            };
        case "ISLOADING_END":
            return{
                ...state,
                isLoading: false
            }

        case "IS_SUCCESS_STATUS_START":
            return{
                ...state,
                successStatus: true
            }

         case "IS_SUCCESS_STATUS_END":
            return{
                ...state,
                successStatus: false
            }

        default:
            return state;
    }
};


export default Reducer;