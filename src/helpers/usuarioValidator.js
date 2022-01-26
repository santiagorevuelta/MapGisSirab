export function usuarioValidator(name) {
  if (!name) {
    return 'El usuario no puede estar vacío.';
  }
  return '';
}
