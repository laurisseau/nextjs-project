'use client';
import { createContext, useReducer, useEffect } from 'react';

export const Context = createContext();

const initialState = {
  userInfo: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_SIGNOUT':
      return {
        ...state,
        userInfo: null,
      };
  }
}

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  // Load user info from localStorage on the client-side
  useEffect(() => {
    const userInfoFromLocalStorage = localStorage.getItem('userInfo');

    if (userInfoFromLocalStorage) {
      dispatch({
        type: 'USER_SIGNIN',
        payload: JSON.parse(userInfoFromLocalStorage),
      });
    }
  }, []);

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
