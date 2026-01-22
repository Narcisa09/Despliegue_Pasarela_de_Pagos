async function pagar(monto, descripcion) {
    try {
        const response = await fetch("/crear-pago", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: monto,
                description: descripcion
            })
        });

        const data = await response.json();

        console.log("💳 Respuesta PayPhone:", data);

        // Redirige a PayPhone
        window.location.href = data.payWithCard;

    } catch (error) {
        console.error("❌ Error al pagar:", error);
        alert("Error al iniciar el pago");
    }
}

