import { clienteA } from "./contaPoupanca"
import { clienteP } from "./contaCorrente"

export class banco{
    nomeCliente: string
    saldo: number
    ativo: boolean

    mostrarSaldo(){
        console.log(`
        o nome do cliente: ${cliente.nomeCliente}, qual o seu saldo? ${clienteP.saldoCorrente + clienteA.contaPoupanca},vc esta ativo? ${cliente.ativo}`)
    }
}
var cliente = new banco();
cliente.nomeCliente = "rejane queiroz";
cliente.saldo = 500;
cliente.ativo = true;

cliente.mostrarSaldo()


