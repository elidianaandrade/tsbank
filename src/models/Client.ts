export class Client {

    private name:string;
    private lastName:string;
    private id: number;

    constructor(name: string, lastName: string, id: number){
        this.name = name
        this.lastName = lastName
        this.id = id
    }

    getName = (): string => {
        return this.name
    }

    setName = (name: string): void => {
        this.name = name
    }

    getLastName = (): string => {
        return this.lastName
    }

    setLastName = (lastName: string): void => {
        this.name = lastName
    }

    getCpf = (): number => {
        return this.id
    }

    setCpf = (id: number): void => {
        this.id = id
    }
}