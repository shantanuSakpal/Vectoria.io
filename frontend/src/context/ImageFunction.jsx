import React from 'react'

export default function ImageFunctions(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'API_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        case 'SET_API_DATA':
            const fdata = action.payload.filter((i) => {
                return i.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                images: action.payload,
            }
        case 'SET_LOCATION_IMAGE':
            return {
                ...state,
                isLoading: false,
                locationimage: action.payload,
            }
    }
}