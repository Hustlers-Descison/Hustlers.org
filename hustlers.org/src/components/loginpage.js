import supabase from "../db/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_IN") {
            console.log("User is signed in");
            navigate("/");
        } else {
            console.log("User is signed out");
            navigate("/Login");
        }
    })

    return (
        <div className="App">
            <header className="App-header">
                <Auth 
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                />
            </header>
        </div>
    );
}