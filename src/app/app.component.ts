import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TwowayBindingComponent } from './components/twoway-binding/twoway-binding.component';
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";
import { AddComponent } from "./components/add/add.component";
import { CalcComponent } from "./components/mini-calculator/mini-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TwowayBindingComponent, ReactiveFormComponent, AddComponent, CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'two-way-binding-mit-eingabefeld';
}
