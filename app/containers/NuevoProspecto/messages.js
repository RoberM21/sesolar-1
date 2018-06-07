/*
 * NuevoProspecto Messages
 *
 * This contains all the text for the NuevoProspecto component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.NuevoProspecto.header',
    defaultMessage: 'This is NuevoProspecto container !',
  },
  subHeaderTitle: 'Nuevo prospecto',
  question: '¿El cliente es nuevo?',
  yes: 'Sí',
  no: 'No',
  create: 'Crear cliente',
  number: 'Número de seguimiento',
  back: 'Atrás',
  next: 'Siguiente',
  progress: 'Porcentaje de aceptación',
  labels: {
    imagen: 'Imagen',
  },
  success: 'Prospecto creado con éxito.',
  error: 'Error al crear prospecto.',
});
