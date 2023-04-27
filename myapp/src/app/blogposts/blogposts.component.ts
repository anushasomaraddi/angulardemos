import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import{ PostData} from './postdata.model';
import { BlogpostserviceService } from '../services/blogpostservice.service';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {
dbPosts:PostData[]=[];
isFetching=false;
  errorMessage: any;
  constructor(private blogPostService:BlogpostserviceService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
//onCreatePost(postData:{title:string,content:string},form:NgForm){
  onCreatePost(postData:PostData,form:NgForm){
  //console.log(postData);
  this.blogPostService
  .createPosts(postData.title,postData.content)
  .subscribe((responseData)=>{
   // console.log(responseData);
   this.fetchPosts();
   form.reset();
  });
}
onFetchPosts(){
  this.fetchPosts();
}
fetchPosts(){
  // this.dbPosts.push({
  //   title:'dummypost',
  //   content:'dummy content',
  // });
  // this.httpClient
  // .get('https://myangularhttpproject-7869f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
  // .pipe(
  //   map((responseData)=>{
  //    // console.log(responseData);
  //     const postArray=[];
  //     for(const key in responseData){
  //        postArray.push({...responseData[key],id:key});
  //     }
  //     return postArray;
  //   })
  // )
  // .subscribe((posts)=>{
  //   //console.log(posts);
  //   this.dbPosts=posts;
  // });

  this.isFetching=true;
  this.blogPostService.fetchPosts().subscribe((posts)=>{
   this.dbPosts=posts;
   this.isFetching=false;

  },
  (error)=>{
    this.errorMessage=error.error.error;
    console.log(error);
         console.log(error.error.error);
  }
  );
}
onDeletePosts(){
  this.blogPostService
  .deletePosts()
  .subscribe(()=>{
      console.log('posts deleted');
      this.fetchPosts();
  
   
   } );
}
onSinglePostDeleted(deletedPost:PostData){
  console.log('From parent:single post deleted-'+deletedPost)
  this.fetchPosts();
}
}
