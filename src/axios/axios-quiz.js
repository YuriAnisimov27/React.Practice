import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-be60e.firebaseio.com/'
})