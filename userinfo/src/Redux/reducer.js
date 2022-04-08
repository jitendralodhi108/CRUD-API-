

const InitialState = {
    users:[],
    showuser:[],
}

export const Reducer = (state=InitialState, action)=>{

    switch(action.type)
    {
        case "saveusers": return ({
            ...state,
            users:[...state.users,action.payload]
        })
        case 'showuser': return ({
            ...state,
            showuser:[action.payload],
        })
        case 'delete': return({
            ...state,
            users : [action.payload]
        })
        case 'updatbyid': return({
            ...state,
            showuser:[action.payload],
            
        })

        default: return ( InitialState )
    }

}



