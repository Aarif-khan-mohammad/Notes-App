import React from 'react'
import { useState } from 'react'
import NoteItem from '../NoteItem'
import { Button, Heading, InputContainer, InputElement, 
    MainContainer, NotesContainer , NoNoteImage ,NoNoteContainer,  
    NoNoteYet} from './styledComponents'
const Note = () => {
    const [title , setTitle] = useState()
    const [note , setNote] = useState()
    const [noteList , setNoteList] = useState([])


    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeNote = (event) => {
        setNote(event.target.value)
    }

    const onAddNote = (event)=>{
        event.preventDefault()
        const newNote = {
            title : title,
            note : note
        }
        setNoteList(prevNote =>[...prevNote , newNote])
        setTitle("")
        setNote("")
    }

  return (
    <MainContainer>
      <Heading>Note</Heading>
      <InputContainer onSubmit={onAddNote}>
        <InputElement type="text" onChange={onChangeTitle} value={title} placeholder='Title' />
        <InputElement  type="text" onChange={onChangeNote} value ={note} placeholder='Take a Note ...' ></InputElement>
        <Button type='submit' >Add</Button>
      </InputContainer>
      <NotesContainer>
        
        { noteList.length===0 ? 
        <NoNoteContainer>
            <NoNoteImage src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png " alt="No Note"/> 
            <NoNoteYet>No Note Yet</NoNoteYet>
        </NoNoteContainer>
        : (noteList.map(eachNote => (
            <NoteItem noteDetails={eachNote} key={eachNote.key} />)
        ))}
      </NotesContainer>
    </MainContainer>
  )
}

export default Note
