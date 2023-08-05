
export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(state,action)
      return { ...state, isLoggedIn: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, user: null };
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } };
    
    case 'GET_USER':
      console.log(action.payload.user)
      return state;
      default:
      return state;
  }
};