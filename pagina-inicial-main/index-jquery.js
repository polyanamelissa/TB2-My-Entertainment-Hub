$(document).ready(function() {
  const $itemForm = $("#item-form");
  const $itemName = $("#item-name");
  const $category = $("#category");
  const $itemList = $("#item-list");
  const $filterForm = $("#filter-form");
  const $filterCategory = $("#filter-category");

  $itemForm.on("submit", function(event) {
        event.preventDefault();
        const name = $itemName.val();
        const selectedCategory = $category.val();
        const $itemDiv = $("<div class='item'></div>").text(`${name} - ${selectedCategory}`);
        $itemList.append($itemDiv);
        $itemName.val("");

       const items = JSON.parse(localStorage.getItem("items")) || [];
        items.push({ name, category: selectedCategory });
        localStorage.setItem("items", JSON.stringify(items));
        updateCategoryFilter();
    });

    function updateCategoryFilter() {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        const categories = items.map(item => normalizeString(item.category.toLowerCase()));
        const uniqueCategories = [...new Set(categories)];

        $filterCategory.html("");
        uniqueCategories.forEach(category => {
            $filterCategory.append(`<option value="${category}">${category}</option>`);
        });
    }
    $filterForm.on("submit", function(event) {
        event.preventDefault();
        const selectedCategory = $filterCategory.val();
        const items = JSON.parse(localStorage.getItem("items")) || [];

        if (selectedCategory === "all") {
            // Mostrar todos os itens
            $itemList.html("");
            items.forEach(item => {
                $itemList.append($("<div class='item'></div>").text(`${item.name} - ${item.category}`));
            });
        } else {
            // Mostrar apenas itens da categoria selecionada
            $itemList.html("");
            items.forEach(item => {
                if (normalizeString(item.category.toLowerCase()) === selectedCategory) {
                    $itemList.append($("<div class='item'></div>").text(`${item.name} - ${item.category}`));
                }
            });
        }
    });
