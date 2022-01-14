import { Injectable } from '@angular/core';
import { Candidate } from '../model/candidate';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  candidatesUrl: string;
 
  constructor(private http: HttpClient) { 
      this.candidatesUrl = 'http://localhost:8080/candidates';
  }

  public findAll(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.candidatesUrl);
  }

  public save(candidate: Candidate) {
    return this.http.post<Candidate>(this.candidatesUrl, candidate);
  }
}
