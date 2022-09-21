export {contaCorrente, clienteP}

import {banco} from "./banco";

class contaCorrente extends banco{
    mostrarSaldo(){}

     saldoCorrente: number

      saldo: number
      ativo: boolean

    mostrarSaldoContacorrente(){
       console.log(`qual o seu salso ? ${clienteP.saldoCorrente}, vc esta ativo ? ${clienteP.ativo}`)
    }
 }
var clienteP = new contaCorrente()
clienteP.ativo = true
clienteP.saldoCorrente = 600

clienteP.mostrarSaldoContacorrente()
