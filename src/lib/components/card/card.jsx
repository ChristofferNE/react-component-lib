import React, { Component } from 'react'
import './card.scss'

class Card extends Component {

    render() {
        let { children, href, image, noAccess, ...props } = this.props
        return (
            <a className={"card-container" + (noAccess ? ' no-access' : '')} href={href} onClick={noAccess ? e => e.preventDefault() : null} {...props} >
                <div className="card-content">
                    {image &&
                        <div className="NE-ratio">
                            <div className="card-image">
                                <img src={image.src} alt={image.alt} />
                            </div>
                        </div>
                    }
                    <div className="card-description">
                        {children}
                    </div>
                </div>
                {noAccess &&
                    <div className="no-access-overlay">
                        <i className='fa fa-lock' aria-hidden='true'></i>
                        <h3>Tjänsten ingår inte i ditt nuvarande abonnemng.</h3>
                        <p>Kontakta kundtjänst eller ansvarig på din skola för att öka ditt utbud</p>
                    </div>
                }
            </a>
        )
    }
}

export default Card