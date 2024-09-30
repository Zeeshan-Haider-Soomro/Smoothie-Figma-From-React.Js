import React, { useState } from 'react'
import { productData } from '../../Utils/Product'
import './JuiceProduct.css'
import 'animate.css';

const JuiceProduct = () => {

    const [filter, setFilter] = useState(productData[0].mainJuice)
    const filterImage = (id) => {
        const filterData = productData.find((item)=> {
            return item.id == id
        })
        if (filterData) {
          setFilter(filterData.commonJuice); // Set the clicked image as the main image
        }
        // console.log(filterData); 
        // setFilter(filterData);
    }
    console.log(filter);

  return (
    <div className='d-flex gapped p-3'>
      <div>
        <img className='marginTop animate__animated animate__fadeIn' src={filter} alt="" />
      </div>
      <div>
        <img className='smoothies' src="./Assets/imgs/Content.png" alt="" />
        <div className='d-flex gap-5 mt-5 pt-5'>
        {productData.map((value)=> {
            return (
                <div onClick={()=> {filterImage(value.id)}} key={value.id}>
                    <img className='commonImg cursor' src={value.commonJuice} alt="" />
                </div>
            )
        })}
        </div>
      </div>
    </div>
  )
}

export default JuiceProduct

// animate.css
