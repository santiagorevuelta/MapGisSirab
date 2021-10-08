export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return 'El correo electrónico no puede estar vacío.';
  if (!re.test(email))
    return '¡Ooops! Necesitamos una dirección de correo electrónico válida.';
  return '';
}
