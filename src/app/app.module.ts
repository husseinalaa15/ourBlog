import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { PostsComponent } from './Components/posts/posts.component';
import { SinglePostComponent } from './Components/single-post/single-post.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutComponent } from './Components/about/about.component';
import { ServiceService } from './Services/service.service';

import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './Components/home/home.component';



const Routes:Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"posts",component:PostsComponent},
  {path:"posts/:id",component:SinglePostComponent},
  {path:"about",component:AboutComponent},
  {path:"**",component:NotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    SinglePostComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
