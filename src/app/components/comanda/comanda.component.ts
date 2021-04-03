import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/producto.model'

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() arrProductos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  calculaTotal(){
    let resultado = 0;
    for(let producto of this.arrProductos){
      resultado += (producto.precio * producto.cantidad);
    }
    return resultado;
  }


  onClickBorrar(indice){
    if(this.arrProductos[indice].cantidad === 1){
      this.arrProductos.splice(indice, 1);
    }
    else if (this.arrProductos[indice].cantidad < 0){
      this.arrProductos[indice].hayStock = false;

    } else {
      this.arrProductos[indice].cantidad --;
    }
  }

}
