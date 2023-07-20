import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  durationInSeconds=2;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action ,{duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',});
  }

  openMessageBar(message: string) {
    this._snackBar.open(message ,'',{duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
   });

  }
}
