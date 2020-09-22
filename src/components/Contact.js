import React from 'react'
import { Link } from 'react-router-dom'
// import Modal from './Modal'
import { connect } from 'react-redux'

const Contact = ({ cards }) => {
    // console.log(props.cards);
    return (
        <div>
            {/* <Modal /> */}
            {
                cards.map(card => {
                    return (
                        <div className="ui raised very padded text container segment"
                            style={{ marginTop: '80px' }}
                            key={card.id}
                        >
                            <Link to={`/${card.title}`} className='ui header'>{card.title}</Link>
                            <p>{card.body}</p>
                        </div>
                    )
                })
            }
            {/* <div>
            </div> */}
        </div>

    )
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Contact); //conecting contact to redux store with high order component
