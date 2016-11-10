import React, { Component, PropTypes } from 'react'
import './header.less'

export default class Header extends Component {
    render () {
        return (
            <div>
                <h1>header.....</h1>
                <input type="text" ref="input" />
                <button onClick={e => this.hadleClick(e)}>Add</button>
            </div>
        )
    }

    hadleClick (e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}

Header.propTypes = {
    onAddClick:PropTypes.func.isRequired
}
