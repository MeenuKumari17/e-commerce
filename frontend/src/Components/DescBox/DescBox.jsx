import React from 'react'
import './DescBox.css'

const DescBox = () => {
  return (
    <div className='descbox'>
        <div className="descbox-navigator">
            <div className="descbox-nav-box">Description</div>
            <div className="descbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descbox-desc">
            <p>
                An e-commerce website is an online plattform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where business and individuals can showcase their products, interact with customers, and consuct transactions without the need for a physical presence. E-commerce website have gained immense popularity due to their conveniencce, accessibility, and the global reach they offer.
            </p>
            <p>
                E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescBox