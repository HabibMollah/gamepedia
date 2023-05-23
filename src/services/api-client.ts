import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1fa56a243f8a4dfbab2262c1a19b0109',
  },
});
