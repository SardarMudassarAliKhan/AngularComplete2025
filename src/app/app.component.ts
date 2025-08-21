import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChaildcomponmentComponent } from "../chaildcomponment/chaildcomponment.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, ChaildcomponmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //get data from child components
  public val: string = "This is alert popup message";  
  title = 'NADRA-GOVERNMENT.PK';
  message2: string = "This is the third alert popup message";
  a: number = 10;
  b: number = 20;

  c: number = this.a + this.b;

  d:number = 0;

  constructor() {
    this.title = 'NADRA-GOVERNMENT.PK';
  }

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

}
