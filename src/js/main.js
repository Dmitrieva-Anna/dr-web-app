const getActualYear = () => {
    const yearText = document.querySelector("#dr_web_year")
    const actualYear = new Date().getFullYear();

    if (actualYear) {
        yearText.innerHTML = actualYear.toString();
    }
}

document.addEventListener('DOMContentLoaded', getActualYear, false);
