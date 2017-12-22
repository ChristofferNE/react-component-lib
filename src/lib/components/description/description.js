import t from 'prop-types'
import React, { Component } from 'react'
import './description.scss'

class MyDescriptionText extends Component {

    static propTypes = {
        text: t.string,
    }

    static defaultProps = {
        text: "header",
    }

    render() {
        let { text, className, ...props } = this.props
        return (
            <p className={className ? 'description ' + className : 'description'} {...props}>{text}</p>
        )
    }
}

export default MyDescriptionText