import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFoodList } from "./components/my-food-list/my-food-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFoodList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto');
}
