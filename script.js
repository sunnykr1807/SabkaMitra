<script>
document.getElementById("toolSearch").addEventListener("keyup", function() {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.parentElement.style.display = "block";
        }else{
            card.parentElement.style.display = "none";
        }

    });

});
</script>