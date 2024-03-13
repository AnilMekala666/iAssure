import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Sidebar from './Component/sidebar';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import AssessmentDetails from './pages/AssessmentDetails';
import AssessmentsReport from './pages/AssessmentsReport';
import Schedule from './pages/Schedule';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import {Switch} from '@mui/material';
import Assessments from './pages/Assessments';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      <div>
        <Header />
        <div>
          <Sidebar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path='/assessmentDetails' element={<AssessmentDetails/>}/>
            <Route path='/assessmentsReport' element={<AssessmentsReport/>}/>
          </Routes>
        </div>
      </div>
    </Router>

  //   <Router>
  //   <Box sx={{ display: 'flex' }}>
  //     <CssBaseline />
  //     <Drawer variant="permanent" open={open}>
  //       {/* Your Drawer content */}
  //     </Drawer>
      
  //     <Box component="main" sx={{ flexGrow: 1 }}>
  //       <Header />
  //       <Switch>
  //         <Route exact path="/Home" component={Home} />
  //         <Route exact path="/Notification" component={Notification} />
  //         <Route exact path="/Assessment" component={Assessment} />
  //         <Route exact path="/Schedule" component={Schedule} />
  //         <Route exact path="/AssessmentsReport" component={AssessmentsReport} />
  //       </Switch>
  //     </Box>
  //   </Box>
  // </Router>
  );
}

export default App;
