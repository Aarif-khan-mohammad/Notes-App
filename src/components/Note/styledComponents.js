import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #fff;
    height:100%;
    width:100%;
    display: flex;
    padding-bottom:2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Heading = styled.h1`
    color: #4c63b6;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family:"Bree Serif" ;
    font-weight:bold;
`
export const InputContainer = styled.form`
    display: flex;
    width:45%;
    height:30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`

export const InputElement = styled.input`
    width: 60%;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid #4c63b6;
    margin-bottom: 1rem;
    padding-left:2rem;
    
`

export const Button = styled.button`
    width: 10%;
    height: 3rem;
    border-radius: 10px;
    background-color: #4c63b6;
    margin-bottom: 1rem;
    margin-left :55%;
    color:white;
    border:none;
    cursor :pointer;
`

export const NotesContainer = styled.ul`
    display: flex;
    flex-direction:row;
    grid-gap: 1rem;
    width:50%;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
`

export const NoNoteImage = styled.img`
    width: 10%;
    height: 10%;
`

export const NoNoteYet = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    color: #4c63b6;
`

export const NoNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    align-items: center;
    justify-content: center;
    padding-top:4rem;

`

