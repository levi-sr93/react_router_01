import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const Contact = () => {
    return (
        <div>
            <Modal />
            <div>
                <div className="ui raised very padded text container segment"
                style={{ marginTop: '80px' }}>
                <Link to="/alex" className='ui header'>Alex</Link>
                <p>lorem ipsum dolor sit ammet, consectur adispisciting</p>
            </div>
            <div className="ui raised very padded text container segment"
                style={{ marginTop: '80px' }}>
                <Link to="/willma" className='ui header'>Willma </Link>
                <p>lorem ipsum dolor sit ammet, consectur adispisciting</p>
            </div>
            </div>
        </div>

    )
}

export default Contact;