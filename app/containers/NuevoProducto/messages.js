/*
 * NuevoProducto Messages
 *
 * This contains all the text for the NuevoProducto component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.NuevoProducto.header',
    defaultMessage: 'This is NuevoProducto container !',
  },
  subHeaderTitle: 'Nuevo producto',
  name: 'Nombre producto',
  description: 'Descripción',
  error: 'Error al cargar marcas.',
  brand: 'Selecciona una marca',
  cost: 'Costo',
  success: 'Producto agregado con éxito',
  errSave: 'Error al guardar producto.',
});
