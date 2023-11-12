import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, lastValueFrom, map, throwError } from 'rxjs';
import { ControlBase } from '../models/control-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  async getMeta(): Promise<ControlBase[]> {
    return lastValueFrom(
      this.http
        .get(this.baseApiUrl + 'questionjson')
        .pipe(
          map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order))
        )
    );
  }

  toFormGroup(controls: ControlBase[], data: any) {
    const group: any = {};

    controls.forEach((control) => {
      if (control.controlType !== 'label') {
        group[control.key] = control.required
          ? new FormControl(data[control.key] || '', Validators.required)
          : new FormControl(data[control.key] || '');
      }
    });
    return new FormGroup(group);
  }

  async getData() {
    return lastValueFrom(this.http.get(this.baseApiUrl + 'questionanswer'));
  }
}
