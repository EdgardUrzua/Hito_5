import React from 'react'
import { useState } from 'react'
import {Col, Row, Button, Form, Alert, Container, Card} from "react-bootstrap"

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
    
        if (!email || !password || !confirmPassword) {
          setMessage('Todos los campos son obligatorios');
          return;
        }
    
        if (password.length < 6) {
          setMessage('La contraseña debe tener al menos 6 caracteres');
          return;
        }
    
        if (password !== confirmPassword) {
          setMessage('Las contraseñas no coinciden');
          return;
        }
    
        setMessage('Registro exitoso');
        
      };

  return (
    <Container className="mt-5">
        <h1 className="text-center mb-4">Registro</h1>
        {message && <Alert variant="info">{message}</Alert>}

        <Form onSubmit={handleRegister}>
        <Card body className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '40vh' }}>
          <Form.Group as={Row} className="mb-3" controlId="formEmail">
            <Form.Label Column sm={4}>Email</Form.Label>
            <Col sm={200}>
                <Form.Control 
                type="email"
                placeholder="Introduce tu email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} requerid />
                </Col>
                </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPassword">
                <Form.Label Column sm={4}>Password</Form.Label>
                <Col sm={200}>
                <Form.Control
                type="password"
                placeholder="Introduce tu password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                </Col>                
            </Form.Group>

            <Form.Group as="Row" className="mb-3" controlId="formconfirmPassword">
              <Form.Label column sm={8}>Confirmar Password</Form.Label>
                <Col sm={200}>
                <Form.Control 
                type="password"
                placeholder="Confirma tu Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{span: 10, offset: 2}}>
            <Button type="submit" className="mt-3">Registrarse</Button>
            </Col>
            </Form.Group>
            </Card>
        </Form>
        </Container>
        
  )
}

export default RegisterPage;