import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({

    selector:'[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit{
    @HostBinding('style.backgroundColor')
    backgroundColor:string='';
    @Input()
    defaultColor:string='';
     @Input()
     highlightColor:string='';
    constructor(private elementRef:ElementRef,private renderer:Renderer2){}
       ngOnInit(): void {
        //    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
       } 
   @HostListener('mouseenter')
   mouseover(eventData:Event){
    //    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
    this.backgroundColor=this.highlightColor;
   }
    
    @HostListener('mouseleave')
    mouseleave(eventData:Event){
        //    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
        this.backgroundColor=this.defaultColor;
    }
}