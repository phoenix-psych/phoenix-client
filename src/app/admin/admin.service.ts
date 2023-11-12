import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  questions: Question[] = [];

  
  getQuestions() : Observable<Question[]> {
    return this.http.get<Question[]>(this.baseApiUrl + 'question');
  }

  insertQuestion(question : Question): Observable<Question> {
    return this.http.post<Question>(this.baseApiUrl + 'question', question);
  }

  updateQuestion(Question : Question) : Observable<Question> {
    return this.http.put<Question>(this.baseApiUrl + 'question', Question);
  }

  deleteQuestion(id: string) {
    return this.http.delete<Question>(this.baseApiUrl + 'question/'+id);
  }

  populateForm(Question : any) {
    // // this.form.setValue(_.omit(Question,'departmentName'));
  }

}
