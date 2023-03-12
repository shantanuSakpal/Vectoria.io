import axios from 'axios';
import { useEffect, useState, createContext, useContext, useReducer } from 'react';
import reducer from './ImageFunction'

const ImageContext = createContext();
const url = 'http://localhost:3001/image/';
export function ImageProvider({children}) {
    const initialstate={
        isLoading: false,
        isError: false,
        images: [],
        filterlocation : [],
        locationimage : [],
        filter :{
            location: "",
         } 
    }
    const [ state, dispatch ]= useReducer(reducer, initialstate)
    
    const getImages = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getLocationImage = async (url) =>{
        dispatch({type: 'SET_LOADING'});
        try{
            const res = await axios.get(url);
            const locationimage = await res.data;
            dispatch({ type: "SET_LOCATION_IMAGE", payload: locationimage })
        }
        catch(error){
            dispatch({tpye: 'API_ERROR'})
        }
    }

    const updateFilterValue = (event) =>{
        let value = event.target.value;
        return dispatch({type: 'UPDATE_FILTER_VALUE' ,payload:value})
    }

    useEffect(()=>{
        dispatch({type: 'FILTER_IMAGES'})
    },[state.filter])
    
    useEffect(()=>{
        getImages(url)
    },[])
    return (
        <ImageContext.Provider value={{ ...state, dispatch, getLocationImage, updateFilterValue}}>
            {children}
        </ImageContext.Provider>
    )
}
function UseImages() {
    return useContext(ImageContext)
}

export default UseImages;
