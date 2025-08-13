import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AlertNotify from '../common/ui/Alert';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SimpleCrud() {
  const [showViewUserModal, setShowViewUserModal] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCloseViewUserModal = () => setShowViewUserModal(false);
  const handleCloseDeleteUserModal = () => setShowDeleteUserModal(false);

  // formulario
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    birthday: '', 
    email: '', 
    description: '', 
  });
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
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
  const [alert, setAlert] = useState({
    type: '',
    message: '',
    icon: '',
    show: false,
  });

  // Validación del formulario
  const isFormValid = Object.values(form).every(value => value.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleAlertClose = () => {
    setAlert({ ...alert, show: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setUsers([
        ...users,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          birthday: form.birthday,
          email: form.email,
          description: form.description,
        }
      ]);
      setAlert({ type: 'success', title: 'Success', message: 'User added successfully!', icon: 'fa-solid fa-circle-check', show: true, });
      setForm({ firstName: '', lastName: '', birthday: '', email: '', description: '' });
      setTouched({ firstName: false, lastName: false, birthday: false, email: false, description: false });
    } else {
      setAlert({ type: 'danger', title: 'Error', message: 'Please fill in all fields.', icon: 'fa-solid fa-circle-xmark', show: true, });
      setTouched({ firstName: true, lastName: true, birthday: true, email: true, description: true });
    }

    setTimeout(() => {
      setAlert({ show: false, title: '', message: '' });
    }, 4000);
  };

  const viewUser = (userSelected, idxSelected, modal) => {
    setUser({
      firstName: userSelected.firstName,
      lastName: userSelected.lastName,
      birthday: userSelected.birthday,
      email: userSelected.email,
      description: userSelected.description,
    });

    if (modal === 'setShowViewUserModal') {
      setShowViewUserModal(true);
    } else if (modal === 'setShowDeleteUserModal') {
      setShowDeleteUserModal(true);
    }
  }

  const editUser = (userSelected) => {
    setIsEditing(true);
    setForm({
      firstName: userSelected.firstName,
      lastName: userSelected.lastName,
      birthday: userSelected.birthday,
      email: userSelected.email,
      description: userSelected.description
    });
  }

  const updateUser = () => {
    if (isFormValid) {
      const index = users.findIndex(u => u.email === user.email);

      if (index !== -1) {
        const updatedUsers = [...users];
        updatedUsers[index] = { ...form };
        setUsers(updatedUsers);
        setAlert({ type: 'success', title: 'Success', message: 'User updated successfully!', icon: 'fa-solid fa-circle-check', show: true, });
      }

      setForm({ firstName: '', lastName: '', birthday: '', email: '', description: '' });
      setIsEditing(false);
    } else {
      setAlert({ type: 'danger', title: 'Error', message: 'Something is wrong, please try again later.', icon: 'fa-solid fa-circle-xmark', show: true, });
    }

    setTimeout(() => {
      setAlert({ show: false, title: '', message: '' });
    }, 4000);
  }

  const deleteUser = () => {
    const index = users.findIndex(u => u.email === user.email);
    if (index !== -1) {
      users.splice(index, 1);

      setAlert({ type: 'success', title: 'Success', message: 'User deleted successfully!', icon: 'fa-solid fa-circle-check', show: true, });
    }

    setShowDeleteUserModal(false);
    setTimeout(() => {
      setAlert({ show: false, title: '', message: '' });
    }, 4000);
  }
  
  const clearForm = () => {
    setForm({ firstName: '', lastName: '', birthday: '', email: '', description: '' });
    setIsEditing(false);
  }

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
      {/* User Form */}
      <Card className='mt-3'>
        <Card.Body>
          <Card.Title>User Form</Card.Title>
          {/* Form */}
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
            <Row>
              <Col className='text-center' xs={12}>
                { !isEditing ? (
                  <Button type="submit" disabled={!isFormValid}>Submit user</Button>
                ) : (
                  <>
                    <Button type="button" variant="secondary" className='me-2' onClick={() => clearForm(user)}>Cancel</Button>
                    <Button type="button" disabled={!isFormValid} onClick={() => updateUser(user)}>Update user</Button>
                  </>
                )}
              </Col>
            </Row>
          </Form>

          {/* Alert */}
          <Row className='mt-3'>
            <Col>
              <AlertNotify 
                type={alert.type} 
                title={alert.title} 
                message={alert.message} 
                icon={alert.icon} 
                show={alert.show} 
                onClose={handleAlertClose} 
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Table */}
      <Card className='mt-3 mb-5'>
        <Card.Body>
          <Table responsive striped hover>
            <thead className='table-light'>
              <tr>
                <th>Fristname</th>
                <th>Lastname</th>
                <th>Birthday</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.birthday}</td>
                  <td>{user.email}</td>
                  <td>
                    <Row className='text-center'>
                      <Col xs={12} sm={4}>
                        <Button type="button" variant='link' onClick={() => viewUser(user, idx, 'setShowViewUserModal')}><FontAwesomeIcon icon="fa-solid fa-eye" className='text-primary-emphasis'/></Button>
                      </Col>
                      <Col xs={12} sm={4}>
                        <Button type="button" variant='link' onClick={() => editUser(user)}><FontAwesomeIcon icon="fa-solid fa-pen-to-square" className='text-warning-emphasis'/></Button>
                      </Col>
                      <Col xs={12} sm={4}>
                        <Button type="button" variant='link' onClick={() => viewUser(user, idx, 'setShowDeleteUserModal')}><FontAwesomeIcon icon="fa-solid fa-trash" className='text-danger-emphasis'/></Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
            { users.length === 0 && 
            <p className="text-center">There is no data to display in the table.</p> }
        </Card.Body>
      </Card>

      {/* View User Modal */}
      <Modal show={showViewUserModal} onHide={handleCloseViewUserModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} sm={6} className='mt-0' controlId="firstname">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="firstName" placeholder="First name" value={user.firstName} readOnly/>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={6} className='mt-0' controlId="lastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Last name" value={user.lastName} readOnly/>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={6} className='mt-3' controlId="birthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="text" name="birthday" placeholder="Birthday" value={user.birthday} readOnly/>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={6} className='mt-3' controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Email" value={user.email} readOnly/>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} className='mt-3' controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea"  name="description" placeholder="Description" rows={3} value={user.description} readOnly/>
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseViewUserModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete User Modal */}
      <Modal show={showDeleteUserModal} onHide={handleCloseDeleteUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <p as={Col} xs={12} sm={12} className='mb-2'>Are you sure you want to delete the user <strong>{ user.firstName } { user.lastName }</strong>?</p>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteUserModal}>Close</Button>
          <Button variant="danger" onClick={deleteUser}>Delete user</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SimpleCrud;
