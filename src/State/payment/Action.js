import { api } from "../../config/ApiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType"

export const createPayment =(orderId)=>async(dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})

    try {
        const {data} = await api.post(`/api/payments/${orderId}`,{})

        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
        }
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}
export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });

    try {
        if (!reqData.paymentId || !reqData.orderId) {
            throw new Error('Invalid request data');
        }

        console.log("Request Data: ", reqData);
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("Update Payment: ", data);

        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error: ", error);
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message || 'Unknown error' });
    }
};