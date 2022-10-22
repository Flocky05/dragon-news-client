import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Register = () => {
    const handleSubmite = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    }
    return (
        <Form onSubmit={handleSubmite}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photoURL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Enter photoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;