export function Alok (state ={},{type,payload}){
 
    switch(type){
        case "LOGIN" :{
            console.log(type)
         state = {...state}
         state["isloggedin"] = payload 
         return state
        }
        case "Order": {
            state = { ...state }
            state['oderplace']=payload
            return state
        } 
        default : return state
    }
 }
