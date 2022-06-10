import { Component, OnInit , AfterContentInit , AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit,AfterViewInit {

  @ViewChildren('imgTag') imgTag:any;


  constructor(private posts:ServiceService) {   }

  
   arrayOfPosts:any;



   arrayOfimages = ["/assets/Images/1.jpg","/assets/Images/2.jpg","/assets/Images/3.jpg","/assets/Images/4.jpg","/assets/Images/5.jpg",
   "/assets/Images/6.jpg","/assets/Images/7.jpg","/assets/Images/8.jpg","assets/Images/9.jpg","/assets/Images/10.jpg",
   "/assets/Images/11.jpg","/assets/Images/12.jpg","/assets/Images/13.jpg","/assets/Images/14.jpg","/assets/Images/15.jpg",
   "/assets/Images/16.jpg","/assets/Images/17.jpg","/assets/Images/18.jpg","/assets/Images/19.jpg","/assets/Images/20.jpg"];

   imgCount = 0;
   totalLength:any;
   postPage:number = 1;




   ngOnInit(): void {
    this.posts.getPosts().subscribe(
      (AllPosts)=>{
        
        this.arrayOfPosts = AllPosts;
        
   


        this.totalLength = this.arrayOfPosts.length;

       
      },
      (err)=>{console.log(err)}

    )
  }
  imgSrc:any ;
  ngAfterViewInit() {

    // this.imgTag.changes.subscribe((a:any) => a.forEach((b:any, i:any) => console.log(b.nativeElement.attributes[1].nodeValue)));
    this.imgTag.changes.subscribe(
      (a:any) => a.forEach((b:any, i:any) =>
        {
          b.nativeElement.attributes[1].nodeValue = this.getRandomImg()
        }
        )
     );

  }

  
 getRandomImg(){
   let n = Math.floor(Math.random() * this.arrayOfimages.length);
  //  console.log('hey')
   
   return this.arrayOfimages[n]
  // console.log(this.imgTag);
 }


 sendElm(data:any){
    return "asdasd"
 }

}


