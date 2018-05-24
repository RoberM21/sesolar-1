// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import getRedirects from 'utils/redirects';
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  const {
    redirectFromLogin,
    // redirectToProspectExceptAdmin,
  } = getRedirects(store);

  return [
    {
      path: '/',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      onEnter: redirectFromLogin,
    }, {
      path: '/',
      name: 'mainLayout',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MainLayout/reducer'),
          import('containers/MainLayout'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('mainLayout', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/clientes',
          name: 'clientes',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Clientes/reducer'),
              import('containers/Clientes/sagas'),
              import('containers/Clientes'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('clientes', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
          onEnter: (nextState, replace) => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) replace('/');
          },
        }, {
          path: '/clientes/nuevo',
          name: 'nuevoCliente',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/NuevoCliente/reducer'),
              import('containers/NuevoCliente/sagas'),
              import('containers/NuevoCliente'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('nuevoCliente', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/clientes/:id/editar',
          name: 'editarCliente',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/EditarCliente/reducer'),
              import('containers/EditarCliente/sagas'),
              import('containers/EditarCliente'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('editarCliente', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/clientes/:id/detalle',
          name: 'detalleCliente',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/DetalleCliente/reducer'),
              import('containers/DetalleCliente/sagas'),
              import('containers/DetalleCliente'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('detalleCliente', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/home',
          name: 'home',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Home/reducer'),
              import('containers/Home/sagas'),
              import('containers/Home'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('home', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: 'clientes/:id/agregar-proyecto',
          name: 'agregarProyecto',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/AgregarProyecto/reducer'),
              import('containers/AgregarProyecto/sagas'),
              import('containers/AgregarProyecto'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('agregarProyecto', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/marcas',
          name: 'marcas',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Marcas/reducer'),
              import('containers/Marcas/sagas'),
              import('containers/Marcas'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('marcas', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/productos',
          name: 'productos',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Productos/reducer'),
              import('containers/Productos/sagas'),
              import('containers/Productos'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('productos', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/cotizaciones',
          name: 'cotizaciones',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Cotizaciones/reducer'),
              import('containers/Cotizaciones/sagas'),
              import('containers/Cotizaciones'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('cotizaciones', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/proyectos',
          name: 'proyectos',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Proyectos/reducer'),
              import('containers/Proyectos/sagas'),
              import('containers/Proyectos'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('proyectos', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/inventario',
          name: 'inventario',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Inventario/reducer'),
              import('containers/Inventario/sagas'),
              import('containers/Inventario'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('inventario', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/marcas/nueva',
          name: 'nuevaMarca',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/NuevaMarca/reducer'),
              import('containers/NuevaMarca/sagas'),
              import('containers/NuevaMarca'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('nuevaMarca', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/marcas/:id/editar',
          name: 'editarMarca',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/EditarMarca/reducer'),
              import('containers/EditarMarca/sagas'),
              import('containers/EditarMarca'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('editarMarca', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/productos/nuevo',
          name: 'nuevoProducto',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/NuevoProducto/reducer'),
              import('containers/NuevoProducto/sagas'),
              import('containers/NuevoProducto'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('nuevoProducto', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/productos/:id/editar',
          name: 'editarProducto',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/EditarProducto/reducer'),
              import('containers/EditarProducto/sagas'),
              import('containers/EditarProducto'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('editarProducto', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
