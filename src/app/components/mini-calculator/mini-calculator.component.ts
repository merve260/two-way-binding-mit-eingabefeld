import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mini-calculator.component.html',
  styleUrls: ['./mini-calculator.component.css']
})
export class CalcComponent {
  form: FormGroup;
  result: number | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      zahl1: [''],
      zahl2: [''],
      operation: ['+']
    });
  }

  berechne() {
    const { zahl1, zahl2, operation } = this.form.value;
    const num1 = parseFloat(zahl1);
    const num2 = parseFloat(zahl2);

    if (operation === '+') {
      this.result = num1 + num2;
    } else if (operation === '-') {
      this.result = num1 - num2;
    }
  }

  reset() {
    this.form.reset({ zahl1: '', zahl2: '', operation: '+' });
    this.result = null;
  }
}
