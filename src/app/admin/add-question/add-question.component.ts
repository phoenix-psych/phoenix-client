import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotifyService } from 'src/app/shared/notify.service';
import { AdminService } from '../admin.service';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  selected : string = ''
  questionGroup : string = ''
  questionTypes: Array<any> = [{Name:"YesOrNo",Value:"1" },{Name:"Text",Value:"2"},{Name:"Option",Value:"3"},{Name:"MultiSelect",Value:"4"},{Name:"Document",Value:"5"}];
  constructor(private notificationService: NotifyService,
    private service: AdminService,
    public dialogRef: MatDialogRef<AddQuestionComponent>) 
    {
    }

    form: FormGroup = new FormGroup({
      id: new FormControl(null),
      questionType: new FormControl(null, Validators.required),
      question: new FormControl('', Validators.required),
      questionGroup: new FormControl("2"),
      option1: new FormControl(''),
      option2: new FormControl(''),
      option3: new FormControl(''),
      option4: new FormControl('')
    });
  
    initializeFormGroup() {
      // this.form.setValue({
      //   id: null,
      //   questionType: 1,
      //   questionText:''
      // });
    }
  
  ngOnInit() {
    // this.service.get()
    // .subscribe({
    //   next: (user) =>{
    //     console.log(user);
    //   },
    //   error: (msg)=> {
    //     console.log(msg);
    //   }
    // });
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSelectionchanged() {
    alert(this.selected);
  }
  onSubmit() {
    //alert("questionGroup : "+this.labelPosition);
    if (this.form.valid) {
      if (!this.form.get('id')?.value)
        this.service.insertQuestion(this.form.value)
        .subscribe({
          next:(res)=>{
            if(res)
            {
              alert("success : " + res);
            }
            else{
              alert("error : " + res);
            }
          },
          error:(err)=>{
            alert("Exception" + err?.message);
          }
        });
      else
        this.service.updateQuestion(this.form.value);
      
      this.form.reset();
      this.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }

}

