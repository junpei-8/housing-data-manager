import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'housing-data-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousingDataInputComponent {
  urlForm = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.urlForm.hasError('required')) {
      return 'URLを入力してください。';
    }

    return '';
  }

  scrapeHousingData(event: SubmitEvent) {
    event.preventDefault();
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }
}
