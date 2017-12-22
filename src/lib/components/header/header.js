import t from 'prop-types'
import React, { Component } from 'react'
import './header.scss'

class MyHeader extends Component {

    static propTypes = {
        text: t.string,
    }

    static defaultProps = {
        text: "header",
    }

    render() {
        let { text, className, ...props } = this.props
        return (
            <div className={className ? 'header ' + className : 'header'} {...props} >{text}</div>
        )
    }
}

export default MyHeader