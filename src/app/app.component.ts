import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor(){

    this.arrComida = [
      new Producto('Smoked Burger', 'https://deananddennys.com/contenidos/1612363956.jpg', 572),
      new Producto('Burger Motal Kombat', 'https://deananddennys.com/contenidos/1612363992.jpg', 645),
      new Producto('burger BOM', 'https://deananddennys.com/contenidos/1612364051.jpg', 645),
      new Producto('Dean Burger', 'https://deananddennys.com/contenidos/1612364363.jpg', 597),
      new Producto('Burger Sweet', 'https://deananddennys.com/contenidos/1612364079.jpg', 490),
    ]

    this.arrBebida = [
      new Producto('Coca Cola 2.25', 'https://www.pasosonline.com.ar/wp-content/uploads/2018/08/coca-cola-225L-almacen-gaseosas-casa-segal-mendoza-600x600-1.jpg', 240),
      new Producto('Cerveza Andes (lata)', 'https://http2.mlstatic.com/D_NQ_NP_2X_846666-MLA44170658833_112020-F.webp', 170),
      new Producto('Agua Evian (botella chica)', 'https://jumboargentina.vteximg.com.br/arquivos/ids/620121-512-512/Agua-Mineral-Sin-Gas-Evian-500-Ml-2-239174.jpg?v=637466226088570000', 290)

    ]

    this.productosSeleccionados = [];

  }

  //Capturamos el objeto mediante el $event y lo pusheamos adentro del array de Seleccionados. Le sumamos 1 a la cantidad para la comanda
  onProductoSeleccionado($event){
  //$event al fin al cabo es un producto
     const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);

     if(productoEncontrado){
          productoEncontrado.cantidad++;
     } else {
       $event.cantidad = 1;
      this.productosSeleccionados.push($event);
     }
  }

}
