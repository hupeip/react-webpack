import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} from '../Types/type'
import { combineReducers } from 'redux'

//定义初始状态，初始状态是常量
const initState = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// 定义reducer函数
function VisibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos (state = [], action) {
    switch (action.type) {
        case ADD_TODO :
            return {
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            }
        case COMPLETE_TODO :
            return {
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            }
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp
