import { Injectable } from '@angular/core';
import { Promotion } from '../shared/Promotion';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../shared/BASEURL';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  // Returns all promotions as an array
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(BASEURL + 'promotions');
  }

  // Returns one promotion based on id input
  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(BASEURL + 'promotions' + id);
  }

  //  Returns the promotion that is marked featured
  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>(BASEURL + 'promotions?featured=true')
      .pipe(map(promotions => promotions[0]));
  }
}
