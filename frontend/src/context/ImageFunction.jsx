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
                filterlocation: action.payload,
                images: action.payload,
            }
        case 'SET_LOCATION_IMAGE':
            return {
                ...state,
                isLoading: false,
                locationimage: action.payload,
            }
        case 'UPDATE_FILTER_VALUE':
            return {
                ...state,
                filter:
                {
                    filterlocation: action.payload
                }
            }
        case 'FILTER_JOBS':
            let { images, filter } = state;
            let filtered = [...images]

            filtered = filtered.filter((i) => {
                return i.location.toLowerCase().includes(filter.filterlocation.toLowerCase());
            })
            console.log(state.filterlocation)
            return {
                ...state,
                filterlocation: filtered
            }
    }
}