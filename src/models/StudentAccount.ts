import { Account } from './Account'
import { Client } from './Client'

export class StudentAccount extends Account {

    constructor(accountNumber: number,  client: Client){
        super(accountNumber, client)
    }

    deposit = (value: number): void => {
        super.deposit(value)
        super.deposit(10)
        console.log(`Bônus de ${10} recebido com sucesso!`)
    }

}