import React, { Component, PropTypes } from 'react'
import Todo from './todo'
export default class NavBar extends Component{
    render() {
        return (
          <ul>
            {this.props.todos.map((todo, index) =>
              <Todo {...todo}
                    key={index}
                    onClick={() => this.props.onTodoClick(index)} />
            )}
          </ul>
        )
  }
}

NavBar.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}
