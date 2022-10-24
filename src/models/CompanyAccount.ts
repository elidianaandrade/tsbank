import { Account } from './Account'
import { Client } from './Client'

export class CompanyAccount extends Account {

    constructor(accountNumber: number,  client: Client){
        super(accountNumber, client)
    }

    getLoan = (value: number): void => {
        if(super.getStatus() == true) {
            console.log(`Você pegou um empréstimo de ${value}`)
            this.deposit(value)
        }
    }
}