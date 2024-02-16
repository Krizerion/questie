import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'qs-root',
  standalone: true,
  imports: [RouterOutlet, RadioButtonModule, FormsModule, CalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  primeConfig = inject(PrimeNGConfig);
  translateService = inject(TranslateService);

  lang = signal('en');
  date: Date | undefined;

  constructor() {
    effect(() => this.translate(this.lang()));
  }

  ngOnInit(): void {
    this.translateService.addLangs(['en', 'bg']);
  }

  translate(lang: string): void {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe((res) => this.primeConfig.setTranslation(res));
  }
}
