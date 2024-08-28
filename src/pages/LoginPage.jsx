import React from "react";
import { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setMessage("Inicio de sesión exitoso");
  };
  return (
    <div>
      <h1>Login</h1>
      {message && <Alert variant="info">{message}</Alert>}
      <form onSubmit={handleLogin}>
        <Card body className="mb-3">
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="mt-3">Iniciar Sesion</Button>
        </Card>
      </form>
    </div>
  );
};

export default LoginPage;