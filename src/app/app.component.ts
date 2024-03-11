import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace';
  Reto(input: any): string {
    if (typeof input !== 'number') {
      return "El valor introducido no es un número";
    } else if (input <= 0 || input >= 100) {
      return "El número introducido debe ser mayor que 0 y menor que 100";
    } else if (input % 3 === 0 && input % 5 === 0) {
      return "FizzBuzz";
    } else if (input % 3 === 0) {
      return "Fizz";
    } else if (input % 5 === 0) {
      return "Buzz";
    } else {
      return "No es un número que sea multiplo de 3 y 5";  
    }
  }


  Reto2(palabraA:string, palabraB:string):boolean{
    if (palabraA !== palabraB && palabraA===palabraA.toLowerCase() && palabraB===palabraB.toLowerCase()){
      
      var palabraAs=palabraA.replace(/\s/g, '').split("");
      var palabraBs=palabraB.replace(/\s/g, '').split("");
      var palabraAsor=palabraAs.sort();
      var palabraBsor=palabraBs.sort()
      
      return palabraAsor.join("")===palabraBsor.join("")
      
      
    }else{
      return false;
    }
  }
  isPrimeFibonacciEven(n: number): any {
    function isPrime(num: number): any {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return "no es primo";
      }
      return "es primo";
    }
    function isFibonacci(num: number): any {
      const fibonacci: number[] = [0, 1];
      let i = 2;
      while (fibonacci[i - 1] < num) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        i += 1;
      }
      if (fibonacci.includes(num) === true){
        return "es fibonacci"
      } else{
        return "no es fiboncacci"
      }
    }
    function isEven(num: number): any {
      if (num % 2 === 0){
        return " y es par"
      } else{
        " y es impar"
      }
    }
    var evn= isEven(n);
    var fibo = isFibonacci(n);
    var prime= isPrime(n);
    return n + " "+ prime + ", "+ fibo + evn;
  }
  
 
}
