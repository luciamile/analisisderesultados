import React, { useState } from 'react';

function ConversorDeTemperatura() {
  const [temperatura, setTemperatura] = useState('');
  const [tipoConversion, setTipoConversion] = useState('CelsiusAFahrenheit');
  const [resultado, setResultado] = useState('');

  const convertirTemperatura = () => {
    let temp = parseFloat(temperatura);
    if (isNaN(temp)) {
      setResultado('Por favor, ingresa un número válido.');
      return;
    }
    if (tipoConversion === 'CelsiusAFahrenheit') {
      setResultado(`${temp}°C es igual a ${(temp * 9/5 + 32).toFixed(2)}°F`);
    } else {
      setResultado(`${temp}°F es igual a ${((temp - 32) * 5/9).toFixed(2)}°C`);
    }
  };

  return (
    <div>
      <h1>Conversor de Temperatura</h1>
      <input
        type="text"
        value={temperatura}
        onChange={(e) => setTemperatura(e.target.value)}
        placeholder="Ingresa la temperatura"
      />
      <select
        value={tipoConversion}
        onChange={(e) => setTipoConversion(e.target.value)}
      >
        <option value="CelsiusAFahrenheit">Celsius a Fahrenheit</option>
        <option value="FahrenheitACelsius">Fahrenheit a Celsius</option>
      </select>
      <button onClick={convertirTemperatura}>Convertir</button>
      <p>{resultado}</p>
    </div>
  );
}

export default ConversorDeTemperatura;
