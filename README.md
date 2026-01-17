# Frontend Mentor - Newsletter sign-up form solution

Esta es mi solución al desafío [Newsletter sign-up form en Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3dbmCqC6Wl). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

## Tabla de contenidos

- [Resumen](#resumen)
  - [El desafío](#el-desafío)
  - [Captura de pantalla](#captura-de-pantalla)
  - [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
- [Autor](#autor)

## Resumen

### El desafío

Los usuarios deben ser capaces de:

- Completar el formulario y ver el mensaje de éxito.
- Ver mensajes de error de validación si el campo está vacío o el formato del email es incorrecto.
- Ver el diseño optimizado según el tamaño de pantalla de su dispositivo (Mobile/Desktop).
- Ver los estados de hover y enfoque (focus) para todos los elementos interactivos.

### Captura de pantalla

![Captura de pantalla de mi solución](./assets/images/screenshot.png) 
*(Nota: Debes tomar una foto a tu proyecto y guardarla en esa ruta)*

### Enlaces

- URL de la solución: [Añade tu enlace de GitHub aquí]
- URL del sitio en vivo: [Añade tu enlace de GitHub Pages o Vercel aquí]

## Mi proceso

### Construido con

- Marcado HTML5 semántico
- Propiedades personalizadas de CSS (Variables)
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (Validación y manipulación del DOM)

### Lo que aprendí

En este proyecto, reforcé el uso de la etiqueta `<picture>` para manejar imágenes responsivas de forma eficiente sin sobrecargar el CSS. También practiqué la validación de formularios mediante expresiones regulares (Regex).

Ejemplo de cómo manejé el cambio de pantallas en JS:

```javascript
if (isValidEmail(emailValue)) {
    formCard.classList.add('hidden');
    successCard.classList.remove('hidden');
}