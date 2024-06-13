import { api } from "../../config/ApiConfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (reData) => async (dispatch) => {
  dispatch({type:FIND_PRODUCTS_REQUEST });
  
  const {
    colors,
    sizes,
    maxPrice,
    minPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reData;

  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&size${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
  }
};

export const findProductsById =(reqData)=>async(dispatch)=>{

    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

    const{productId}=reqData;

    try {
        const {data}= await api.get(`/api/products/id/${productId}`);
        console.log("data",data)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}
