class Filme {
    constructor(titulo, ano, genero, duracaoMin) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.duracaoMin = duracaoMin
    }

    exibirDetalhes() {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Gênero: ${this.genero}`)
        console.log(`Duração: ${this.duracaoMin} min`)
        if (this.assistido) {
            console.log(`Assistido? ${this.assistido}`)
        } else {
            console.log('Assistido? Não')
        }
        if (this.avaliacao) {
            console.log(`Avaliação: ${this.avaliacao}`)
        } else {
            console.log('Avaliação: Nenhuma avaliação encontrada')
        }
        console.log('')
    }

    assistirFilme() {
        this.assistido = 'Sim'
    }

    avaliarFilme(avaliacao) {
        this.assistirFilme() // Se avaliou, é por que assistiu né.
        this.avaliacao = avaliacao
    }

}

    const filme1 = new Filme('Diário de um Banana', 2010, 'Comédia', 92)
    const filme2 = new Filme('Super Mario Bros. O Filme', 2023, 'Aventura', 92)
    const filme3 = new Filme('Homem-Aranha: Através do Aranhaverso', 2023, 'Ação', 140)

    filme1.assistirFilme()
    filme1.avaliarFilme(4.5)
    filme1.exibirDetalhes()

    filme2.exibirDetalhes() // Demonstra o uso do if-else presente no construtor.
    filme3.exibirDetalhes()
