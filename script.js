document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', function() {
            // Remove a classe de ampliação de todos os produtos
            products.forEach(p => p.classList.remove('product-enlarge'));

            // Adiciona a classe de ampliação ao produto atualmente clicado
            this.classList.add('product-enlarge');

            // Armazena o produto atualmente clicado
            const currentProduct = this;

            // Remove a ampliação e a borda após 10 segundos (10000 milissegundos)
            setTimeout(function() {
                currentProduct.classList.remove('product-enlarge');
            }, 10000); // 10000 milissegundos = 10 segundos
        });
    });
});
