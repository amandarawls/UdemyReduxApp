import { createStore } from 'redux'

const reducer = (state = { books: [] }, action) => {
  switch ( action.type ) {
    case 'POST_BOOK': {
      return { books: [ ...state.books, ...action.payload ] }
    }
    case 'DELETE_BOOK': {
      const currentBookToDelete = [ ...state.books ]
      const indexToDelete = currentBookToDelete.findIndex( book => book.id === action.payload.id )

      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1),
        ],
      }
    }
    case 'UPDATE_BOOK': {
      const currentBookToUpdate = [ ...state.books ]
      const indexToUpdate = currentBookToUpdate.findIndex( book => book.id === action.payload.id )

      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title,
      }

      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1),
        ],
      }
    }
    default:
  }

  return state
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log('current state is: ', store.getState())
  // console.log('current price: ', store.getState().books[1].price)
})

store.dispatch({
  type: 'POST_BOOK',
  payload: [
    {
      id: 1,
      title: 'this is the book title',
      description: 'this is the book description',
      price: 33.33,
    }, {
      id: 2,
      title: 'this is the second book title',
      description: 'this is the second book description',
      price: 50,
    },
  ],
})

store.dispatch({
  type: 'DELETE_BOOK',
  payload: {
    id: 1,
  },
})

store.dispatch({
  type: 'UPDATE_BOOK',
  payload: {
    id: 2,
    title: 'Learn React',
  },
})
