import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IAlertMessage{
  prefix: string,
  message: string,
  color: string
}

@Injectable({
  providedIn: 'root'
})
export class NgNishaanAlertService {

  public alertMessage$ = new Subject<IAlertMessage>();
  
  public createSuccessAlert(message:string): void{
    this.alertMessage$.next(this.createAlertMessage('Success',message,'green'));
  }

  public createDangerAlert(message: string): void{
    this.alertMessage$.next(this.createAlertMessage('Danger',message,'red'));
  }

  public createWarningAlert(message: string): void{
    this.alertMessage$.next(this.createAlertMessage('Warning',message,'darkorange'));
  }

  public createInfoAlert(message: string): void{
    this.alertMessage$.next(this.createAlertMessage('Info',message,'dodgerblue'));
  }

  private createAlertMessage(prefix: string, message: string, color: string) : IAlertMessage{
    return{prefix,message,color};
  }
}