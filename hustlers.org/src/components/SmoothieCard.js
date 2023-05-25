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
export default function SmoothieCard ({ smoothie, onDelete }){

    const handleDelete = async () =>{
        const {data, error} = await supabase
        .from('smoothies')
        .delete()
        .eq('id', smoothie.id)
        .select()

        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
            onDelete(smoothie.id)
        }
    }

    return(
        <BodyWrapper>
        <div className="smothie-card">
            <h3>{smoothie.title}</h3>
            <p>{smoothie.method}</p>
            <div className="rating">{smoothie.rating}</div>
            <div className="buttons">
                <Link to={'/' + smoothie.id}>
                    <i>edit</i>
                </Link>
                <span onClick={handleDelete}><i>delete</i></span>
            </div>
        </div>
        </BodyWrapper>
    )
}
