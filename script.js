document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const btn = document.querySelector("#calculate");
        btn.click();
    }
});

function calc() {
    var grade1 = document.getElementById("a1").value;
    var grade2 = document.getElementById("a2").value;

    if (grade1 == "" || grade2 == "") {
        alert("Os campos de nota não podem estar em branco.");
        return "";
    }

    if (grade1 == 0 || grade2 < 50 || (grade1 == 0 && grade2 < 50)) {
        var result = grade1 * 0.4 + (grade2 * 0.6) / 2;
        var nfp = parseFloat(result.toFixed(2));

        return (
            "Infelizmente você não cumpriu os requisitos mínimos para ser aprovado. Sua NFP foi de " +
            nfp +
            "."
        );
    } else if (grade1 > 0 && grade2 >= 50) {
        result = grade1 * 0.4 + grade2 * 0.6;
        nfp = parseFloat(result.toFixed(2));

        if (nfp >= 60) {
            return "Parabéns! Você foi APROVADO. Sua NFP foi " + nfp + ".";
        } else {
            return "Uma pena. Você foi REPROVADO. Sua NFP foi " + nfp + ".";
        }
    }
}
