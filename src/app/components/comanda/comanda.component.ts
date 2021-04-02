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

}
