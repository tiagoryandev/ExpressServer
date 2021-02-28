/*
  Autor: TiaGoiNsaNy#9903
  Twitter: @TiaGoiNsaNy

  Obrigado por ler meu Código!
*/

// Faz a importação da livraria express no projeto
import express from "express";

// A constante app puxa a livraria do express e abre a função dentro da constante
const app = express();

// O parâmetro get significa que o cliente irá acessar o servidor atravez do link apóz o dominio:porta
// Exemplo: https://localhost:8081/ => Retorna a resposta no site "OK!"
// Request => É uma requisição feita pelo cliente no servidor, onde pode vir carregada com parãmetros e etc.
// Response => é a resposta do servidor ao receber o Request do cliente, como enviar uma mensagem dizendo "OK!"
// Para definir outro diretorio no servidor, basta mudar o parâmetro inicial da função GET, como de "/" para "/api",
// assim, o usuário terá que acesso o link https://localhost/api para receber uma resposta.
// Status => São enviados no Response do servidor para indicar ao cliente o estado do servidor, como 200 que significa que está
// tudo Ok! Outro status famoso é o 404 que significa um erro no servidor.
app.get("/", (request, response) => {
    response.status(200).send("OK!"); // Envia uma resposta com os Status OK com uma mensagem de "OK!"
}); // Link para acessar => https://localhost:8081/

// Envio de respostas em JSON para o cliente é simples! Você pode usar a prioridade json da resposta e definir todos os objetos,
// veja o exemplo abaixo de como enviar uma resposta em json.
app.get("/api/json", (request, response) => {
    response.status(200).json({
        message: "OK!",
        username: "TiaGoiNsaNy"
    }); // Envia uma resposta com os status OK com um JSON para o cliente
}); // Link para acessar => https://localhost:8081/api/json

// Envio de respostas em JSON com parâmetros dentro do Request feito pelo cliente, como buscar um parâmetro no link como um ID,
// Veja como pode buscar dentro do Request os dados de parâmetros. Use a prioridade params do Request para buscar os dados.
// E vamos fazer uma verificação para verificar qual é o ID que foi colocado na Request usando Switch-Case;
app.get("/api/param/:id", (request, response) => {
    let id = request.params.id; // Pega o parâmetro do :id da Request do cliente

    switch (id) {
        case "2":
            response.status(200).json({
                message: "O ID que você colocou é válido!",
                id: id
            }); // Envia a resposta para o cliente em json com os status OK.
            break; // Caso o ID for igual a 2, ele cai no primeiro caso e envia a Response com a confimação do ID válido.
        default:
            response.status(404).send("O id não é válido!"); // Envia a resposta para o cliente em string com os status 404.
            break; // Se o ID não for igual a 2, ele cai no Default e envia a Response com o erro do ID inválido.
    }; // Realiza a verificação dos case do ID enviado no Request
}); // Link para acessar => https://localhost:8081/api/param/:id => id exemplo 123131

// A função listen significa que fará o app iniciar o servidor na porta da sua escolha no caso 8081 é uma porta padrão de usar,
// e possui 2 parâmetros, a PORT que é aporta que será aberta no servidor e o CALLBACK que é a resposta que o servidor irá enviar
// ao ser iniciado, no caso foi definido uma arrow function que mandará no console sobre a inicialização do servidor.
app.listen(8081, () => {
    console.log("[LOGIN] - Servidor Iniciado com Sucesso na Porta 8081."); // Envia no console sobre a inicialização do servidor
}); // Realiza a inicialização do servidor atravéz da porta 8081
