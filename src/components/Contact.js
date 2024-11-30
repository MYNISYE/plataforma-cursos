import React from 'react';

const Contact = () => {
  return (
    <div>

<div class="container-form">
    <h2>¡Contáctanos!</h2>
    <form action="#" method="POST">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required/>
      </div>
      <div class="form-group">
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad" required/>
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <input type="email" id="correo" name="correo" required/>
      </div>
      <div class="form-group">
        <label for="pais">País:</label>
        <select id="pais" name="pais" required>
          <option value="">Selecciona un país</option>
          <option value="Mexico">México</option>
          <option value="Argentina">Argentina</option>
          <option value="Colombia">Colombia</option>
          <option value="España">España</option>
          <option value="Estados Unidos">Estados Unidos</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
    </div>
  );
};

export default Contact;
