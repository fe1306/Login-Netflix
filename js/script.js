function faz_login(event) {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email == "tinhos@gmail.com" && senha == "tinho") {
        alert ("Login realizado com sucesso");
        window.location.href = "index2.html"
    }
    else {
      alert ("Usuário não cadastrado, reveja seus dados")
    }
}