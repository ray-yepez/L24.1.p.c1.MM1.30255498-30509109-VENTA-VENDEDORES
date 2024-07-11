export default class Empresa{
    constructor() {
        this.menores = 0;
        this.mayores = 0 ;
        this.ventas = 0;
    }

    procesarVend(Vendedor){
        this.ventas += Vendedor.venta;
        if (Vendedor.venta <= 100) ++this.menores;
        else ++this.mayores;
    }

    
}