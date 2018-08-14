import { combineReducers } from 'redux';
import commentsRducer from 'reducers/comments';

export default combineReducers({
  comments: commentsRducer
});
