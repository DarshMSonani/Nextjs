import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";

import Page404 from "./Component/Page404";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import PeramsRout from "./Component/PeramsRoute";
import SerachComponent from "./Component/Serach";
import Contatct from "./Component/Contatc";
import Compney from "./Component/Compney";
import Chenel from "./Component/Chenel";
import Address from "./Component/Address";
import Login from "./Component/Login";
import ProtectedRout from "./Component/ProtectedRout";
import Logout from "./Component/Logout";


export default function PageRouter() {
    return (
        <div>
            <BrowserRouter>
                {/* Basic Line */}
                {/* <Link to={"/about"}>About</Link>
                <br />
                <Link to={"/"}>Home</Link> */}
                <NavBar />
                <Routes>
                    <Route path="/" element={<ProtectedRout Component={Home} />} />
                    <Route path="/about" element={<ProtectedRout Component={About} />} />
                    <Route path="/contact/" element={<Contatct />} >
                        <Route path="compney" element={<Compney />} />
                        <Route path="chenel" element={<Chenel />} />
                        <Route path="address" element={<Address />} />
                    </Route>
                    <Route path="/user/:name" element={<ProtectedRout Component={PeramsRout} />} />
                    <Route path="/filter" element={<ProtectedRout Component={SerachComponent} />} />
                    {/* <Route path="/*" element={<Page404 />} /> */}
                    <Route path="/*" element={<Navigate to={"/"} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<ProtectedRout Component={Logout} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}