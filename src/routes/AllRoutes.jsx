import Login from "pages/Login";
import CreateListing from "pages/CreateListing";
import HostSpots from "pages/HostSpots";

export const AllRoutes = [
  {
    path: "/login",
    page: <Login />,
    isPrivate: false,
  },
  {
    path: "/spot/create",
    page: <CreateListing />,
    isPrivate: true,
  },
  {
    path: "/host_spots",
    page: <HostSpots />,
    isPrivate: true,
  },
];
