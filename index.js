function convertUnits() {
    //get input value
    const inputValue = document.getElementById("box-convert").value;

    //conversion formulas
    const metersToFeet = (inputValue * 3.281).toFixed(2); //1 meter = 3.281 feet
    const litersToGallons = (inputValue * 0.264).toFixed(2); // 1 liter = 0.264 gallons
    const kilogramsToPounds = (inputValue * 2.204).toFixed(2); //1 kilogram = 2.204 pounds

    //update content of the h2 elements with the converted values

    document.getElementById("length").innerText= `${metersToFeet}`;
    document.getElementById("volume").innerText= `${litersToGallons}`;
    document.getElementById("mass").innerText= `${kilogramsToPounds}`;
}