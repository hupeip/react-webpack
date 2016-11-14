import React, { Component, PropTypes } from 'react'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters  } from '../../redux/actions/action'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import NavBar from '../navBar'
import Header from '../Header'
import Footer from '../Footer'

class Home extends Component {
    //初始化，在extends Component中getInitailState不能使用
    constructor (props) {
        //初始化时，传递props给React.Component
        super(props)
        //this.handleClick不会自动绑定到react实例上，需要.bind(this)才能绑定
        //可以在构造器中绑定，也可以在<button onClick={this.handleClick.bind(this)}>click</button>中绑定
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            aaa: 'hello'
        }
    }
    componentWillMount () {
        //在初始化渲染之前执行
        console.log('初始化渲染之前执行')
    }
    componentDidMount () {
        //在初始化渲染之后调用一次
    }
    shouldComponentUpdate (nextProps, nextState) {
        alert(nextState.aaa)
        return true
    }
    handleClick () {
        this.setState({
            aaa: 'hello world'
        })
        // alert(this.state.aaa)
    }
    handleFocus () {
        console.log((findDOMNode(this.refs.myText)).value)
    }
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
                <button onClick={this.handleClick}>click</button>
                <p>{this.state.aaa}</p>
                {this.props.name}
                <input type="text" ref="myText"/>
                <button onClick={this.handleFocus.bind(this)}>focus on text</button>
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
    ]).isRequired,
    name: PropTypes.string
}

//默认属性
Home.defaultProps = {
    name: 'hello world!!!'
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

function select (state,ower) {
    return {
        visibleTodos: state.todos,//selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(Home)
