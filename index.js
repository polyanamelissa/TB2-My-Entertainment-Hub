document.addEventListener("DOMContentLoaded", function() {
    const itemForm = document.getElementById("item-form");
    const itemName = document.getElementById("item-name");
    const category = document.getElementById("category");
    const itemList = document.getElementById("item-list");
    const filterForm = document.getElementById("filter-form");
    const filterCategory = document.getElementById("filter-category");

    // Função para adicionar um item à lista
    itemForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = itemName.value;
        const selectedCategory = category.value;
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.textContent = `${name} - ${selectedCategory}`;
        itemList.appendChild(itemDiv);
        itemName.value = "";

        // Salvar o item no Web Storage
        const items = JSON.parse(localStorage.getItem("items")) || [];
        items.push({ name, category: selectedCategory });
        localStorage.setItem("items", JSON.stringify(items));

        // Atualizar a lista de categorias no filtro
        updateCategoryFilter();
    });

    // Função para atualizar a lista de categorias no filtro
    function updateCategoryFilter() {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        const categories = items.map(item => item.category);
        const uniqueCategories = [...new Set(categories)];

        filterCategory.innerHTML = "";
        uniqueCategories.forEach(category => {
            filterCategory.innerHTML += `<option value="${category}">${category}</option>`;
        });
    }

    // Filtrar a lista por categoria
    filterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedCategory = filterCategory.value;
        const items = JSON.parse(localStorage.getItem("items")) || [];

        if (selectedCategory === "all") {
            // Mostrar todos os itens
            itemList.innerHTML = "";
            items.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item");
                itemDiv.textContent = `${item.name} - ${item.category}`;
                itemList.appendChild(itemDiv);
            });
        } else {
            // Mostrar apenas itens da categoria selecionada
            itemList.innerHTML = "";
            items.forEach(item => {
                if (item.category === selectedCategory) {
                    const itemDiv = document.createElement("div");
                    itemDiv.classList.add("item");
                    itemDiv.textContent = `${item.name} - ${item.category}`;
                    itemList.appendChild(itemDiv);
                }
            });
        }
    });

    // Carregar categorias do Web Storage ao iniciar
    updateCategoryFilter();
});