import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace';
   Reto(input: number): string {
    if (input < 0) {  
      
      return "Input must be non-negative";
    } else if (input % 3 === 0 && input % 5 === 0) {
      return "fizzBuzz";
    } else if (input % 3 === 0) {
      return "Fizz";
    } else if (input % 5 === 0) {
      return "Buzz";
    } else {
      return "not a fizzbuzz number";  
    }
  }
}
