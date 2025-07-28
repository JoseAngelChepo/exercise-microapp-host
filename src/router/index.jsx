import React from 'react';
import { Suspense , lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
const UserAngel = lazy(() => import('user_angel/UserAngel'));

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
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router;