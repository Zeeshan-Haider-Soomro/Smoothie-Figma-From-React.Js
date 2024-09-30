import React from 'react'

const Header = () => {
  return (
    <div className='d-flex justify-content-between'>
      <div>
        <img className='ms-5 ps-5 mt-4' src="./Assets/imgs/smoothie.png" alt="" />
      </div>
      <div>
        <ul className='d-flex me-5 mt-4 gap-5'>
            <li>
                <a className='text-dark' href="">Home</a>
            </li>
            <li>
                <a className='text-dark' href="">Specialties</a>
            </li>
            <li>
                <a className='text-dark' href="">About</a>
            </li>
            <li>
                <a className='text-danger' href="">Contact Us</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
