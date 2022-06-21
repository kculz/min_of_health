import {Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import RequestsLogin from "./components/requests/RequestLogin";
import Requests from "./components/requests/Requests";
import View from "./components/view_assets/View";
import AddAsset from "./components/add_asset/AddAsset";
import UpdateAsset from "./components/add_asset/UpdateAsset";



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path='/assets' element={<View />} />
        <Route path="/requests/login" element={<RequestsLogin />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/add/asset" element={<AddAsset />} />
        <Route path="/assets/edit/:id" element={<UpdateAsset />} />
        <Route  path="/" element={<Login />} />
      </Routes>
     
  
    </>
  );
}

export default App;
