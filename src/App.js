import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import NoteMaker from './components/NoteMaker';
import Notes from "./components/Notes";
import EditModal from './components/EditModal';
import ShowModal from './components/ShowModal';

//Мой объект состояния заметки
/* const myState = [
  {id: date,
    date: time,
    text: createNote,
    tegs: ['#React', '#JS']
  }
] */

function App() {

  const [createNote, setcreateNote] = useState('');
  const [notesList, setNotesList] = useState([]);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState('');
  const [idEdit, setIdEdit] = useState('');
  const [search, setSearch] = useState('');

  console.log(search);

  //Добавить задачу
  const addToList = () => {
    const date = new Date();

    function change(param) {
      if (param <= 9) {
        return param = `0${param}`;
      };
      return param
    };

    let day = change(date.getDate());
    let month = change(date.getMonth() + 1);
    let hours = change(date.getHours());
    let minutes = change(date.getMinutes());

    const time = `${day}/${month}, ${hours}:${minutes}`;

    setNotesList(
      [...notesList, {
        id: date,
        date: time,
        text: createNote,
        tegs: [],
      }]
    );
    setcreateNote('');
  }

  //Удалить задачу
  const removeNode = (id) => {
    const filtered = notesList.filter(item => item.id !== id);
    setNotesList(filtered);
  }

  //Редактировать задачу
  const editNote = (id) => {
    const currentItem = notesList.find(item => item.id === id);
    setIdEdit(id);
    setEdit(currentItem.text);
    setModal(true);
  }

  //Сохранить изменения
  const saveEdit = (id) => {
    const currentItem = notesList.find(item => item.id === id);
    currentItem.text = edit;
    //setNotesList([...notesList], {
    // })
  }

  //Посмотреть задачу
  const showNote = (id) => {
    const currentItem = notesList.find(item => item.id === id);
    setEdit(currentItem.text);
    setShowModal(true);
  }

  return (
    <div className="wrapper">
      <ShowModal visible={showModal} setVisible={setShowModal} text={edit} />
      {<EditModal
        visible={modal}
        setVisible={setModal}
        setEdit={setEdit}
        text={edit}
        id={idEdit}
        saveEdit={saveEdit}
      >
      </EditModal>}
      <Header search={search} setSearch={setSearch} />
      <div className="hr" style={{ borderTop: "2px solid #dcdcdc ", marginLeft: 20, marginRight: 20 }}></div>
      <NoteMaker addToList={addToList} note={createNote} setNote={setcreateNote} />
      <Notes search={search} setNotesList={setNotesList} showNote={showNote} editNote={editNote} removeNode={removeNode} notesList={notesList} />
    </div>
  );
}

export default App;