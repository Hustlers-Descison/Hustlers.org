import supabase from "../db/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
background-color: #ecf0f1;
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

export default function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event === "SIGNED_IN") {
            console.log("User is signed in");
            navigate("/login");
        }
    })

    return (
        <FormContainer>
            <div className="App">
            <header className="App-header">
                <Auth 
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                />
            </header>
            </div>
        </FormContainer>
    );
}