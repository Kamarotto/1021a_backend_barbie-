import {describe, it, expect} from 'vitest'
import axios from 'axios'

describe('Primeiro teste da aplicação', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })
})

describe('Cadastro Filme', () => {
    it('Deve cadastrar um filme com sucesso', async () => {
        const filme = {
            id: 1,
            titulo: 'Vingadores',
            descricao: 'Filme dos Vingadores',
            foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
        }
        const resposta = 
            await axios.post('http://localhost:3000/filmes', filme)
        
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    }),

    it('listar um filme cadastrado', async () => {
        const filme = {
            id: 1,
            titulo: 'Vingadores',
            descricao: 'Filme dos Vingadores',
            foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
        }
        const resposta = await axios.post('http://localhost:3000/filmes', filme)
    
        // 1) buscar o filme cadastrado
        const listaDeFilmes = await axios.get('http://localhost:3000/filmes/1');
        const filmeCadastrado = listaDeFilmes.data
    
        // 2) Verificar se o filme devolvido é igual ao que cadastramos
        expect(filmeCadastrado[0]).toEqual(filme);
    
        // 3) Verificar se o tamanho da lista é igual a 1
        expect(listaDeFilmes.data.length).toBe(1);
    }),

    it('deve listar outro filme cadastrado', async () => {
        const filme = {
            id: 2,
            titulo: 'Barbie',
            descricao: 'Filme da Barbie',
            foto: 'https://www.anneclairebaby.com/cdn/shop/products/Wholesale-of-Barbie-Fashionista-Alopecia-BBE-TOY59-1.jpg?v=1599044443&width=1445',
        }
        const resposta = await axios.post('http://localhost:3000/filmes', filme)
    
        // 1) buscar o filme cadastrado
        const listaDeFilmes = await axios.get('http://localhost:3000/filmes/2');
        const filmeCadastrado = listaDeFilmes.data
    
        // 2) Verificar se o filme devolvido é igual ao que cadastramos
        expect(filmeCadastrado[0]).toEqual(filme);
    
        // 3) Verificar se o tamanho da lista é igual a 1
        expect(listaDeFilmes.data.length).toBe(1);
    })
})