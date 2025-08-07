import { useState } from 'react';
import reactLogo from './../../assets/react.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  const [focusIn, setFocusIn] = useState(false);

  return (
    <>
      <Container className="container-xxl bd-gutter mt-5">
        <Col md={8} className="mx-auto text-center">
          <a href="https://react.dev" target="_blank">
            <img 
              className="logo react img-fluid mx-auto mb-3" 
              src={reactLogo} 
              alt="React logo" 
              width="200"
              height="165"
            />
          </a>
          <h1 className="mb-3 fw-semibold lh-1">Welcome to my React App</h1>
          <p className="lead mb-4">
            Here you can find examples of React components, including a simple CRUD application.
            <br />
            These are some things I've been working on while learning React.
            <br />
            <span className="text-body-secondary">
              This app is built with React 19.1.0 and Bootstrap 5.3.7.
            </span>
          </p>
        </Col>
      </Container>

      <Row>
        <Col className="text-center">
          <h5
            tabIndex={0}
            onMouseEnter={() => setFocusIn(true)}
            onMouseLeave={() => setFocusIn(false)}
            className={focusIn ? 'fa-beat' : ''}
          >
            <a href="https://jpbalan7.onrender.com/">
              Read more about me <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </a>
          </h5>
        </Col>
      </Row>
    </>
  );
}

export default Home;