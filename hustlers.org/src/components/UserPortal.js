// ///import React, { useState } from 'react';
// import styled from 'styled-components';
// import supabase from '../db/supabaseClient';

// const UserPortalWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 70px;
// `;

// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 0.5rem 1rem;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const ErrorText = styled.p`
//   color: red;
// `;

// export default function UserPortal() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [formError, setFormError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const { error } = await supabase.auth.signIn({ email, password });

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

//   const sendMessage = async () => {
//     try {
//       const user = supabase.auth.user();
//       if (!user) {
//         setFormError('You must be logged in to send a message.');
//         return;
//       }

//       const { data, error } = await supabase
//         .from('messages')
//         .insert([{ userId: user.id, message: 'Hello, Supabase!' }])
//         .select();

//       if (error) {
//         console.log(error);
//         setFormError('An error occurred while sending the message.');
//       } else {
//         console.log(data);
//         setFormError(null);
//       }
//     } catch (error) {
//       console.log(error);
//       setFormError('An error occurred while sending the message.');
//     }
//   };

//   return (
//     <UserPortalWrapper>
//       <h2>REGISTER YOUR SOUL AWAY MUHHAAHAHA Portal</h2>
//       <LoginForm onSubmit={handleLogin}>
//         <Input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button type="submit">Login</Button>
//         {formError && <ErrorText>{formError}</ErrorText>}
//       </LoginForm>
//     </UserPortalWrapper>
//   );
// } 


