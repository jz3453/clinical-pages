import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page from './components/Page';
import TrialPage from './components/TrialPage';
//import Tree from './components/Tree/Tree';
import Tree from './components/Tree';
import { structure } from './components/constants';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route exact path="/:TrialId" element={<TrialPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
/*
<Route exact path="/" element={<Page />} />
        <Route exact path="/:TrialId" element={<TrialPage />} />
        <Route exact path="/" element={<Tree data={structure}/>} />
*/
