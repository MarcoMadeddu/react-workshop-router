import React,{lazy, Suspense} from 'react';
import{ BrowserRouter, Navigate, Route, Routes,} from 'react-router-dom';

import './App.css';
import { Navbar } from './core/Navbar';
import { PageHome } from './features/PageHome';
import { PageSettings } from './features/PageSettings';
import  PageContacts  from './features/Contacts';
// import  PageAdmin  from './features/PageAdmin';

// ADD NEW PAGE WITH LAZY FUNCTION
const PageAdmin = lazy(()=> import('./features/PageAdmin'));

function App() {
  return (
   <BrowserRouter>
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<PageHome/>}></Route>
        <Route path="/settings" element={<PageSettings/>}></Route>
        <Route path ="/admin" element={
            <React.Suspense fallback={<>...</>}> 
              <PageAdmin></PageAdmin>
            </React.Suspense>
        }/>
        <Route path = "/contacts" element={<PageContacts/>}></Route>
        <Route path= "*" element={
          <Navigate to= "/home"/>
        }></Route>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
