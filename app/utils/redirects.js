/*
* Funcion de ayuda para crear funciones de redirect en rutas.
*
 */

function redirectFromLogin() {
  return (nextState, replace) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      switch (user.username) {
        case 'administrador':
          replace('/home');
          break;
        default:
          replace('/');
          break;
      }
    }
  };
}

function redirectToProspectExceptAdmin() {
  return (nextState, replace) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      switch (user.username) {
        case 'administrador':
          replace('/home');
          break;
        default:
          replace('/');
          break;
      }
    }
  };
}

export default function getRedirects(store) {
  return {
    redirectFromLogin: redirectFromLogin(store),
    redirectToProspectExceptAdmin: redirectToProspectExceptAdmin(store),
  };
}
