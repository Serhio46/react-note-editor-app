import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import NoteMaker from './components/NoteMaker';
import Notes from "./components/Notes";
import EditModal from './components/EditModal';

function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="wrapper">
      <EditModal />
      <Header search={search} setSearch={setSearch} />
      <div className="hr" style={{ borderTop: "2px solid #dcdcdc ", marginLeft: 20, marginRight: 20 }}></div>
      <NoteMaker />
      <Notes search={search} />
    </div>
  );
}

export default App;
