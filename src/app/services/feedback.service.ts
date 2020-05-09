import { Injectable } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from '../shared/BASEURL';
import { Feedback } from '../shared/Feedback';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


    submitFeedback(feedback: Feedback){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.post<Feedback>(BASEURL + 'feedback', feedback, httpOptions)
      .pipe(
        catchError(this.processHTTPMsgService.handleError)
      );
    }

}
