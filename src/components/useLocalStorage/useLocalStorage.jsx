import React, { useEffect, useState } from "react";

const useLocalStorage = (itemName, defaultValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(defaultValue);

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
        setItem(parsedItem);
        setLoading(false);
      }, 3000);
    } catch (err) {
      setError(err);
    }
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (err) {
      setError(err);
    }
  };

  return { item, saveItem, loading, error };
};

export { useLocalStorage };
