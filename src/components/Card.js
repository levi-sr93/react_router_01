import React from 'react';
import {connect} from 'react-redux'

import {deleteCard, fetchUsers} from '../actions/cardActions'

class Card extends React.Component {

  // state = {user: ''}
  
  componentDidMount() {
      this.props.fetchUsers()
  }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id)

    //redirecting user to contact page after deleting
    this.props.history.push('/contact')
  }

  render(){
    // const {user} = this.state
    // console.log(this.props.users)

    const {users} = this.props;

    const {title, body} = this.props.card;
    return (
      users.map(user => {
        return (
          <div className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}
            key={user.id}
            >
            <h3 className='ui header'>{user.name}</h3>
            <p>{user.email}</p>
            <button className='ui primary right floated button' onClick={this.onButtonClick}>
              Delete
            </button>
        </div>
        )
      })
    )
  }
}

//Pass the redux state to Component props
const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.user; //this is a route param
    return {
      card: state.cards.find(card => card.title === title),
      users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {dispatch(deleteCard(id))}, //we have access to the dispatch because of connect function
    fetchUsers: () => {dispatch(fetchUsers())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);