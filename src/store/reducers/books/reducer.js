import produce from 'immer'

import * as actionTypes from './actionTypes'


const initialState = {
  books: {
    "1": {
        id: "1",
        coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446876799l/6759.jpg",
        title: "Infinite Jest",
        read: null,
        owned: true,
        authors: ["1"],
        blurb: "A gargantuan, mind-altering comedy about the Pursuit of Happiness in America. Set in an addicts' halfway house and a tennis academy, and featuring the most endearingly screwed-up family to come along in recent fiction, Infinite Jest explores essential questions about what entertainment is and why it has come to so dominate our lives; about how our desire for entertainment affects our need to connect with other people; and about what the pleasures we choose say about who we are.",
        published: 1998,
        numPages: 1080,
        isbn: "978-0-316-92004-9",
        quotes: ["1", "2"]
    },
    "2": {
        id: "2",
        coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388854217l/6751.jpg",
        title: "Consider The Lobster",
        read: null,
        owned: true,
        authors: ["1"],
        blurb: "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person? David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of a vicious presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.",
        published: 2005,
        numPages: 343,
        isbn: "978-0-316-15611-0"
    },
    "3": {
        id: "3",
        coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344270056l/5986375.jpg",
        title: "This Is Water",
        read: new Date,
        owned: true,
        authors: ["1"],
        blurb: null,
        published: 2009,
        numPages: 138,
        isbn: "978-0-316-06822-2"        
    }             
  },
  booksLoading: false,
  booksError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.GET_BOOKS:
        draft.booksLoading = true
        break
      case actionTypes.GET_BOOKS_SUCCESS:
        draft.booksLoading = false
        draft.books = action.result.data.map((d) => d.id)
        break
      case actionTypes.GET_BOOKS_FAIL:
        draft.booksLoading = false
        draft.booksError = { status: action.error.status }
        break

    case actionTypes.GET_BOOK:
        draft.booksLoading = true
        break
        case actionTypes.GET_BOOK_SUCCESS:
        draft.booksLoading = false
        draft.books = action.result.data.map((d) => d.id)
        break
        case actionTypes.GET_BOOK_FAIL:
        draft.booksLoading = false
        draft.booksError = { status: action.error.status }
        break        

      default:
        break
    }
  })
}

export default reducer
