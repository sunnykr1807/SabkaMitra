<script>
document.addEventListener("DOMContentLoaded", function () {

    const toolSearch = document.getElementById("toolSearch");

    if (!toolSearch) return;

    toolSearch.addEventListener("input", function () {

        let value = this.value.toLowerCase().trim();

        let cards = document.querySelectorAll(".tool-card");

        cards.forEach(function (card) {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.parentElement.style.removeProperty("display");
            } else {
                card.parentElement.style.display = "none";
            }

        });

    });

});
</script>