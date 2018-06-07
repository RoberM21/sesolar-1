/*
 * Productos Messages
 *
 * This contains all the text for the Productos component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Productos.header',
    defaultMessage: 'This is Productos container !',
  },
  subHeaderTitle: 'Productos',
  subHeaderButtonLabel: 'Nuevo producto',
  error: 'Error al cargar productos',
  table: {
    name: 'Producto',
    description: 'Descripción',
    cost: 'Costo',
    marca: 'Marca',
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
  dialogMessage: '¿Seguro que desea eliminar el producto?',
  successDelete: 'Producto eliminado con éxito',
  errorDelete: 'Error al eliminar producto',
});
