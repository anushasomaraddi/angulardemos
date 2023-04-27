import { Component } from "@angular/core";
@Component({
selector:'success-alert',
template:'<p>This is Success</p><button class="btn btn-success">Completed</button>',
styles: [
    `
    p{
        padding:10px;
         background-color:orangered;
         border:2px solid red;
    }
    `,
],
})

export class SuccessAlertComponent{

}