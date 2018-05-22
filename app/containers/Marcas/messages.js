/*
 * Marcas Messages
 *
 * This contains all the text for the Marcas component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Marcas.header',
    defaultMessage: 'This is Marcas container !',
  },
  subHeaderTitle: 'Marcas',
  subHeaderButtonLabel: 'Nueva marca',
  error: 'Error al cargar marcas.',
  empty: 'No cuenta con marcas actualmente.',
  dialogButtons: {
    yesButtonLabel: 'Sí',
    noButtonLabel: 'No',
  },
  dialogTitle: 'Eliminar',
  dialogMessage: '¿Seguro que desea eliminar la marca?',
  table: {
    name: 'Nombre',
  },
  buttons: {
    delete: 'Eliminar',
    edit: 'Editar',
  },
  successDelete: 'Marca eliminada.',
  errorDelete: 'Error al eliminar marca.',
});
