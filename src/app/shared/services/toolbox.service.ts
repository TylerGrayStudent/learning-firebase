import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  private _spinning = new BehaviorSubject<boolean>(false);
  public spinning$ = this._spinning.asObservable();
  public routing$ = this.router.events.pipe(
    map((event) => {
      return event instanceof NavigationStart;
    })
  );
  private _progress = new BehaviorSubject<number>(0);
  public progress$ = this._progress.asObservable();

  constructor(private router: Router, private toast: ToastrService) {}

  upload(observable: Observable<number>): void {
    observable.subscribe((x) => this._progress.next(x));
  }

  showSpinner(): void {
    this._spinning.next(true);
  }

  async showSpinnerOnPromise(p: Promise<any>): Promise<any> {
    this._spinning.next(true);
    return new Promise((resolve, reject) => {
      p.then((res) => {
        this.toast.success('Yay');
        resolve(res);
      })
        .catch((e) => {
          this.toast.error('Nay');
          reject(e);
        })
        .finally(() => this._spinning.next(false));
    });
  }

  async showSpinnerOnObservable(p: Promise<any>): Promise<any> {
    this._spinning.next(true);
    return new Promise((resolve, reject) => {
      p.then((res) => resolve(res))
        .catch((e) => reject(e))
        .finally(() => this._spinning.next(false));
    });
  }

  hideSpinner(): void {
    this._spinning.next(false);
  }
}
