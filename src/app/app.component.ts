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


  Reto2(palabraA:string, palabraB:string):any{
    if (palabraA !== palabraB && palabraA===palabraA.toLowerCase() && palabraB===palabraB.toLowerCase()){
      var palabraAs=palabraA.split("");
      var palabraBs=palabraB.split("");
      var palabraAsor=palabraAs.sort();
      var palabraBsor=palabraBs.sort()
      
      if (palabraAsor.join("")===palabraBsor.join("")){
        return true;

      }else{
        return false;
      }
      
      
    }else{
      return "Las dos palabras son iguales o una tiene  mayúscula. Verificar!";
    }
  }
 
}
