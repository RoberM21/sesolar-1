/*
 * NuevoCliente Messages
 *
 * This contains all the text for the NuevoCliente component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.NuevoCliente.header',
    defaultMessage: 'This is NuevoCliente container !',
  },
  selectedItem: 'PRESTAVALE',
  subHeaderTitle: 'Nuevo cliente',
  clientName: 'Nombre cliente',
  companyName: 'Nombre Compañia',
  company: 'Contacto compañia',
  phone: 'Teléfono',
  email: 'Correo electrónico',
  address: 'Dirección',
  success: 'Cliente agregado exitosamente.',
  error: 'Error al agregar cliente.',
});
