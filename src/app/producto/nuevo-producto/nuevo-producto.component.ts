import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.scss'
})
export class NuevoProductoComponent implements OnInit {
  mostrarInput = false;
  Form: any;
  scodigo! : String;
  productos:any[]=[];
  situtlo! : String;
  constructor(private productoservice :ProductoService,private router:Router,private route: ActivatedRoute) {
  
  }
  ngOnInit(): void {
    const scodigo = this.route.snapshot.paramMap.get('parametro');

   this.Inicializar();
   if(scodigo!.trim().length >= 1){
    this.productoservice.obtenerID(scodigo!).subscribe(data =>{
      this.productos =data;
      this.situtlo="Modificar Producto";
      this.Form = new FormGroup({
        idv: new FormControl(data.codigo),
        codigo: new FormControl(data.codigo, [Validators.required, Validators.minLength(1)]),
        name: new FormControl(data.name, [Validators.required, Validators.minLength(5)]),
        })
    
    })
   }else{
    this.situtlo="Ingresar Producto";
   }

  }
  get name() { return this.Form.get('name'); }
  get codigo() { return this.Form.get('codigo'); }
  get idv() { return this.Form.get('idv'); }

  Inicializar():void{
    this.Form = new FormGroup({
      idv: new FormControl(''),
      codigo: new FormControl('', [Validators.required, Validators.minLength(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      })
  }
  onResetForm(): void {
    this.Form.reset();
  }
  GrabarForm(): void {
    if (this.Form.valid) {
      const form: any  = this.Form.value;
      console.log(form);
      const codigoi = String = this.Form.value.idv;
     if(codigoi != ""){
       this.productoservice.Modificar(codigoi,form).subscribe(resultado => {
         this.Inicializar();
         this.router.navigate(['/']);  
        })
 
     }else{
       this.productoservice.Guardar(form).subscribe(resultado => {
        this.Inicializar();
        this.router.navigate(['']); 
       })
     }
    }
  }
}
