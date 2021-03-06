import React, { createContext, useReducer, useContext, useMemo } from 'react';
import axios from 'axios';
import { LOAD_PRODUCTS, LOAD_MORE_PRODUCTS } from './shopTypes';
import reducer from './shopReducer';
import baseURL from '../../utils/baseURL';

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const initState = {
    products: [],
    isLoading: true,
    hasLoadMore: false,
    currentPage: 1
  };

  const [state, dispatch] = useReducer(reducer, initState);

  async function fetchProducts(page) {
    const payload = { params: { page, limit: 12 } };
    const { data } = await axios.get(`${baseURL}/api/products`, payload);
    return data;
  }

  async function loadProducts() {
    const data = await fetchProducts(state.currentPage);
    dispatch({ type: LOAD_PRODUCTS, payload: data });
  }

  async function loadMore() {
    const data = await fetchProducts(state.currentPage + 1);
    dispatch({ type: LOAD_MORE_PRODUCTS, payload: data });
  }

  const value = useMemo(
    () => ({
      ...state,
      loadProducts,
      loadMore
    }),
    [state, loadMore, loadProducts]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => useContext(ShopContext);

export { ShopProvider, useShop };
