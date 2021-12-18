import { Conta } from './Conta.js';

export class ContaEmpresarial extends Conta{
    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, saldoInicial)      
      }  
      
      sacar(valor){
          let taxa = 0.5;       
          return this._sacar(valor, taxa);
      }
}
