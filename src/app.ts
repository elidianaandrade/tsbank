import { Client } from './models/Client'
import { CheckingAccount } from './models/CheckingAccount'
import { StudentAccount } from './models/StudentAccount'
import { CompanyAccount } from './models/CompanyAccount'

const eliClient: Client = new Client ('Eli', 'Andrade', 1)
const eliAccount: CheckingAccount = new CheckingAccount(1, eliClient)
eliAccount.deposit(100)
eliAccount.withdraw(50)
eliAccount.extract()

const lucasClient: Client = new Client ('Lucas', 'Carvalho', 1)
const lucasAccount: StudentAccount = new StudentAccount(2, lucasClient)        
lucasAccount.deposit(100)
lucasAccount.extract()

const dioClient: Client = new Client ('Digital', 'Innovation One', 3)
const dioAccount: CompanyAccount = new CompanyAccount(3, dioClient)
dioAccount.getLoan(100000)
dioAccount.extract()