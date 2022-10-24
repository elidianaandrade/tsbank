import { IAccount } from '../interfaces/IAccount'
import { Client } from './Client'

export abstract class Account implements IAccount {

    private readonly accountNumber: number
    private readonly client: Client
    private balance: number = 0
    private status: boolean = true
    
    constructor(accountNumber: number, client: Client) {
        this.accountNumber = accountNumber
        this.client = client
    }

    getClient = (): Client => {
        return this.client
    }
    
    deposit(value: number): void {
        if(this.validateStatus() && value > 0) {
            this.balance += value;
            console.log(`Depósito de ${value} realizado com sucesso!`)

        } else {
            console.log("Prezado cliente, não foi possível realizar o depósito. " +
            "Por favor, tente novamente ou entre em contato com a Agência ou com a Central de Atendimento TSBank.")
        }
    }
    
    withdraw = (value: number): void  => {
        if(this.validateStatus() && value > 0 && this.balance >= value) {
            this.balance -= value
            console.log(`Saque de ${value} realizado com sucesso!`)

        } else {
            console.log("Prezado cliente, não foi possível realizar o saque. " +
                        "Por favor, tente novamente ou entre em contato com a Agência ou com a Central de Atendimento TSBank.")
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus(): boolean {
        if(this.status) {
            return this.status
        }
        throw new Error('Conta Inválida')
    }

    getStatus = (): boolean => {
        return this.status
    }

    extract = (): void => {
        console.log("\nTSBANK -------------------------------------\n")
        console.log(`CONTA: ${this.accountNumber}`)
        console.log(`STATUS: ${this.status == true ? 'Conta Ativa' : 'Conta Inativa'}`)
        console.log(`CLIENTE: ${this.client.getName()} ${this.client.getLastName()}`)
        console.log("\n----- EXTRATO PARA SIMPLES CONFERÊNCIA -----")
        console.log("SALDO: ", this.balance)
        console.log("\n--------------------------------------------\n")
    }
}