import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

   singlePostId:number ;
  constructor(postId : ActivatedRoute,private SinglePost:ServiceService) {
    // console.log(postId.snapshot.params['id'])
    this.singlePostId = postId.snapshot.params['id'];
    console.log(postId)
   }
   singlePostData:any;
   userData:any = '';
  ngOnInit(): void {
    this.SinglePost.getSinglePost(this.singlePostId).subscribe(
      (post)=>{
        // console.log(post)
        this.singlePostData = post;
        console.log(this.singlePostData)
    this.SinglePost.getUserData(this.singlePostData.userId).subscribe(
      (user)=>{
        this.userData = user;
        console.log(this.userData)
      }
    )
    
      },
      (err)=>{console.log(err)}
    )
   
  }
  
  
}
