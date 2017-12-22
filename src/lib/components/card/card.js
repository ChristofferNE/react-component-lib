import React, { Component } from 'react'
import './card.scss'

class Card extends Component {

    render() {
        let { children, ...props } = this.props
        return (
            <div>
                <div className="my-card-container" {...props} >
                    {children}
                </div>
            </div>
        )
    }
}

export default Card