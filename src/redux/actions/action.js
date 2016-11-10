import * as types from '../Types/type'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo (text) {
    return { type: types.ADD_TODO, text }
}

export function completeTodo (index) {
    return { type: types.COMPLETE_TODO, index }
}

export function setVisibilityFilter (filter) {
    return { type: types.SET_VISIBILITY_FILTER, filter }
}
