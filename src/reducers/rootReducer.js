const initialState = {
  cards: [ 
    {id: 1, title: 'Alex', body: 'lorem ipsum dolor sit ammet, consectur adispisciting'},
    {id: 2, title: 'Willma', body: 'lorem ipsum dolor sit ammet, consectur adispisciting'},
    {id: 3, title: 'John', body: 'lorem ipsum dolor sit ammet, consectur adispisciting'}
  ],
  users:[]
}
const rootReducer = (state= initialState, action) => {
    switch(action.type) {
      case 'DELETE_CARD':
        let newCard = state.cards.filter(card => {
          return action.id !== card.id
        })
        return {
          ...state,
          cards: newCard
        }
      case 'FETCH_USERS':
        return {
          ...state,
          users: action.payload
        }

        default: 
          return state;
    }
  return state;
}

export default rootReducer;