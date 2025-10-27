import { configureStore } from '@reduxjs/toolkit';
import { bookingsApi } from './services/bookingsApi.js';
import { vehiclesApi } from './services/vehiclesApi';
import { locationsApi } from './services/locationsApi';
import { reviewsApi } from './services/reviewsApi';
import { usersApi } from './services/usersApi';

export const store = configureStore({
  reducer: {
    [bookingsApi.reducerPath]: bookingsApi.reducer,
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookingsApi.middleware)
      .concat(vehiclesApi.middleware)
      .concat(locationsApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(usersApi.middleware),
});
