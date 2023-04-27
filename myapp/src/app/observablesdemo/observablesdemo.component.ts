import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-observablesdemo',
  templateUrl: './observablesdemo.component.html',
  styleUrls: ['./observablesdemo.component.css']
})
export class ObservablesdemoComponent implements OnInit ,OnDestroy{

  constructor() { }
 
private intervalSubscription:Subscription;
private customObservableSubscription:Subscription;
  ngOnInit(): void {
    // this.intervalSubscription=interval(1000).subscribe((count)=>{
    //   console.log(count);
    // }
    
    
    // );
      
    const customObservable=Observable.create((observer)=>{
      let count=0;
      setInterval(()=>{
        observer.next( count);
        count++;
         if(count==6){
          observer.complete();

         }
        if(count>10){
          observer.error(new Error('count is reater than 10'));
        }
      }, 1000);
    });
    this.customObservableSubscription=customObservable
   

    .pipe(
      filter((data:number)=>{
           return data%2==0;
        
      }),
      map((data:number)=>{
        return 'B'+data;
      })
    )
    
    
    .subscribe(
      (data)=>{
      console.log(data);
    },
    (error)=>{

      alert(error.message);
    },
    ()=>{
      console.log('completed');
    }
    );
  }
  ngOnDestroy(): void {
   // this.intervalSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
   }

}
