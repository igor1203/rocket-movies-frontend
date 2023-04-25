import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Sign_Up } from '../pages/Sign_Up'

export function AuthRoutes(){
  return(
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<Sign_Up />} />
    </Routes>
  )
}