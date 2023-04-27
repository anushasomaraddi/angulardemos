import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  templateUrl: './lifecycledemo.component.html',
  styleUrls: ['./lifecycledemo.component.css']
})
export class LifecycledemoComponent 
implements
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentChecked,
 AfterContentInit,
 AfterViewChecked,
 AfterViewInit,
 OnDestroy {

  constructor() { 
    console.log(" lifecyledemo constructor called")
  }
 ngOnChanges(changes:SimpleChanges):void{
  console.log(" lifecyledemo ngOnchanges called")
  
 }
 ngDoCheck(): void {
  console.log(" lifecyledemo ngDoCheck called")
 }
 ngAfterContentChecked(): void {
  console.log(" lifecyledemo ngAfterContentChecked called")
 }
 ngAfterContentInit(): void {
  console.log(" lifecyledemo ngAfterContentInit called")
 }
 ngAfterViewChecked(): void {
  console.log(" lifecyledemo ngAfterViewChecked called")
 }

  ngOnInit(): void {
    console.log(" lifecyledemo ngOnInit called")
  }
ngAfterViewInit(): void {
  console.log(" lifecyledemo ngAfterViewInit called")
}
ngOnDestroy(): void {
  console.log(" lifecyledemo ngOnDestroy called")
}
}
