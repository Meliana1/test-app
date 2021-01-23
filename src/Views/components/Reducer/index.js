import temp_Reducer from './Temp_Reducer';
import {combineReducers} from 'redux'


const allReducers = combineReducers({
    temp: temp_Reducer
})

export default allReducers