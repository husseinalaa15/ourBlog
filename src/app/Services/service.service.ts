import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = "https://jsonplaceholder.typicode.com/posts";
  userApi = "https://jsonplaceholder.typicode.com/users"

  constructor(private link:HttpClient) {
   

   }

  getPosts(){

   return this.link.get(this.api);
  }
  getSinglePost(postid:any){
    return this.link.get(this.api+"/"+postid);

  }
  getUserData(userid:any){
    return this.link.get(this.userApi+"/"+userid);

  }
}
