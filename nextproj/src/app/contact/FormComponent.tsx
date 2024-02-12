"use client"
import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { ok } from "assert"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  gap: 1rem;
  align-items: center;
  padding-top: 5rem;
  @media (min-width: 800px) {
    grid-column: 2/3;
  }
`
const StyledInput = styled.input`
width: 50%;
height: 30px;
border-radius: 12px;
`
const StyledLabel = styled.label`
width: 50%;
height: 30px;
border-radius: 12px;
`
const StyledTextArea = styled.textarea`
width: 50%;
border-radius: 12px;
height: 100px;
`
const StyledButton = styled.button`
width: fit-content;
padding: 20px 32px;
border-radius: 12px;
`
export default function ContactForm(){
const [subject, setSubject] = useState("")
const [message, setMessage] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data = {
      subject: subject,
      message: message,
      name: name,
      email: email,
    }
   try {
    const responce = await fetch('/api', {
      method:'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    })
    const resData = await responce.json()
    if(responce.ok){
      console.log("successful")
      console.log(JSON.stringify(data))
      console.log(resData)
    } else{
      console.log("Request failed", responce.status, responce.statusText)
    }
   } catch (error) {
    console.log("error: ", error )
   }
  }

  return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} minLength={2} required/>

        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} minLength={6} required/>

        <StyledLabel htmlFor="subject">Subject:</StyledLabel>
        <StyledInput type="text" id="subject" name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)} minLength={2} required/>

        <StyledLabel htmlFor="message">Message:</StyledLabel>
        <StyledTextArea id="message" name="message" minLength={2} value={message} onChange={(e)=> setMessage(e.target.value)} required></StyledTextArea>

        <StyledButton type="submit">Send Form</StyledButton>
      </StyledForm>
  )
} 