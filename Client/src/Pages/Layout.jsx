import React from 'react'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function Layout() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/createuser' element={<CreateUser/>}></Route>
        <Route path='/updateuser' element={<UpdateUser/>}></Route>
        <Route path='/deleteuser' element={<DeleteUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
