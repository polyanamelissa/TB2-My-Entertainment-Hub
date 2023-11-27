if (!localStorage.getItem("logou")) {
    window.location.href = "Formulario-login-main/login.html";
}

$(document).ready(function () {
    const $itemForm = $("#item-form");
    const $itemName = $("#item-name");
    const $category = $("#category");
    const $itemList = $("#item-list");
    const $filterForm = $("#filter-form");
    const $filterCategory = $("#filter-category");

    $itemForm.on("submit", function (event) {
        event.preventDefault();
        const name = $itemName.val();
        const selectedCategory = $category.val();
        const $itemDiv = $("<div class='item'></div>").text(
            `${name} - ${selectedCategory}`
        );
        $itemList.append($itemDiv);
        $itemName.val("");

        const items = JSON.parse(localStorage.getItem("items")) || [];
        items.push({ name, category: selectedCategory });
        localStorage.setItem("items", JSON.stringify(items));
        updateCategoryFilter();
    });

    function updateCategoryFilter() {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        const categories = items.map((item) => item.category);
        const uniqueCategories = [...new Set(categories)];

        $filterCategory.html("");
        $filterCategory.append(
            "<option value='Todas as Categorias'>Todas as Categorias</option>"
        );
        uniqueCategories.forEach((category) => {
            $filterCategory.append(
                `<option value="${category}">${category}</option>`
            );
        });
    }

    $filterForm.on("submit", function (event) {
        event.preventDefault();
        const selectedCategory = $filterCategory.val();
        const items = JSON.parse(localStorage.getItem("items")) || [];

        $itemList.html(""); //limpa a lista antes de recriá-la com os itens filtrados

        if (selectedCategory === "all") {
            items.forEach((item) => {
                const $itemDiv = $("<div class='item'></div>").text(
                    `${item.name} - ${item.category}`
                );
                $itemList.append($itemDiv);
            });
        } else {
            items.forEach((item) => {
                if (item.category === selectedCategory) {
                    const $itemDiv = $("<div class='item'></div>").text(
                        `${item.name}`
                    );
                    $itemList.append($itemDiv);
                }
            });
        }
    });

    function normalizeString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    updateCategoryFilter();
});

/*AJAX */
$.ajax({
    url: "rascunho.txt",
    dataType: "html",
    data: "",
    success: function (data) {
        document.getElementById("tit").innerHTML = data;
    },
});


$(document).ready(function(){
		  	var btn = document.querySelector(".btn");
			var menu = document.querySelector(".menu");
			var anchors = document.querySelectorAll(".anr");

			btn.addEventListener("click", function(){
			  this.classList.toggle("active");
			  menu.classList.toggle("active");
			});
		});
