// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var ling_preferida = sessionStorage.LINGUAGEM_FAVORITA;
    var imgPerfil = sessionStorage.IMAGEM_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var titulo_usuario = document.getElementById("titulo_usuario");
    var span_linguagem_preferida = document.getElementById("ling_preferida");
    var profile_nome = document.getElementById("profile_nome");
    var profile_email = document.getElementById("profile_email");
    var profile_lang = document.getElementById("profile_lang");
    var imagem_perfil = document.getElementById("profile_img");
    var mini_imagem_perfil = document.getElementById("mini_profile_img");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;
        titulo_usuario.innerHTML = nome;
        span_linguagem_preferida.innerHTML = ling_preferida;
        profile_nome.placeholder = nome;
        profile_lang.placeholder = ling_preferida;
        profile_email.placeholder = email;
        imagem_perfil.src = imgPerfil;
        mini_imagem_perfil.src = imgPerfil;
    } else {
        window.location = "../index.html";
    }
}

function mudaFoto(){
    
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "block"; 
}

function finalizarAguardar(texto) {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";

    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.innerHTML = texto;
    // }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

