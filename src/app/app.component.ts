import { Component, OnInit, Pipe, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChaildcomponmentComponent } from "../chaildcomponment/chaildcomponment.component";
import { CommonModule, NgFor } from '@angular/common';
import { HighlightDirective } from "../Directives/highlight.directive";
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule, 
    ChaildcomponmentComponent, 
    NgFor , 
    HighlightDirective,
    CommonModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //get data from child components
  public val: string = "This is alert popup message";  
  title = 'NADRA-GOVERNMENT.PK';
  message2: string = "This is the third alert popup message";
  parentmessage: string = "This is a message from the parent component";
  public parentMessageArray: string[] = [];
  a: number = 10;
  b: number = 20;
  amount: number = 82000;

  c: number = this.a + this.b;

  d:number = 0;

  constructor() {
    this.title = 'NADRA-GOVERNMENT.PK';
  }

  ngOnInit(): void {
    this.onParentMessageReceived(this.parentMessageArray);
  }

  //set timeout for https request 
  

  

  //calculate function
  calculateSum() {
    this.d = this.a + this.b;
  }

  clearTheInput() {
    this.a = 0;
    this.b = 0;
    this.d = 0;
    this.c = 0;
  }

  public onSignup(data:any):void{  
    let strMessage:string ="Thanks for Signup " + data.name + ". ";  
    strMessage += "Email id " + data.email + " has been registered successfully.";  
    alert(strMessage);  
  }  

  public onSignup2(data:any):void{  
    let strMessage:string ="Thanks for Signup " + data.name + ". ";  
    strMessage += "Email id " + data.email + " has been registered successfully.";  
    alert(strMessage);  
  }

  public onPhoneNoSubmit(phoneNo: any): void {
    alert("Phone No: " + phoneNo);
  }

  public onParentMessageReceived(messages: string[]): void {
    debugger;
    console.log("Messages from child:", messages);
    this.parentMessageArray.push(...messages);
  }

}
