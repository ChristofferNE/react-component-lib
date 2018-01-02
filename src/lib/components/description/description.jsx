import t from 'prop-types'
import React, { Component } from 'react'
import './description.scss'

class Description extends Component {

    static propTypes = {
        text: t.string,
    }

    static defaultProps = {
        text: "header",
    }

    render() {
        let { children, className, ...props } = this.props
        return (
            <p className={className ? 'description ' + className : 'description'} {...props}>{children}</p>
        )
    }
}

export default Description