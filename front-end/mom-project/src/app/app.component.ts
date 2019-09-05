import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MomProjectApiService } from './mom-project-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mom-project';

  schedules$: Observable<any[]>;

  constructor(private mpa: MomProjectApiService) {
    this.schedules$ = this.mpa.getEmployerSchedules();
  }

  ngOnInit() {
  }

}
