import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PaisesService } from "../../services/paises.service";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: "Cesar",
    apellido: "Lachira",
    correo: "lachiracesar@gmail.com",
    pais: "PER",
    genero: "M"
  };

  data: any[] = [];

  constructor(private paises: PaisesService) {}

  ngOnInit(): void {
    this.paises.getPaises().subscribe((data: any) => {
      console.log(data);

      this.data = data;
      this.data.unshift({
        nombre: "Seleccione Pais",
        codigo: ""
      });
    });
  }

  guardar(forma: NgForm) {
    console.log("Submit Disparado");
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    }
    console.log(forma);
    console.log(forma.value);
  }
}
