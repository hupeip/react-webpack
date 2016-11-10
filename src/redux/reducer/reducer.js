import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../Types/type'
import { VisibilityFilters } from '../actions/action'
import { combineReducers } from 'redux'
const { SHOW_ALL } = VisibilityFilters

// // 定义reducer函数
function visibilityFilter (state = SHOW_ALL, action) {
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
            return [
                {
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        case COMPLETE_TODO :
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

const todoApp = combineReducers ({
    visibilityFilter,
    todos
})

export default todoApp
