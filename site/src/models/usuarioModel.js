var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, lingPreferida, imgPerfil ) VALUES ('${nome}', '${email}', '${senha}', 'Escolher linguagem', '../assets/imgPerfil/user.png');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarPerfil(nome, email, senha, linguagem, idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarPerfil():", nome, email, senha, linguagem, idUsuario);

    var instrucao = `UPDATE USUARIO SET nome = '${nome}', email = '${email}', senha = '${senha}', lingPreferida = '${linguagem}' where idUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function qtdPostsJs(idUsuario){

    var instrucao = `select count(idPost) as qtdPosts from post where linguagem = 'javascript' and fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdPostsJava(idUsuario){

    var instrucao = `select count(idPost) as qtdPosts from post where linguagem = 'java' and fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdPostsPy(idUsuario){

    var instrucao = `select count(idPost) as qtdPosts from post where linguagem = 'python' and fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdPostsCmais(idUsuario){

    var instrucao = `select count(idPost) as qtdPosts from post where linguagem = 'c++' and fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    qtdPostsJs,
    qtdPostsJava,
    qtdPostsPy,
    qtdPostsCmais,
    entrar,
    cadastrar,
    listar,
    atualizarPerfil
};