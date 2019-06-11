import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject} from 'rxjs';
import { IAlertMessage, NgNishaanAlertService } from './ng-nishaan-alert.service';

@Component({
  selector: 'ng-alert',
  template: `
    <div class="alert" *ngIf="(alertMessage$ | async) as alertMessage" [ngStyle]="{background: alertMessage.color}">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
    </div>
  `,
  styleUrls: ['./ng-alert.component.css']
})
export class NgNishaanAlertComponent implements OnInit {

  // <div class="alert" *ngIf="(alertMessage$ | async) as alertMessage" [ngStyle]="{background: alertMessage.color}">
  alertMessage$: Observable<IAlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgNishaanAlertService) { }

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void{
    this.close$.next();
  }

}
