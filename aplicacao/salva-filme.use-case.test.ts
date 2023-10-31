import { describe, test, expect } from "vitest";
import SalvaFilme from './salva-filme.use-case'

describe("testando usecase de salvar filme",()=>{
    test("deve salvar um filme",()=>{
        const filme = {
            id: 1,
            titulo: "test",
            descricao: "test",
            foto: "test"
        }

        const salvaFilme = new SalvaFilme()
        const resultado = salvaFilme.execute(filme)
        expect(resultado).toEqual(filme)
    })
})