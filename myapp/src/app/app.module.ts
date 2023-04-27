import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { ClicklogsComponent } from './clicklogs/clicklogs.component';
import { BasicHighlightDirective } from './CustomDirectives/BasicHighlightDirective';
import { BetterHighlightDirective } from './CustomDirectives/better-highlight.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesdemoComponent } from './observablesdemo/observablesdemo.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ShortenPipe } from './commonpipes/shorten-pipe';
import { FilterPipe } from './commonpipes/filter.pipe';
import { ReversefilterPipe } from './commonpipes/reversefilter.pipe';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostComponent } from './blogposts/blogpost/blogpost.component';
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'warningalert',component:WarningAlertComponent},
  {path:'server',component:ServerComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'observables',component:ObservablesdemoComponent},
  {path:'tforms',component:TformsComponent},
  {path:'rforms',component:RformsComponent},
  {path:'pipesdemo',component:PipesdemoComponent},
  {path:'blogposts',component:BlogpostsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningAlertComponent,
    ServerComponent,
    SuccessAlertComponent,
    NamesComponent,
    ClicklogsComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountsComponent,
    AddproductComponent,
    ProductComponent,
    LifecycledemoComponent,
    NewaccountComponent,
    AccountComponent,
    HomeComponent,
    ObservablesdemoComponent,
    TformsComponent,
    RformsComponent,
    PipesdemoComponent,
    ShortenPipe,
    FilterPipe,
    ReversefilterPipe,
    BlogpostsComponent,
    BlogpostComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
