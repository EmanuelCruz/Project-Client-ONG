const initialState = { isAdmin: false };

// action es el valor devuelto por el action
//action.payload será el valor que quiero añadir, borrar, etc
export default (state = initialState, action) => {
  if (action.type === 'IS_ADMIN') {
    return {
      ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
      isAdmin: action.payload
    }
  }

  return state;
};

export const updateIsAdminStatus = state => state.isAdminReducer.isAdmin;