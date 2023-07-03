import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { configure } from '@testing-library/react';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;