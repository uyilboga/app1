import sliderFrame from '@/assets/images/bg/mobile_frame.svg';
import messageIcon from '@/assets/images/shapes/message_icon.png';
import shieldIcon from '@/assets/images/shapes/shield_icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

function BannerSlider() {
  const [slides] = useState([
    { name: 'slide1', path: '/images/screen1.png' },
    { name: 'slide2', path: '/images/screen1.png' },
    { name: 'slide3', path: '/images/screen1.png' },
  ]);

  return (
    <div className="banner-slider">
      <div className="slider-frame">
        <img src={sliderFrame.src} alt="Mobile Frame" />
      </div>
      <Swiper slidesPerView={1} autoplay speed={600} loop pagination={{ clickable: true }} modules={[Pagination]} className="banner-swiper">
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mobile-img">
              <img src={item.path} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="left-icon">
        <img src={messageIcon.src} alt="" />
      </div>
      <div className="right-icon">
        <img src={shieldIcon.src} alt="" />
      </div>
    </div>
  );
}

export default BannerSlider;
