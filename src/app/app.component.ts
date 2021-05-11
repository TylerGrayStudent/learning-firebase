import { Component } from '@angular/core';
import { merge } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { APPLICATION_TITLE } from './shared/data/strings';
import { ToolboxService } from './shared/services/toolbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = APPLICATION_TITLE;
  public spinning$ = merge(this.toolbox.spinning$, this.toolbox.routing$).pipe(
    distinctUntilChanged()
  );

  constructor(private toolbox: ToolboxService) {
    this.spinning$.subscribe((val) => {
      console.log(val);
    });
  }
}
