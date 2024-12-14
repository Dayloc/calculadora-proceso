import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'calculadora';

  //variables
  public mostradorCentral: number = 0;
  public pantallaPrincipal: number[] = [];
  public mostradorPantalla: number = 0;
  public mostradorPantalla2: number = 0;
  public primerNumeroHechoSuma: boolean = false;
  primerNumeroHechoMultiplicacion: boolean = false;
  public cambioArray: boolean = false;
  public segundoNumero: number[] = [];
  public Result: number = 0;

  public agregarPantallaPincipal(num: number): void {
    if (this.primerNumeroHechoSuma === true) {
      this.segundoNumero.push(num);
      this.mostradorPantalla2 = parseInt(this.segundoNumero.join(''));
      console.log(this.mostradorPantalla2);
      this.mostradorCentral = this.mostradorPantalla2;
    } else if (this.primerNumeroHechoMultiplicacion === true) {
      this.segundoNumero.push(num);
      this.mostradorPantalla2 = parseInt(this.segundoNumero.join(''));
      console.log(this.mostradorPantalla2);
      this.mostradorCentral = this.mostradorPantalla2 * this.mostradorPantalla;
    } else {
      this.pantallaPrincipal.push(num);
      this.mostradorPantalla = parseInt(this.pantallaPrincipal.join(''));
      this.mostradorCentral = this.mostradorPantalla;
    }
  }

  public accionIgual(): void {
    if (this.primerNumeroHechoSuma === true) {
      this.Result = this.mostradorPantalla + this.mostradorPantalla2;
      this.mostradorCentral = this.Result;
      this.primerNumeroHechoSuma = false;
    } else if (this.primerNumeroHechoMultiplicacion === true) {
      this.mostradorCentral = this.mostradorPantalla2 * this.mostradorPantalla;
      console.log(this.mostradorCentral);
      console.log(this.mostradorPantalla);
      console.log(this.mostradorPantalla2);
      this.primerNumeroHechoMultiplicacion = false;
    }
  }
  public sumar(): void {
    this.primerNumeroHechoSuma = true;
  }
  public multiplicacion(): void {
    this.primerNumeroHechoMultiplicacion === true;
    console.log(this.mostradorCentral);
  }
}
