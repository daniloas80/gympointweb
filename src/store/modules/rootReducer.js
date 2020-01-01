import { combineReducers } from 'redux';

// import { toastsReducer as toasts } from 'react-toastify-redux';
import auth from './auth/reducer';
import user from './user/reducer';
import student from './students/reducer';
// import user from './user/reducer';

export default combineReducers({
    auth,
    user,
    student,
});
