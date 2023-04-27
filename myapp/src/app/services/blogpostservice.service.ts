import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from '../blogposts/postdata.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogpostserviceService {

  constructor(private httpClient:HttpClient) { }
// private backendAppUrl:string='https://myangularhttpproject-7869f-default-rtdb.asia-southeast1.firebasedatabase.app/'
// private deleteUrl:string=this.bac
  createPosts(title:string,content:string){
    const mypostdata:PostData={title:title,content:content};
    return this.httpClient.post('https://myangularhttpproject-7869f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',mypostdata);
  }

fetchPosts(){
  return this.httpClient.get('https://myangularhttpproject-7869f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')

  .pipe(
    map((responseData)=>{
      const postsArray=[];
      for(const key in responseData){
        postsArray.push({...responseData[key],id:key});
     }
     return postsArray;
   })
    
  );
}
deletePosts(){
  return this.httpClient.delete('https://myangularhttpproject-7869f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')

}
deletePost(postid:string){
  return this.httpClient.delete(
    'https://myangularhttpproject-7869f-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+postid+'.json');

  
}
}
