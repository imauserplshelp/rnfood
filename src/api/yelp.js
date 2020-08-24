import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
  	Authorization: 
  	  'Bearer fPdZfxQJZkg-kQ6N7ZgPurr6Qha-cno-sy2NJWX6pkfwabnAGd24ErlXeXjFHnJFM6kWqnwTevRo_z7YRTqn7VLOPzRv1tpnseuTSUd4CyJ80CEJX6dn28LkUfXOXnYx'
  }
});