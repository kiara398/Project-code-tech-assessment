import axios from 'axios';
const url = "/api/post";

export default class API {
 
 //to insert post in the database
 static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }
  //to update post in the database
  static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }

}