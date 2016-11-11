import React, { Component, PropTypes } from 'react'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters  } from '../../redux/actions/action'
import { connect } from 'react-redux'
import NavBar from '../navBar'
import Header from '../Header'
import Footer from '../Footer'

class Home extends Component {

    render () {
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <Header
                    onAddClick = {text =>
                        dispatch(addTodo(text))}
                 />
                <NavBar
                    todos = {visibleTodos}
                    onTodoClick = {index =>
                        dispatch(competeTodo(index))}
                />
                <Footer
                    filter = {visibilityFilter}
                    onFilterChange = {nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))}
                />
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

Home.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

function select (state,ower) {ower.name
    return {
        visibleTodos: state.todos,//selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(Home)
