import axios from "axios";

const KEY = 'AIzaSyA4oZ6FGBefPtM7ETzl1Pa65A3KthiQSq0'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});