import { useEffect, useReducer, useState } from "react";

const useLocalStorage = (itemName, defaultValue) => {

  const initialState = {
    loading: true,
    error: false, 
    item: defaultValue,
    sinc: false
  }

  const actionTypes = {
    success: 'SUCCESS', 
    error: 'ERROR',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
  }

  const reducerObject = (state, payload) => ({
    [actionTypes.success]: {...state, item: payload, loading: false, sinc: true},
    [actionTypes.error]: {...state, error: payload },
    [actionTypes.save]: {...state, item: payload },
    [actionTypes.sincronize]: {...state, loading: true, sinc: false }
  })

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const { item, loading, error, sinc } = state 

  const onSuccess = (item) => {
    dispatch({type: actionTypes.success, payload: item})
  }

  const onError = (error) => {
    dispatch({type: actionTypes.error, payload: error})
  }

  const onSave = (item) => {
    dispatch({type: actionTypes.save, payload: item})
  }

  const onSinc = () => {
    dispatch({type: actionTypes.sincronize })
  }

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(defaultValue));
          parsedItem = defaultValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem)
      }, 3000);
    } catch (err) {
      onError(err)
    }
  }, [sinc]);

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      onSave(newItem)
    } catch (err) {
      onError(err)
    }
  };

  const sincronize = () => {
    onSinc()
  }

  return { item, saveItem, loading, error, sincronize };
};

export { useLocalStorage };
