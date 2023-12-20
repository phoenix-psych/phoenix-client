import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';
import { NotifyService } from 'src/app/shared/notify.service';
import { ArtComponent } from './tests/art/art.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CtoppComponent } from './tests/ctopp/ctopp.component';
import { GoartComponent } from './tests/goart/goart.component';
import { TomalComponent } from './tests/tomal/tomal.component';
import { TowreComponent } from './tests/towre/towre.component';
import { WratComponent } from './tests/wrat/wrat.component';
import { WritComponent } from './tests/writ/writ.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name : string = '';
  dob : Date = new Date();

  form !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService,
    public dialogRef: MatDialogRef<TestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto
    ) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      status: [''],
    });
  }

  onClear() {
    
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.form.valid) {
      // if (!this.form.get('id')?.value)
      //   this.service.insertUser(this.service.form.value);
      // else
      //   this.service.updateUser(this.service.form.value);
      this.form.reset();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.form.reset();
    this.dialogRef.close();
  }

  // Parent component
  @ViewChild('artRef') artRef!: ArtComponent;
  @ViewChild('ctoppRef') ctoppRef!: CtoppComponent;
  @ViewChild('goartRef') goartRef!: GoartComponent;
  @ViewChild('tomalRef') tomalRef!: TomalComponent;
  @ViewChild('towreRef') towreRef!: TowreComponent;
  @ViewChild('wratRef') wratRef!: WratComponent;
  @ViewChild('writRef') writRef!: WritComponent;

  onTabSelectionChanged(event: MatTabChangeEvent ){

    switch (event.index) {
      case 0:
        this.artRef.onLoad();
        break;
      case 1:
        this.ctoppRef.onLoad();
        break;
      case 2:
        this.goartRef.onLoad();
        break;
      case 3:
        this.tomalRef.onLoad();
        break;
      case 4:
        this.towreRef.onLoad();
        break;
      case 5:
        this.wratRef.onLoad();
        break;
      case 6:
        this.writRef.onLoad();
        break;
      default:
        break;
    }
  }
}
