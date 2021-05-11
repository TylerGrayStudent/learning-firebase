import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

  constructor(private router: Router) {}

  showSpinner(): void {
    this._spinning.next(true);
  }

  async showSpinnerOnPromise(p: Promise<any>): Promise<any> {
    this._spinning.next(true);
    return new Promise((resolve, reject) => {
      p.then((res) => resolve(res))
        .catch((e) => reject(e))
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
