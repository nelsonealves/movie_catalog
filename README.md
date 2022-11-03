# Getting Started

1. Na raiz do projeto rode o seguinte comando:

~~~bash 
> docker-compose up 
~~~

2. Ao finalizar essa etapa, e já com o sistema operando, é necessário criar a tabela de filmes na base de dados dentro do Docker.

Para isso, rode na raiz do projeto o seguinte comando: 

~~~bash
> mysql -h 127.0.0.1 -P 3306 -u root -p db < ./dump/dump.sql``` (É necessário ter o mysql client instalado na máquina)
> Senha: password 
~~~

### Sistema pronto para acesso
Digite no seu navegador o seguinte caminho =>  http://localhost:4000


### API

> POST /films

Descrição: Chamada para captura dos filmes da base ghibli e inserção na base de dados local

Exemplo de uso:
~~~bash
curl -i -X POST http://localhost:4000/films
~~~

Em caso de sucesso, terá como retorno:
```Status: 200, Body: {"data": "ok"} ```

> GET /films

* Descrição: Chamada para captura dos filmes

* Exemplo de uso:

~~~bash
curl -i -X GET http://localhost:4000/films
~~~

Possíveis parametros
* ```page -> parâmetro de paginação dos filmes. Caso não informado, retornará todos os filmes. Ex: page: 0 // 1º página com até 10 filmes por pag```
* ```search -> Busca por titulo, produtor ou diretor semelhante. Caso não informado, retornará todos os filmes```

Em caso de sucesso, terá como retorno:
~~~json 
{
  "data": [
    {
      "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
      "title": "Princess Mononoke",
      "description": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
      "movie_banner": "https://image.tmdb.org/t/p/original/6pTqSq0zYIWCsucJys8q5L92kUY.jpg",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki"
  }],
    "count": 20 // total de filmes encontrados
}
~~~
