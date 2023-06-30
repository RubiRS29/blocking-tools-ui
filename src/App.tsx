import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import NavbarMain from './components/navbar/Navbar';
import Dashboard from "./pages/dashboard/Dashboard";
import ApprovedRejectRequest from "./pages/approvedRejectRequest/ApprovedRejectRequest";
import NewBlocking from "./pages/newBlocking/NewBlocking";
import NewMassDelete from "./pages/newMassDelete/NewMassDelete";
import NewRefreshStore from "./pages/newRefreshStore/NewRefreshStore";
import NewCloneStore from "./pages/newCloneStore/NewCloneStore";
import Report from "./pages/report/Report";

function App() {

  return (
      <>
          <Router>
              <NavbarMain />
              <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/requestApproval' element={<ApprovedRejectRequest />} />
                  <Route path='/blockingRequest' element={<NewBlocking />} />
                  <Route path='/massDelete' element={<NewMassDelete />} />
                  <Route path='/refreshStore' element={<NewRefreshStore />} />
                  <Route path='/cloneStore' element={<NewCloneStore />} />
                  <Route path='/report' element={<Report />} />
              </Routes>

          </Router>


      </>


  );


}

export default App;
