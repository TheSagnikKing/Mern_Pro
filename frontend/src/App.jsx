// import React from 'react'
// import "./App.css"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Public from './components/Public'
// import Signin from './features/Admin/auth/Signin/Signin'
// import Signup from './features/Admin/auth/Signup/Signup'
// import AccountDetail from './features/Admin/auth/AccountDetail/AccountDetail'
// import Home from './features/Admin/dashboard/Home/Home'
// import Salon from './features/Admin/dashboard/Salon/Salon'
// import DashLayout from './components/Admin/DashLayout'
// import EditProfile from './features/Admin/dashboard/EditProfile/EditProfile'
// import ProtectedRoute from './features/Admin/auth/ProtectedRoute'
// import ProtectedAuthRoute from './features/Admin/auth/ProtectedAuthRoute'
// import PersistAdminInfo from './features/Admin/auth/PersistAdminInfo'
// import CreateSalon from './features/Admin/dashboard/Salon/CreateSalon'
// import UpdateSalon from './features/Admin/dashboard/Salon/UpdateSalon'

// import BarberSignin from './features/Barber/auth/Signin/Signin'
// import BarberSignup from './features/Barber/auth/Signup/Signup'
// import BarberAccountDetail from './features/Barber/auth/AccountDetail/AccountDetail'
// import BarberDashLayout from './components/Barber/DashLayout'
// import BarberHome from './features/Barber/dashboard/Home/Home'
// import BarberSalon from './features/Barber/dashboard/Salon/Salon'
// import BarberEditProfile from './features/Barber/dashboard/EditProfile/EditProfile'
// import PersistBarberInfo from './features/Barber/auth/PersistBarberInfo'
// import ProtectedBarberRoute from './features/Barber/auth/ProtectedBarberRoute'
// import ProtectedBarberAuthRoute from './features/Barber/auth/ProtectedBarberAuthRoute'

// // Code splitting apply kore dile onekta performance improve hoejabe

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Public />} />


//         {/* FOR ADMIN */}
//         <Route element={<ProtectedAuthRoute />}>
//           <Route path="/admin-signin" element={<Signin />} />
//           <Route path="/admin-signup" element={<Signup />} />
//           <Route path="/admin-accountdetails" element={<AccountDetail />} />
//         </Route>

//         <Route element={<ProtectedRoute />}>
//           <Route element={<PersistAdminInfo />}>
//             <Route element={<DashLayout />}>
//               <Route path="/admin-dashboard" element={<Home />} />
//               <Route path="/admin-dashboard/editprofile" element={<EditProfile />} />

//               <Route path="/admin-dashboard/salon">
//                 <Route index element={<Salon />} />
//                 <Route path="createsalon" element={<CreateSalon />} />
//                 <Route path="updatesalon" element={<UpdateSalon />} />
//               </Route>

//             </Route>
//           </Route>

//         </Route>

//         {/* FOR BARBER */}
//         <Route element={<ProtectedBarberAuthRoute />}>
//           <Route path="/barber-signin" element={<BarberSignin />} />
//         </Route>
        
//         <Route element={<ProtectedBarberRoute />}>
//           <Route element={<PersistBarberInfo />}>
//             <Route element={<BarberDashLayout />}>
//               <Route path="/barber-dashboard" element={<BarberHome />} />
//               <Route path="/barber-dashboard/salon" element={<BarberSalon />} />
//               <Route path="/barber-dashboard/editprofile" element={<BarberEditProfile />} />
//             </Route>
//           </Route>
//         </Route>


//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy-loaded components
const Public = lazy(() => import('./components/Public'));
const Signin = lazy(() => import('./features/Admin/auth/Signin/Signin'));
const Signup = lazy(() => import('./features/Admin/auth/Signup/Signup'));
const AccountDetail = lazy(() => import('./features/Admin/auth/AccountDetail/AccountDetail'));
const Home = lazy(() => import('./features/Admin/dashboard/Home/Home'));
const Salon = lazy(() => import('./features/Admin/dashboard/Salon/Salon'));
const DashLayout = lazy(() => import('./components/Admin/DashLayout'));
const EditProfile = lazy(() => import('./features/Admin/dashboard/EditProfile/EditProfile'));
const ProtectedRoute = lazy(() => import('./features/Admin/auth/ProtectedRoute'));
const ProtectedAuthRoute = lazy(() => import('./features/Admin/auth/ProtectedAuthRoute'));
const PersistAdminInfo = lazy(() => import('./features/Admin/auth/PersistAdminInfo'));
const CreateSalon = lazy(() => import('./features/Admin/dashboard/Salon/CreateSalon'));
const UpdateSalon = lazy(() => import('./features/Admin/dashboard/Salon/UpdateSalon'));

const BarberSignin = lazy(() => import('./features/Barber/auth/Signin/Signin'));
const BarberSignup = lazy(() => import('./features/Barber/auth/Signup/Signup'));
const BarberAccountDetail = lazy(() => import('./features/Barber/auth/AccountDetail/AccountDetail'));
const BarberDashLayout = lazy(() => import('./components/Barber/DashLayout'));
const BarberHome = lazy(() => import('./features/Barber/dashboard/Home/Home'));
const BarberSalon = lazy(() => import('./features/Barber/dashboard/Salon/Salon'));
const BarberEditProfile = lazy(() => import('./features/Barber/dashboard/EditProfile/EditProfile'));
const PersistBarberInfo = lazy(() => import('./features/Barber/auth/PersistBarberInfo'));
const ProtectedBarberRoute = lazy(() => import('./features/Barber/auth/ProtectedBarberRoute'));
const ProtectedBarberAuthRoute = lazy(() => import('./features/Barber/auth/ProtectedBarberAuthRoute'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Public /></Suspense>} />

        {/* FOR ADMIN */}
        <Route element={<Suspense fallback={<div>Loading...</div>}><ProtectedAuthRoute /></Suspense>}>
          <Route path="/admin-signin" element={<Suspense fallback={<div>Loading...</div>}><Signin /></Suspense>} />
          <Route path="/admin-signup" element={<Suspense fallback={<div>Loading...</div>}><Signup /></Suspense>} />
          <Route path="/admin-accountdetails" element={<Suspense fallback={<div>Loading...</div>}><AccountDetail /></Suspense>} />
        </Route>

        <Route element={<Suspense fallback={<div>Loading...</div>}><ProtectedRoute /></Suspense>}>
          <Route element={<Suspense fallback={<div>Loading...</div>}><PersistAdminInfo /></Suspense>}>
            <Route element={<Suspense fallback={<div>Loading...</div>}><DashLayout /></Suspense>}>
              <Route path="/admin-dashboard" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
              <Route path="/admin-dashboard/editprofile" element={<Suspense fallback={<div>Loading...</div>}><EditProfile /></Suspense>} />

              <Route path="/admin-dashboard/salon">
                <Route
                  index
                  element={<Suspense fallback={<div>Loading...</div>}><Salon /></Suspense>}
                />
                <Route
                  path="createsalon"
                  element={<Suspense fallback={<div>Loading...</div>}><CreateSalon /></Suspense>}
                />
                <Route
                  path="updatesalon"
                  element={<Suspense fallback={<div>Loading...</div>}><UpdateSalon /></Suspense>}
                />
              </Route>
            </Route>
          </Route>
        </Route>

        {/* FOR BARBER */}
        <Route element={<Suspense fallback={<div>Loading...</div>}><ProtectedBarberAuthRoute /></Suspense>}>
          <Route path="/barber-signin" element={<Suspense fallback={<div>Loading...</div>}><BarberSignin /></Suspense>} />
        </Route>

        <Route element={<Suspense fallback={<div>Loading...</div>}><ProtectedBarberRoute /></Suspense>}>
          <Route element={<Suspense fallback={<div>Loading...</div>}><PersistBarberInfo /></Suspense>}>
            <Route element={<Suspense fallback={<div>Loading...</div>}><BarberDashLayout /></Suspense>}>
              <Route path="/barber-dashboard" element={<Suspense fallback={<div>Loading...</div>}><BarberHome /></Suspense>} />
              <Route path="/barber-dashboard/salon" element={<Suspense fallback={<div>Loading...</div>}><BarberSalon /></Suspense>} />
              <Route
                path="/barber-dashboard/editprofile"
                element={<Suspense fallback={<div>Loading...</div>}><BarberEditProfile /></Suspense>}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
