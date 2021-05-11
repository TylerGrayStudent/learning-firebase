import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { APPLICATION_TITLE } from '../../../../shared/data/strings';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  @Output() menuClicked = new EventEmitter();
  @Input() profilePic: string | undefined;
  public title = APPLICATION_TITLE;

  constructor() {}
}
