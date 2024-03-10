import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it(`Debería de dar como respuesta "FizzBuzz", es multiplo de 3 y 5`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Reto(15)).toEqual("FizzBuzz");
  });
  it(`Debería de dar como respuesta "Fizz", es multiplo de 3`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Reto(48)).toEqual("Fizz");
  });
  it(`Debería de dar como respuesta "Buzz", es multiplo de 5`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Reto(5)).toEqual("Buzz");
  });
  it(`Debería de dar como respuesta "El número introducido debe ser mayor que 0", al introducir un numero mayor a 100`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Reto(102)).toEqual("El número introducido debe ser mayor que 0 y menor que 100");
  });
  it(`Debería de dar como respuesta "El número introducido debe ser mayor que 0", al introducir un numero menor a 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Reto(-1)).toEqual("El número introducido debe ser mayor que 0 y menor que 100");
  });

  it(`Debería de dar como respuesta "No es un número que sea multiplo de 3 y 5"`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Reto(1)).toEqual("No es un número que sea multiplo de 3 y 5");
  });

  it(`Debería de dar como respuesta "El valor introducido no es un número", al introducir un string o otro`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Reto("uno")).toEqual("El valor introducido no es un número");
  });




});

 