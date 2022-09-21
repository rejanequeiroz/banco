export {contaPoupanca, clienteA}

import{banco} from "./banco";


class contaPoupanca extends banco {
    mostrarSaldo(){}

    contaPoupanca: number
     ativo: boolean

    mostrarSaldoContaPoupanca(){
       console.log(`quao o seu saldo ? ${clienteA.contaPoupanca}, vc esta ativo ? ${clienteA.ativo}`)
    }
}
var clienteA = new contaPoupanca() 
clienteA.contaPoupanca = 200
clienteA.ativo = true

clienteA.mostrarSaldoContaPoupanca()