export class Itens {
    private _id! : string;
    private _modelo : string;
    private _chassi! : string;
    private _placa : string;
    private _ano! : number;
    private _fabrica! : number;
    private _gasolina! : number;
    private _uid!: string;

    constructor(modelo: string,chassi: string ,placa: string, ano: number, fabrica: number, gasolina: number, ){
        this._modelo = modelo;
        this._chassi = chassi;
        this._placa = placa;
        this._ano = ano;
        this._fabrica = fabrica;
        this._gasolina = gasolina;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get modelo() : string {
        return this._modelo;
    }

    public set modelo(modelo: string){
        this._modelo = modelo;
    }

    public get chassi() : string {
        return this._chassi;
    }

    public set chassi(chassi: string){
        this._chassi = chassi;
    }

    public get placa() : string {
        return this._placa;
    }

    public set placa(placa: string){
        this._placa = placa;
    }


    public get ano() : number {
        return this._ano;
    }

    public set ano(ano: number){
        this._ano = ano;
    }

    public get fabrica() : number {
        return this._fabrica;
    }

    public set fabrica(fabrica: number){
        this._fabrica = fabrica;
    }
    

    public get gasolina() : number {
        return this._gasolina;
    }

    public set gasolina(value: number){
        this._gasolina = value;
    }

    
    public get uid(): string {
        return this._uid;
    }
    public set uid(value: string) {
        this._uid = value;
    }
}