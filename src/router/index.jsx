import React from 'react';
import { Suspense , lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
const UserAngel = lazy(() => import('user_angel/UserAngel'));
const UserGabriel = lazy(() => import('user_gabriel/UserGabriel'));
const UserAidalit = lazy(() => import('appAida/UserAida'));
const UserLuis = lazy(() => import('user_luis/UserLuis'));
const UserJordan = lazy(() => import('user_jordan/UserJordan'));

const Router = () => {
  console.log('Router component rendered');
  return (
    <BrowserRouter>
      <Suspense fallback={<div><p>Cargando...</p></div>}>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/angel' element={
            <Suspense fallback={<div><p>Cargando...</p></div>}>
              <UserAngel />
            </Suspense>
          }/>
          <Route path='/gabriel' element={
            <Suspense fallback={<div><p>Cargando...</p></div>}>
              <UserGabriel />
            </Suspense>
          }/>
          <Route path='/aidalit' element={
            <Suspense fallback={<div><p>Cargando...</p></div>}>
              <UserAidalit />
            </Suspense>
          }/>
          <Route path='/luis' element={
            <Suspense fallback={<div><p>Cargando...</p></div>}>
              <UserLuis />
            </Suspense>
          }/>
          <Route path='/jordan' element={
            <Suspense fallback={<div><p>Cargando...</p></div>}>
              <UserJordan />
            </Suspense>
          }/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router;