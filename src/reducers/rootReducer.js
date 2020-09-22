const initialState = {
  cards: [ 
    {id: 1, title: 'Alex', body: 'lorem ipsum dolor sit ammet, consectur adispisciting'},
    {id: 2, title: 'Willma', body: 'lorem ipsum dolor sit ammet, consectur adispisciting'},
    {id: 3, title: 'John', body: 'lorem ipsum dolor sit ammet, consectur adispisciting'}
  
  ]
}
const rootReducer = (state= initialState, action) => {
  console.log(action)
  return state;
}

export default rootReducer;