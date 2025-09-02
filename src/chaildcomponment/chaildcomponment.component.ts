import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chaildcomponment',
  imports: [FormsModule],
  templateUrl: './chaildcomponment.component.html',
  styleUrl: './chaildcomponment.component.css'
})
export class ChaildcomponmentComponent {
    @Input('alert-pop22') 
    public message :string = '';  
  
    @Input('alert-pop') 
    public message1 :string= ''  

    @Input('alert-pop3')
    public message2 :any= '';

    @Input()
    public PhoneNo: any;

    @Input('parentMsgFromParent')
    public parentMessage: string = '';

    //object in array with dumy data
    public parentMessageArray: string[] = ['Message 1', 'Message 2', 'Message 3'];

    @Output() public onsignUp = new EventEmitter<any>();
    @Output() public onSignup2 = new EventEmitter<any>();
    @Output() public phoneNo = new EventEmitter<any>();

    @Output() public parentMessage3 = new EventEmitter<any>();

    public data:any={};  

    public showAlert():void{  
        alert(this.message1);  
    }  

    public onSubmit():void{  
        this.onsignUp.emit({email: this.message, name: this.message1});  
    }

    public onSubmit2():void{  
        this.onSignup2.emit({email: this.message, name: this.message1});  
    }
    
    public onPhoneNoSubmit():void{  
        this.phoneNo.emit(this.PhoneNo);  
    }

    public sendParentMessage(): void {
        this.parentMessage3.emit(this.parentMessageArray);
    }

  }
