import React from 'react';

import {connect} from 'react-redux'

class Card extends React.Component {

  // state = {user: ''}
  
  // componentDidMount() {
  //     let user = this.props.match.params.user
  //     this.setState({user})
  // }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id)

    //redirecting user to contact page after deleting
    this.props.history.push('/contact')
  }

  render(){
    // const {user} = this.state
    console.log(this.props)
    const {title, body} = this.props.card;
    return (
      <div className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}>
            <h3 className='ui header'>{title}</h3>
            <p>{body}</p>
            <button className='ui primary right floated button' onClick={this.onButtonClick}>
              Delete
            </button>
      </div>
    )
  }
}

//Pass the redux state to Component props
const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.user; //this is a route param
    return {
      card: state.cards.find(card => card.title === title)
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {dispatch({type: 'DELETE_CARD', id: id})} //we have access to the dispatch because of connect function
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);