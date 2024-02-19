import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

const routes: Routes = [{
  path:'',
  data:{
    title:'Producto'
  },
  children:[{
    path:'',
    pathMatch:'full',
    redirectTo:'listado',
  },
  {
    path:'listado',
    component:ListadoProductoComponent,
    data:{
      title:'listado'
    },
    
  },
  {
    path:'nuevo/:parametro',
    component:NuevoProductoComponent,
    data:{
      title:'nuevo'
    },
  }]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ProductoRoutingModule { }
