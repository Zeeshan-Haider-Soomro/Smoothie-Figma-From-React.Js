import React, { useState } from 'react'
// import {Button,Card} from 'react-bootstrap'
// import Modal from './Components/Modal'
// import Product from './Components/Product';
// import Blogs from './Components/Blogs';
import JuiceProduct from './Components/JuiceProduct/JuiceProduct';
import Header from './Components/Header/Header';

const App = () => {
  // const [number, setNumbers] = useState([1,2,3,4,'a']);
  // return (
  //   <div>
  //     {number.map((item,index)=> {
  //       return (  
  //         <Card key={index} style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Card Title</Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card&apos;s content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //       ) 
  //     })}
  //   </div>
  // )

  // ****************useState for number increment & decrement*************

  // const [number, setNumber] = useState(0);
  // return (
  //   <div className='d-flex justify-content-center align-items-center'>
  //     <Button onClick={()=> setNumber(number + 1)} variant="primary">+</Button>
  //     <p>{number}</p>
  //     <Button onClick={()=> setNumber(number - 1)} variant="primary">-</Button>
  //   </div>
  // )

  // *************************useState for modal***************************

//   const [modal, setModal] = useState(false);
//   const closeModal = () => {
//     setModal(false);
//   }
//   return (
//     <div className='d-flex justify-content-center align-items-center'>
//       {modal && 
//       <>
//       <button onClick={closeModal}>Close Modal</button>
//       <p>I am Modal</p>
//       </>
//       }
//       <button onClick={()=> setModal(true)}>Open Modal</button>
//     </div>
//   )

  // const [modal, setModal] = useState(false);
  return (
    <div className='bgColor'>
      {/* <button onClick={()=>setModal(true)}>Open Modal</button>
      <Modal modal ={modal} setModal={setModal}/>
      <Product/>
      <Blogs /> */}
      <Header />
      <JuiceProduct />
    </div>
  )
}

export default App
