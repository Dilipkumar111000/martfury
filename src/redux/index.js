
import { configureStore } from '@reduxjs/toolkit';
import homepageSlice from './slice/async1slice';
import Secondslice from './slice/asyncslice2';
import Thirdslice from './slice/asyncslice3';
import Fourthslice from './slice/asyncslice4';
import counterSlice from './slice/cartslice';


export const Store = configureStore({
    reducer: {
        Homepage: homepageSlice.reducer,
        Homepage2: Secondslice.reducer,
        Homepage3: Thirdslice.reducer,
        Homepage4: Fourthslice.reducer,
        cart: counterSlice.reducer,

    }
  })
  export default Store;