import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'qs-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
