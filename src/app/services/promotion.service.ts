import { Injectable } from '@angular/core';
import { Promotion } from '../shared/Promotion';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../shared/BASEURL';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient, 
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  // Returns all promotions as an array
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(BASEURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  // Returns one promotion based on id input
  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(BASEURL + 'promotions' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  //  Returns the promotion that is marked featured
  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>(BASEURL + 'promotions?featured=true')
      .pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
