import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from "react-bootstrap";


const Login = () => {
    return (
        <div className="login-part">
            <h3 className="login-part-title">로그인 화면</h3>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" ></InputGroup.Checkbox>
                <FormControl aria-label="Text input with checkbox"></FormControl>
            </InputGroup>
            <InputGroup>
                <InputGroup.Radio aria-label="Radio button for following text input" />
                <FormControl aria-label="Text input with radio button" type="password"></FormControl>
            </InputGroup>
            <br></br>
            <Button variant="primary">제출</Button>{' '}
        </div>
    )
}

export default Login
