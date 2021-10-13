import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { NoteDetails } from './NoteDetails';
import { NoteList } from './NoteList';


export const App = () => {
  return (
    <Router>
        <Route path="/" exact component={NoteList} /> 
        <Route path="/:id" component={NoteDetails} /> 
    </Router>
  );
}

