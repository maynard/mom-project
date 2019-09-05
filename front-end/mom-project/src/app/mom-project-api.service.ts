import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MomProjectApiService {

  constructor(private http: HttpClient) { }

  getEmployerSchedules(): Observable<any[]> {
    return this.http.get<any[]>('/api/employer_schedules', {});
  }
}
