import { describe, test, expect } from "vitest";
import SalvaFilme from "./salva-filme.use-case";
import BancoEmMemoria from '../infra/banco/banco-em-memoria'


describe("testando usecase de salvar filme",()=>{
    test("deve salvar um filme",async()=>{
        const filme = {
            id: 1,
            titulo: "test",
            descricao: "test",
            foto: "test"
        }

        const bancoEmMemoria = new BancoEmMemoria()
        const salvaFilme = new SalvaFilme(bancoEmMemoria)
        const {id, titulo, descricao, foto} = filme
        const resultado = await salvaFilme.execute({id, titulo, descricao, foto})
        expect(resultado).toEqual(filme)
    })
})