import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import AllMeetups from "../../../pages/AllMeetups";
import NewMeetup from "../../../pages/NewMeetup";
import Favourites from "../../../pages/Favourites";
import NotFound from "../../../pages/NotFound";
import EditMeetup from "../../../pages/EditMeetup";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<AllMeetups />} />
      <Route path="/new-meetup" element={<NewMeetup />} />
      <Route path="/edit/:meetupId" element={<EditMeetup />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
