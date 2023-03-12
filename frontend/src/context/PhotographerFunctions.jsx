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
                puser: action.payload,
                filterpuser: action.payload,
            }
        case 'UPDATE_FILTER_VALUE':
            return {
                ...state,
                filter:
                {
                    filterpuser: action.payload
                }
            }
        case 'FILTER_PUSER': 
            let { puser, filter } = state;
            let filtered = [...puser]

            filtered = filtered.filter((i) => {
                return i.tags.toLowerCase().includes(filter.filterpuser.toLowerCase());
            })
            console.log(state.filterlocation)
            return {
                ...state,
                filterpuser: filtered
            }
        // case 'FILTER_PUSER':
        //     let { puser } = state;
        //     let filtered1 = [...puser]

        //     const { location, tags } = state.filter;
        //     console.log(tags)
        //     if (location) {
        //         filtered1 = filtered1.filter((i) => {
        //             return i.name.toLowerCase().includes(location);
        //         })
        //     }
        //     if (tags) {
        //         if (tags.toLowerCase() != 'all')
        //             filtered1 = filtered1.filter((i) => {
        //                 return i.tags === tags;
        //             })
        //     }
        //     return {
        //         ...state,
        //         filterpuser: filtered1
        //     }
    }
}