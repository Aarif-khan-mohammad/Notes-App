import React from 'react'
import { NoteItemContainer, NoteItemTitle,NoteItemDescription } from './styledComponents'

const NoteItem = (props) => {
  const {noteDetails} = props
  const {title , note} = noteDetails
  return (
    <NoteItemContainer>
      <NoteItemTitle>{title}</NoteItemTitle>
      <NoteItemDescription>{note}</NoteItemDescription>
    </NoteItemContainer>
  )
}

export default NoteItem
