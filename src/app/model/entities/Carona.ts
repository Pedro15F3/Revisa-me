export class Carona{
    private _nome : string;
    private _numero : number;
    private _endereco : string;
    private _data! : number;
    private _ponto : string;


    constructor(endereco : string, nome : string, numero:number, data : number, ponto: string){
        this._endereco = endereco;
        this._numero = numero;
        this._nome = nome;
        this._data = data;
        this._ponto = ponto;

    }

    public get data(): number {
        return this._data;
    }
    public set data(value: number){
        this._data = value;
    }
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number){
        this._numero = value;
    }

    public get endereco() : string {
        return this._endereco;
    }

    public set endereco(endereco: string){
        this._endereco = endereco;
    }

    public get nome() : string {
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get ponto() : string {
        return this._ponto;
    }

    public set ponto(ponto: string){
        this._ponto = ponto;
    }

}