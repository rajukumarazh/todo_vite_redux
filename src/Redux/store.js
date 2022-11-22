import { createStoreHook } from 'react-redux';
import reducer from './Reducer/reducer';
export const store = createStoreHook(reducer);
