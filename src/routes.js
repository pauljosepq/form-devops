import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from "./Register";
import Homepage from './Homepage';
import ProtectedRoute from "./protected-route";

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route path="/" element={<ProtectedRoute/>}>
                    <Route path="/users" element={<Homepage/>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AllRoutes;
