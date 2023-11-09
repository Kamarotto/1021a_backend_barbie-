import FilmeRepositorioInterface from "./filme-repositorio-interface"

export default  class Listarilme{
    constructor(private bancoInterface:FilmeRepositorioInterface){}
    public async execute():Promise<Filme[]>{
        const resultado = await this.bancoInterface.listar()
        return resultado
    }
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}