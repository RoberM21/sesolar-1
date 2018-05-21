/*
 * Clientes Messages
 *
 * This contains all the text for the Clientes component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Clientes.header',
    defaultMessage: 'This is Clientes container !',
  },
  selectedItem: 'PRESTAVALE',
  subHeaderTitle: 'Clientes',
  subHeaderButtonLabel: 'Nuevo cliente',
  nav: {
    administrator: 'Administrador',
  },
  table: {
    name: 'Cliente',
    company: 'Compañia',
    telephone: 'Teléfono',
    email: 'Correo electrónico',
  },
  dialogButtons: {
    yesButtonLabel: 'Sí',
    noButtonLabel: 'No',
  },
  storeDialogTitle: 'Eliminar',
  storeDialogMessage: '¿Seguro que desea eliminar el cliente?',
  success: 'Cliente eliminado.',
  error: 'Error al eliminar cliente.',
  empty: 'No cuenta con clientes actualmente.',
});
