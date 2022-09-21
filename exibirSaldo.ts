import {banco} from "./banco"

import {contaCorrente} from "./contaCorrente"
import {contaPoupanca} from "./contaPoupanca"


export class exibirSaldo extends contaCorrente {

    mostrarSaldoTotal(){}
}
export class exibirSaldoo extends contaPoupanca{
    mostrarSaldoTotal(){}
}
 var somaTotal = new contaCorrente();
 
 somaTotal.mostrarSaldo();