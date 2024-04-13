import styled from 'styled-components';

export const NoteItemContainer = styled.li`
    display:flex;
    flex-direction:column;
    padding-left:0.8rem;
    flex-wrap:wrap;
    border:1px solid #aab8c8;
    border-radius:1rem;
    background-color: #d8d8d8 ;
    width:28%;

`

export const NoteItemTitle = styled.h3`
    font-size:1.5rem;
    font-weight:bold;
    color:#334155;
`

export const NoteItemDescription = styled.p`
    font-size:1rem;
    font-family:"Roboto";
    flex-wrap:wrap;
    color: ##334155;
    

    @media screen and (max-width: 768px) {
        font-size:1rem;
    }

`