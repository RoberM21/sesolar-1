/*
 * Prospeccion Messages
 *
 * This contains all the text for the Prospeccion component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Prospeccion.header',
    defaultMessage: 'This is Prospeccion container !',
  },
  subHeaderTitle: 'Prospeccion',
  subHeaderButtonLabel: 'Agregar prospecto',
  error: 'Error al cargar prospectos.',
  table: {
    client: 'Cliente',
    date: 'Fecha',
    porcentage: 'Porcentaje',
  },
  buttons: {
    edit: 'Editar',
    delete: 'Eliminar',
  },
});
