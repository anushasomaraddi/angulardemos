import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../postdata.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
@Input()
post:PostData;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
onPostDelete(){
  console.log('Deleting'+this.post.id);
  this.httpClient
  .delete(
    'https://myangularhttpproject-7869f-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+
         this.post.id +
         '.json'
  )
  .subscribe(()=>{
    console.log('post deleted')
  })
}
}
