import { Injectable } from '@angular/core';
import { Leader } from '../shared/Leader';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../shared/BASEURL';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  // Returns all leaders as an array
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(BASEURL + 'leadership');
  }

  // Returns one leader based on id input
  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(BASEURL + 'leadership' + id);
  }

  //  Returns the leader that is marked featured
  getFeaturedLeader():Observable<Leader> {
    return this.http.get<Leader>(BASEURL + 'leadership?featured=true')
      .pipe(map(leaders => leaders[0]));
  }
}
