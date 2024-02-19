import { Routes } from '@angular/router';
import path from 'path';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';

export const routes: Routes = [
    // {  path:'',component:NuevoProductoComponent}
    {
        path: '',
        redirectTo: 'producto',
        pathMatch: 'full'

    },
    {
        path: '',
        component: ListadoProductoComponent,
        children: [{
            path: 'producto',
            loadChildren: () => import('./producto/producto.module').then((m) => m.ProductoModule)
        }
        ]
    },
     {  path:'nuevo-producto/:parametro',component:NuevoProductoComponent,
     children: [{
        path: 'producto',
        loadChildren: () => import('./producto/producto.module').then((m) => m.ProductoModule)
    }
    ]}

];
