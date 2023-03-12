import React from 'react'

export default function PhotographerFunctions(state, action) {
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
                puser: action.payload,
            }
        case 'UPDATE_FILTER_VALUE':
            return {
                ...state,
                filter:
                {
                    filterlocation: action.payload
                }
            }
        case 'FILTER_PUSER':
            let { puser, filter } = state;
            let filtered = [...puser]

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