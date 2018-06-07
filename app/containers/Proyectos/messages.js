/*
 * Proyectos Messages
 *
 * This contains all the text for the Proyectos component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Proyectos.header',
    defaultMessage: 'This is Proyectos container !',
  },
  subHeaderTitle: 'Proyectos',
  error: 'Error al cargar proyectos.',
  table: {
    name: 'Descripción proyecto',
    client: 'Nombre cliente',
    date: 'Fecha realización',
  },
  buttons: {
    edit: 'Editar',
    delete: 'Eliminar',
  },
  dialogButtons: {
    yesButtonLabel: 'Sí',
    noButtonLabel: 'No',
  },
  dialogTitle: 'Eliminar',
  dialogMessage: '¿Seguro que desea eliminar el proyecto?',
});
