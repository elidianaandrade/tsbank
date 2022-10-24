import { Account } from './Account'
import { Client } from './Client'

export class CheckingAccount extends Account {

    constructor(accountNumber: number,  client: Client){
        super(accountNumber, client)
    }

}