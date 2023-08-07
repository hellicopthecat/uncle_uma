// import {createStore} from "redux";
// const chk_user = {
//   user: null,
//   check: false,
// };
// function loginReducer(state = chk_user, action) {
//   switch (action.type) {
//     case "LOGGEDIN":
//       return {
//         ...state,
//         user: action.payload,
//         check: true,
//       };
//     case "LOGGEDOUT":
//       return {
//         ...state,
//         user: null,
//         check: false,
//       };
//     default:
//       return state;
//   }
// }

// export const store = createStore(
//   loginReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// console.log(store.getState());
