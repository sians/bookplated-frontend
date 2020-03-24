import { combineReducers } from "redux";

import books from "./books";
import authors  from "./authors";

export default combineReducers({
    books,
    authors
});