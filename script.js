document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const message = document.getElementById("message");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const quantityText = quantityInput.value.trim();
        const quantityPattern = /^[0-9]+$/;

        if (!quantityPattern.test(quantityText) || parseInt(quantityText, 10) <= 0) {
            message.textContent = "Please enter a positive whole-number quantity.";
            return;
        }

        const quantity = parseInt(quantityText, 10);
        const price = parseFloat(productSelect.value);
        const total = price * quantity;

        message.textContent = "Total cost: $" + total.toFixed(2);
    });

    quantityInput.addEventListener("input", function () {
        const quantityText = quantityInput.value.trim();
        const quantityPattern = /^[0-9]+$/;

        if (quantityPattern.test(quantityText) && parseInt(quantityText, 10) > 0) {
            message.textContent = "";
        }
    });
});
