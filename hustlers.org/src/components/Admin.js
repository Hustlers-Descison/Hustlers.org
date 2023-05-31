import React, { useState } from 'react';
import styled from 'styled-components';
import supabase from '../db/supabaseClient';


const UserPortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
`;

// export default function UserPortal() {
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [registerEmail, setRegisterEmail] = useState('');
//   const [registerPassword, setRegisterPassword] = useState('');
//   const [formError, setFormError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const { error } = await supabase.auth.signIn({
//         email: loginEmail,
//         password: loginPassword,
//       });

//       if (error) {
//         setFormError('Invalid email or password.');
//       } else {
//         setFormError(null);
//         // Successful login, proceed with sending the message
//         await sendMessage();
//       }
//     } catch (error) {
//       console.log(error);
//       setFormError('An error occurred while logging in.');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const { user, error } = await supabase.auth.signUp({
//         email: registerEmail,
//         password: registerPassword,
//       });

//       if (error) {
//         setFormError('An error occurred while registering.');
//       } else {
//         setFormError(null);
//         console.log(user);
//       }
//     } catch (error) {
//       console.log(error);
//       setFormError('An error occurred while registering.');
//     }
//   };

  const sendMessage = async () => {
    try {
      const user = supabase.auth.user();
      if (!user) {
        setFormError('You must be logged in to send a message.');
        return;
      }

      const { data, error } = await supabase
        .from('messages')
        .insert([{ userId: user.id, message: 'Hello, Supabase!' }])
        .select();

      if (error) {
        console.log(error);
        setFormError('An error occurred while sending the message.');
      } else {
        console.log(data);
        setFormError(null);
      }
    } catch (error) {
      console.log(error);
      setFormError('An error occurred while sending the message.');
    }
  };

  return (
//     <UserPortalWrapper>
//       <h2>User Portal</h2>
//       <FormWrapper onSubmit={handleLogin}>
//         <Input
//           type="email"
//           placeholder="Email"
//           value={loginEmail}
//           onChange={(e) => setLoginEmail(e.target.value)}
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           value={loginPassword}
//           onChange={(e) => setLoginPassword(e.target.value)}
//         />
//         <Button type="submit">Login</Button>
//       </FormWrapper>
//       <p>Don't have an account yet? Register below.</p>
//       <Button onClick={() => setFormError(null)}>Register</Button>
//       {formError && <ErrorText>{formError}</ErrorText>}
//       {formError !== null && (
//         <FormWrapper onSubmit={handleRegister}>
//           <Input
//             type="email"
//             placeholder="Email"
//             value={registerEmail}
//             onChange={(e) => setRegisterEmail(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={registerPassword}
//             onChange={(e) => setRegisterPassword(e.target.value)}
//           />
//           <Button  type="submit">Register</Button>
//         </FormWrapper>
//       )}
//     </UserPortalWrapper>
  );
}
