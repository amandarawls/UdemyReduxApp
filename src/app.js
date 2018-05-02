import { createStore } from 'redux'

const reducer = (state = {}, action) => {
  switch ( action.type ) {
    case 'POST_BOOK':
      return action.payload
    default:
  }

  return state
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log('current state is: ', store.getState())
  console.log('current price: ', store.getState().price)
})

store.dispatch({
  type: 'POST_BOOK',
  payload: {
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33,
  },
})
