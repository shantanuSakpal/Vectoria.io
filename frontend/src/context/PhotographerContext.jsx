import axios from 'axios';
import { useEffect, useState, createContext, useContext, useReducer } from 'react';
import reducer from './PhotographerFunctions'

const PhotographerContext = createContext();
const url = 'http://localhost:3001/user/';
export function PhotographerProvider({ children }) {
    const initialstate = {
        isLoading: false,
        isError: false,
        puser: [],
        filterpuser: [],
        locationpuser: [],
        filter: {
            // location: "",
            tags : "",
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate)

    const getPuser = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getLocationPuser = async (url) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const res = await axios.get(url);
            const locationimage = await res.data;
            dispatch({ type: "SET_LOCATION_PUSER", payload: locationimage })
        }
        catch (error) {
            dispatch({ tpye: 'API_ERROR' })
        }
    }

    const updateFilterValue = (event) => {
        let value = event.target.value;
        return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: value })
    }

    useEffect(()=>{
        dispatch({type: 'FILTER_PUSER'})
    },[state.filter])

    useEffect(() => {
        getPuser(url)
    }, [])
    return (
        <PhotographerContext.Provider value={{ ...state, dispatch, getLocationPuser, updateFilterValue }}>
            {children}
        </PhotographerContext.Provider>
    )
}
function UsePhotographer() {
    return useContext(PhotographerContext)
}
export default UsePhotographer;

