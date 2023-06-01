import supabase from "../db/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            navigate("/");
        } else {
            navigate("/Chat");
        }
    })

    async function signOut() {
        const { error } = await supabase.auth.signOut();
    }

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