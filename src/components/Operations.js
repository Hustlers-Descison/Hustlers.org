import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import  supabase  from "../db/supabaseClient";
import styled from "styled-components";

const BodyWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 20px;
`
export default function Operations ({ chatMessage, onDelete }){

    const handleDelete = async () =>{
        const {data, error} = await supabase
        .from('chatMessage')
        .delete()
        .eq('id', chatMessage.id)
        .select()

        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
            onDelete(chatMessage.id)
        }
    }

    return(
        <BodyWrapper>
        <div className="chat-message">
            <p>{chatMessage.message}</p>
            <div className="message">{chatMessage.message}</div>
            <div className="buttons">
                <Link to={'/' + chatMessage.id}>
                    <i>edit</i>
                </Link>
                <span onClick={handleDelete}><i>delete</i></span>
            </div>
        </div>
        </BodyWrapper>
    )
}