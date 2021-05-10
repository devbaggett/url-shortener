import * as api from "../api";

export const getUrls = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUrls();
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const createUrl = (url) => async (dispatch) => {
    try {
        const {data} = await api.createUrl(url);
        dispatch({type: "CREATE", payload: data});
    } catch (error) {
        console.log(error);
    }
};
