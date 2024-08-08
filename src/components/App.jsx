import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [note,SetNote]=useState([]);

  function addNote(newNote){
    SetNote(prevNote=>{return [...prevNote,newNote]})}


  function deleteNote(id){
    SetNote(prevNote=>{
      return note.filter((_,index)=>{
        return index!=id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {note.map((newNote,index)=>(
      <Note key={index} id={index} title={newNote.title} content={newNote.content} deleteNote={deleteNote}/>))}
      <Footer />
    </div>
  );
}

export default App;
