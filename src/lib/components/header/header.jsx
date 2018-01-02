import t from 'prop-types'
import React, { Component } from 'react'
import './header.scss'

class Header extends Component {

    static propTypes = {
        text: t.string,
    }

    static defaultProps = {
        text: "header",
    }

    render() {
        let { children, className, ...props } = this.props
        return (
            <div className={className ? 'header ' + className : 'header'} {...props} >{children}</div>
        )
    }
}

export default Header