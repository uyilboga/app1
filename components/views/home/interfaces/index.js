import { Container } from 'react-bootstrap';
import SectionTitle from '@/components/shared/sectionTitle';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import InterfaceItem from './InterfaceItem';
import 'swiper/css';
import 'swiper/css/pagination';

function Interfaces() {
  const [slides] = useState([
    { name: 'screen1', imagePath: '/images/home/slider/screen1.png' },
    { name: 'screen2', imagePath: '/images/home/slider/screen2.png' },
    { name: 'screen3', imagePath: '/images/home/slider/screen3.png' },
    { name: 'screen4', imagePath: '/images/home/slider/screen4.png' },
    { name: 'screen5', imagePath: '/images/home/slider/screen5.png' },
    { name: 'screen6', imagePath: '/images/home/slider/screen6.png' },
    { name: 'screen7', imagePath: '/images/home/slider/screen6.png' },
    { name: 'screen8', imagePath: '/images/home/slider/screen6.png' },
  ]);

  const [sectionContent] = useState({
    title: '<span>Beautiful</span> Interface',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typese tting <br> indus orem Ipsum has beenthe standard dummy.',
  });

  return (
    <div className="interfaces">
      <Container fluid>
        <SectionTitle title={sectionContent.title} desc={sectionContent.desc} />
        <Swiper
          slidesPerView={5}
          spaceBetween={50}
          autoplay={{ delay: 5000 }}
          speed={800}
          breakpoints={{
            1200: {
              slidesPerView: 5,
            },
            767: {
              slidesPerView: 3,
            },
            300: {
              slidesPerView: 1,
            },
          }}
          loop
          centeredSlides
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <InterfaceItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default Interfaces;
