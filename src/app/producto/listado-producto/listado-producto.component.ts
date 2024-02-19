import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.scss'
})
export class ListadoProductoComponent implements OnInit {

  productos:any[]=[];
  constructor(private productoservice :ProductoService,private router:Router){}
  
  ngOnInit(): void {
    this.obtenerProducto();
  }
  obtenerProducto(){
    this.productoservice.obtener().subscribe(data =>{
      this.productos =data;
    })
  }
  irCrear() {
    this.router.navigate(['nuevo-producto','']);   

  }
  irModificar(codigo : string =""){
    this.router.navigate(['nuevo-producto',codigo]);  
  }
  eliminar(codigo : string =""){
    this.productoservice.DeleteID(codigo).subscribe(resultado => {
      this.obtenerProducto();
    })
  }

}
