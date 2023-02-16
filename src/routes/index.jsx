import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllRoutes } from './AllRoutes';
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Home from "pages/Home";
import Listings from "pages/Listings"
import ListingDetails from 'pages/ListingDetails';
import AllSpots from 'pages/Listings/AllListings';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spots/:id' element={<Listings />} />
        <Route path='/listing/:id' element={<ListingDetails />} />
        <Route path='/spots' element={<AllSpots />} />

        {AllRoutes?.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={
              item.isPrivate ? (
                <PrivateRoute>{item.page}</PrivateRoute>
              ) : (
                <ProtectedRoute>{item.page}</ProtectedRoute>
              )
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;