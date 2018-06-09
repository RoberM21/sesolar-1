/*
 * AgregarSeguimiento Messages
 *
 * This contains all the text for the AgregarSeguimiento component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.AgregarSeguimiento.header',
    defaultMessage: 'This is AgregarSeguimiento container !',
  },
  subHeaderTitle: 'Agregar seguimiento',
  labels: {
    imagen: 'Imagen',
  },
  number: 'Número de seguimiento',
  back: 'Atrás',
  next: 'Siguiente',
  progress: 'Porcentaje de aceptación',
  success: 'Se agrego seguimiento con éxito.',
  error: 'Error al agregar seguimiento.',
});
