import { Injectable } from '@angular/core';
import { Leader } from '../shared/Leader';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../shared/BASEURL';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, 
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  // Returns all leaders as an array
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(BASEURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  // Returns one leader based on id input
  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(BASEURL + 'leadership' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  //  Returns the leader that is marked featured
  getFeaturedLeader():Observable<Leader> {
    return this.http.get<Leader>(BASEURL + 'leadership?featured=true')
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
