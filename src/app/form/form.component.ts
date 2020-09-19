import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { LatestnewsService } from '../latestnews.service';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError} from 'ngx-webcam';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  rigisterForm: FormGroup;
  submitted=false;
  msg:any;
  status:boolean=false;
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public errors: WebcamInitError[] = [];
  public webcamImage: WebcamImage = null;

  
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  name:any;
  email:any;
  type_of_visit:any;
  person_to_visit:any;
  date_of_entry:any;
  time_of_entry:any;
  time_of_exit:any;
  imageCaptureText: boolean;
  Capturedimage: string;




  constructor(private formBuilder:FormBuilder, private router:Router,private service:LatestnewsService) { }

  ngOnInit() {
    const date = new Date();
    const date1 = date.toLocaleDateString();
    console.log(date1)
    this.rigisterForm = this.formBuilder.group({
      name:['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}")])],
      type_of_visit:['', Validators.required],
      person_to_visit:['', Validators.required],
      date_of_entry:[date1],
      time_of_entry:['', Validators.required],
      time_of_exit:['', Validators.required]


    });
    
  }

  onSubmit(s){
    let myObj={
      'name':this.rigisterForm.controls['name'].value,
      'selfie_of_the_person': this.Capturedimage,
      'email': this.rigisterForm.controls['email'].value,
      'type_of_visit':this.rigisterForm.controls['type_of_visit'].value,
      'person_to_visit':this.rigisterForm.controls['person_to_visit'].value,
      'date_of_entry':this.rigisterForm.controls['date_of_entry'].value,
      'time_of_entry':this.rigisterForm.controls['time_of_entry'].value,
      'time_of_exit':this.rigisterForm.controls['time_of_exit'].value,
    };
    
    localStorage.setItem('userData',JSON.stringify(myObj))
    this.router.navigate(['next']);
    
    this.service.Visitor_details(s).subscribe(Response=>{
      this.router.navigate(['next'],{queryParams:myObj});
      console.log(Response);
    })
    this.submitted=true;
    if(this.rigisterForm.invalid){
      return;
    } else{
      this.msg = "You have been successfully registered";

      this.rigisterForm.reset();
      this.submitted = false;
       localStorage.setItem('userData',JSON.stringify(myObj))
       this.router.navigate(['next']);
    }
  }
 
  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    if(webcamImage) {
      this.imageCaptureText = true;
      this.Capturedimage = webcamImage.imageAsDataUrl;
      console.log(this.Capturedimage)
    }
  }

  handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
  



