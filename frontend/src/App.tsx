import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import HomePage from "./pages/home.page";
import Register from "./pages/register.page";
import Login from "./pages/login.page";
import Roomspage from "./pages/rooms.page";
import CallPage from "./pages/call.page";
import ProfilePage from "./pages/profile.page";
import HistoryPage from "./pages/history.page";
import CreateRoom from "./pages/create-room.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="/rooms" element={<Roomspage />} />
        <Route path="/rooms/create" element={<CreateRoom />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/call" element={<CallPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
