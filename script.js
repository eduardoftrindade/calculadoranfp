// Function to enable using 'Enter' button instead of a mouse click
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.querySelector("#calculate").click();
    }
});

const WEIGHT_A1 = 0.4;
const WEIGHT_A2 = 0.6;
const PASSING_GRADE = 60;

function validateGrades(firstGrade, secondGrade) {
    if (isNaN(firstGrade) || isNaN(secondGrade)) {
        alert("Os campos de nota devem conter valores numéricos e não podem estar em branco.");
        return false;
    }

    if (firstGrade < 0 || firstGrade > 100 || secondGrade < 0 || secondGrade > 100) {
        alert("Os valores devem estar entre 0 e 100.");
        return false;
    }
    
    return true;
}

function calculateNfp(firstGrade, secondGrade) {
    if (firstGrade === 0) {
        return firstGrade * WEIGHT_A1 + secondGrade * WEIGHT_A2 / 2;
    } else {
        return firstGrade * WEIGHT_A1 + secondGrade * WEIGHT_A2;
    }
}

function determineResult(nfp, firstGrade) {
    const formattedNfp = formatResult(nfp);

    if (firstGrade === 0) {
        return `Infelizmente você não cumpriu os requisitos mínimos para ser aprovado. Sua NFP foi de ${formattedNfp}.`;
    } else if (nfp >= PASSING_GRADE) {
        return `Parabéns! Você foi APROVADO. Sua NFP foi ${formattedNfp}.`;
    } else {
        return `Uma pena, você foi REPROVADO. Sua NFP foi ${formattedNfp}.`;
    }
}

function calculator() {
    var firstGrade = parseFloat(document.getElementById("a1").value);
    var secondGrade = parseFloat(document.getElementById("a2").value);

    if (!validateGrades(firstGrade, secondGrade)) {
        return "";
    }

    var nfp = calculateNfp(firstGrade, secondGrade);
    return determineResult(nfp, firstGrade);
}

function formatResult(nfp) {
    return nfp % 1 === 0 ? nfp.toFixed(0) : nfp.toFixed(2);
}

function displayResult() {
    const resultElement = document.getElementById("result");
    resultElement.value = calculator();
}