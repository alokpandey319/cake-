import {createStore} from "redux"
import {Alok} from "./Reducers"


var store  = createStore(Alok)

// // store.dispatch({
// //     type:"LOGIN"
// })
store.dispatch({
    type:"Order"
})


console.log("after dispatch store ka state" , store.getState())

export default store

