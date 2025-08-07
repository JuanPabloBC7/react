import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SimpleCrud() {
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    birthday: '', 
    email: '', 
    description: '', 
  });
  const [touched, setTouched] = useState({ 
    firstName: false, 
    lastName: false, 
    birthday: false, 
    email: false, 
    description: false, 
   });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (form.firstName.trim() === '' || form.lastName.trim() === '') {
    //   setTouched({ firstName: true, lastName: true });
    //   return;
    // }
    console.log('Form submitted:', form);
    setForm({ firstName: '', lastName: '', birthday: '', email: '', description: '' });
    setTouched({ firstName: false, lastName: false, birthday: false, email: false, description: false });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Simple CRUD</Card.Title>
          <Card.Text>
            This is a simple form where you can create, read, update and delete user 
            information without using an API.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mt-3'>
        <Card.Body>
          <Card.Title>User Form</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              {/* First Name */}
              <Form.Group as={Col} xs={12} sm={6} className='mt-0' controlId="firstname">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isInvalid={touched.firstName && form.firstName.trim() === ''}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
              {/* Last Name */}
              <Form.Group as={Col} xs={12} sm={6} className='mt-0' controlId="lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isInvalid={touched.lastName && form.lastName.trim() === ''}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
              {/* Birthday */}
              <Form.Group as={Col} xs={12} sm={6} className='mt-3' controlId="birthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  type="text"
                  name="birthday"
                  placeholder="Birthday"
                  value={form.birthday}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isInvalid={touched.birthday && form.birthday.trim() === ''}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
              {/* Email */}
              <Form.Group as={Col} xs={12} sm={6} className='mt-3' controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isInvalid={touched.email && form.email.trim() === ''}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
              {/* Description */}
              <Form.Group as={Col} xs={12} sm={12} className='mt-3' controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea" 
                  name="description"
                  placeholder="Description"
                  rows={3}
                  value={form.description}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isInvalid={touched.description && form.description.trim() === ''}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default SimpleCrud;
