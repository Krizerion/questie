import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'qs-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'questie';
  test = 'test3';

  doSomethingss(): void {
    console.log('test');
  }

  ngOnInit(): void {
    console.log(5);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
