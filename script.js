document.addEventListener("DOMContentLoaded", function () {
  // Weight Conversion Elements
  const kgInput = document.getElementById("kg");
  const lbInput = document.getElementById("lb");
  const swapWeightBtn = document.getElementById("swapWeight");

  // Temperature Conversion Elements
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const swapTempBtn = document.getElementById("swapTemp");

  // Weight Conversion Functions
  function convertKgToLb(kg) {
    return kg * 2.20462;
  }

  function convertLbToKg(lb) {
    return lb / 2.20462;
  }

  // Temperature Conversion Functions
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function convertFahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  // Weight Conversion Event Listeners
  kgInput.addEventListener("input", function () {
    if (kgInput.value === "") {
      lbInput.value = "";
      return;
    }
    const kg = parseFloat(kgInput.value);
    lbInput.value = convertKgToLb(kg).toFixed(2);
  });

  lbInput.addEventListener("input", function () {
    if (lbInput.value === "") {
      kgInput.value = "";
      return;
    }
    const lb = parseFloat(lbInput.value);
    kgInput.value = convertLbToKg(lb).toFixed(2);
  });

  swapWeightBtn.addEventListener("click", function () {
    const temp = kgInput.value;
    kgInput.value = lbInput.value;
    lbInput.value = temp;

    if (kgInput.value !== "") {
      const kg = parseFloat(kgInput.value);
      lbInput.value = convertKgToLb(kg).toFixed(2);
    } else if (lbInput.value !== "") {
      const lb = parseFloat(lbInput.value);
      kgInput.value = convertLbToKg(lb).toFixed(2);
    }
  });

  // Temperature Conversion Event Listeners
  celsiusInput.addEventListener("input", function () {
    if (celsiusInput.value === "") {
      fahrenheitInput.value = "";
      return;
    }
    const celsius = parseFloat(celsiusInput.value);
    fahrenheitInput.value = convertCelsiusToFahrenheit(celsius).toFixed(2);
  });

  fahrenheitInput.addEventListener("input", function () {
    if (fahrenheitInput.value === "") {
      celsiusInput.value = "";
      return;
    }
    const fahrenheit = parseFloat(fahrenheitInput.value);
    celsiusInput.value = convertFahrenheitToCelsius(fahrenheit).toFixed(2);
  });

  swapTempBtn.addEventListener("click", function () {
    const temp = celsiusInput.value;
    celsiusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = temp;

    if (celsiusInput.value !== "") {
      const celsius = parseFloat(celsiusInput.value);
      fahrenheitInput.value = convertCelsiusToFahrenheit(celsius).toFixed(2);
    } else if (fahrenheitInput.value !== "") {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      celsiusInput.value = convertFahrenheitToCelsius(fahrenheit).toFixed(2);
    }
  });

  // Clear inputs when page loads
  kgInput.value = "";
  lbInput.value = "";
  celsiusInput.value = "";
  fahrenheitInput.value = "";
});
