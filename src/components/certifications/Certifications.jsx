import React from 'react'
import './certifications.css'
import AVTAR1 from '../../assets/avatar1.jpg'
import AVTAR2 from '../../assets/avatar2.jpg'
import AVTAR3 from '../../assets/avatar3.jpg'
import AVTAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTAR1,
    name : 'Krishna Bhosle',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis sed placeat laborum aut illo ratione, nisi aspernatur itaque adipisci maxime, velit, ab doloremque eveniet similique soluta cupiditate iste! Eos.'
  },
  {
    avatar:AVTAR2,
    name : 'Krishna Bhosle',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis sed placeat laborum aut illo ratione, nisi aspernatur itaque adipisci maxime, velit, ab doloremque eveniet similique soluta cupiditate iste! Eos.'
  },
  {
    avatar:AVTAR3,
    name : 'Krishna Bhosle',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis sed placeat laborum aut illo ratione, nisi aspernatur itaque adipisci maxime, velit, ab doloremque eveniet similique soluta cupiditate iste! Eos.'
  },
  {
    avatar:AVTAR4,
    name : 'Krishna Bhosle',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis sed placeat laborum aut illo ratione, nisi aspernatur itaque adipisci maxime, velit, ab doloremque eveniet similique soluta cupiditate iste! Eos.'
  }
]

const Certifications = () => {
  return (
    <section id = "certifications">
      <h5>My Achievements</h5>
      <h2>Certifications</h2>

      <Swiper className="container certifications__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40} 
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='certifications'>
            <div className="client__avatar">
              <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Certifications
