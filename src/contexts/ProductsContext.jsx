import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { API_PRODUCTS } from "../helpers/contstants";
import { calcSubPrice, calcTotalPrice } from "../helpers/CalcPrice";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  productDetails: null,
  productsEarrings: [],
  productsRings: [],
  productsBracelets: [],
  productsNecklace: [],
  productsCountInCart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  cartData: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "GET_CART":
      return { ...state, cartData: action.payload };
    case "GET_PRODUCTS_EARRINGS":
      return { ...state, productsEarrings: action.payload };
    case "GET_PRODUCTS_RIGNS":
      return { ...state, productsRings: action.payload };
    case "GET_PRODUCTS_BRACELET":
      return { ...state, productsBracelets: action.payload };
    case "GET_PRODUCTS_NECKLACE":
      return { ...state, productsNecklace: action.payload };
    case "ADD_AND_DELETE_PRODUCT_PRODUCT_IN_CART":
      return { ...state, productsCountInCart: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCountInCart: action.payload };
    case "GET_PRODUCTS_BY_SEARCH":
      return { ...state, products: action.payload };
    case "GET_CART":
      return { ...state, cartData: action.payload };
    case "FILTER_PRODUCTS":
      return { ...state, products: action.payload };
    case "CLEAR_CART_AFTER_PAY":
      return { ...state, productsCountInCart: 0 };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    let { data } = await axios(`${API_PRODUCTS}/products`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  }
  async function getProductsDetails(id) {
    const { data } = await axios(`${API_PRODUCTS}/products/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  }
  function addAndDeleteProductInCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };
    newProduct.subPrice = calcSubPrice(newProduct);

    let newCart = cart.products.filter(
      (item) => item.product.id === product.id
    );
    if (newCart.length > 0) {
      cart.products = cart.products.filter(
        (item) => item.product.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    });
  }
  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newCart = cart.products.filter((item) => item.product.id === id);
    return newCart.length > 0 ? true : false;
  }
  function deleteProductInCart({ product }) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(product.id);
    let newCart = cart.products.filter(
      (item) => item.product.id !== product.id
    );

    // console.log(newCart);
    cart.products = newCart;
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    });
    getCart();
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  function changeCountProducts(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = state.products;
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, [state.products]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = posts.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function getProductsBracelet() {
    const { data } = await axios(
      `${API_PRODUCTS}/products?jewerly-category=bracelet`
    );
    console.log(data);
    dispatch({
      type: "GET_PRODUCTS_BRACELET",
      payload: data,
    });
  }
  async function getProductsEarrings() {
    const { data } = await axios(
      `${API_PRODUCTS}/products?jewerly-category=earrings`
    );
    console.log(data);
    dispatch({
      type: "GET_PRODUCTS_EARRINGS",
      payload: data,
    });
  }
  async function getProductsRigns() {
    const { data } = await axios(
      `${API_PRODUCTS}/products?jewerly-category=rigns`
    );
    dispatch({
      type: "GET_PRODUCTS_RIGNS",
      payload: data,
    });
  }
  async function getProductsNecklace() {
    const { data } = await axios(
      `${API_PRODUCTS}/products?jewerly-category=necklace`
    );
    dispatch({
      type: "GET_PRODUCTS_NECKLACE",
      payload: data,
    });
  }
  const searchingProducts = async (value) => {
    const { data } = await axios(`${API_PRODUCTS}/products?q=${value}`);
    // console.log(data);
    dispatch({
      type: "GET_PRODUCTS_BY_SEARCH",
      payload: data,
    });
  };
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  async function filterProducts(value) {
    let params = "";
    params = value ? `?jewerly-category=${value}` : "";
    const { data } = await axios(`${API_PRODUCTS}/products${params}`);
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: data,
    });
    console.log(data);
  }

  function makeOrder() {
    let cart = JSON.parse(localStorage.getItem("cart"));
  }
  function clearCartAfterPay() {
    dispatch({
      type: "CLEAR_CART_AFTER_PAY",
    });
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        cartData: state.cartData,
        productsCountInCart: state.productsCountInCart,
        totalPosts: totalPosts,
        currentPosts: currentPosts,
        loading: loading,
        postsPerPage: postsPerPage,
        productsEarrings: state.productsEarrings,
        productsRings: state.productsRings,
        productsBracelets: state.productsBracelets,
        productsNecklace: state.productsNecklace,
        searchProducts: state.searchProducts,
        cartData: state.cartData,
        getProducts,
        getProductsDetails,
        addAndDeleteProductInCart,
        deleteProductInCart,
        checkProductInCart,
        getCart,
        changeCountProducts,
        paginate,
        getProductsEarrings,
        getProductsRigns,
        getProductsBracelet,
        getProductsNecklace,
        searchingProducts,
        filterProducts,
        clearCartAfterPay,
        makeOrder,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
