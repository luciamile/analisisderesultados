import React, { useState } from 'react';

function FormularioDeLogin() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarInicioSesion = () => {
    const usuarioCorrecto = 'usuario'; // Cambia esto por el nombre de usuario correcto
    const contrasenaCorrecta = 'contrasena'; // Cambia esto por la contraseña correcta

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      setMensaje(`Bienvenido, ${usuario}!`);
    } else {
      setMensaje('Credenciales incorrectas, por favor intenta de nuevo.');
    }
  };

  return (
    <div>
      <h1>Formulario de Login</h1>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Usuario"
      />
      <input
        type="password"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={manejarInicioSesion}>Iniciar Sesión</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default FormularioDeLogin;
