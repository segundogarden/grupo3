    function adicionarCarrinho(nome, preco) {
        let item = { nome, preco };

        // Salva no localStorage
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push(item);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        // Vai para a página de compra
        window.location.href = "compra.html";
    }