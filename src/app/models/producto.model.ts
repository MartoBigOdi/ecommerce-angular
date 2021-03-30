export class Producto{

    nombre: string;
    imgUrl: string;
    precio: number;
    hayStock: boolean;

    constructor(pNombre: string, pImgUrl: string, pPrecio: number ){
        this.nombre = pNombre;
        this.imgUrl = pImgUrl;
        this.precio = pPrecio;
        this.hayStock = true;

    }

}