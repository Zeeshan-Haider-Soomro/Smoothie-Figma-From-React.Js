import React, { useState } from 'react'
import Modal from './Common/Modal/Modal';
import { Button, Card } from 'react-bootstrap';

const Blogs = () => {
    const [blogModal,setBlogModal] = useState(false);
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={()=>setBlogModal(true)} variant="primary">Go somewhere</Button>
        <Modal modal={blogModal} setModal={setBlogModal}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Blogs
