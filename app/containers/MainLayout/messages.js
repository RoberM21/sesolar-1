/*
 * MainLayout Messages
 *
 * This contains all the text for the MainLayout component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.MainLayout.header',
    defaultMessage: 'This is MainLayout container !',
  },
  menuOptions: {
    clients: 'CLIENTES',
    brands: 'MARCAS',
    products: 'PRODUCTOS',
    cotizaciones: 'COTIZACIONES',
    proyects: 'PROYECTOS',
    sesolar: 'SESOLAR',
    inventary: 'INVENTARIO',
  },
  buttons: {
    cancel: 'Salir',
  },
  close: 'Iniciar sesión',
  modalTitle: 'Tu sesión ha expirado',
  relogin: 'Para volver a realizar tu cobranza inicia sesión.',
});
