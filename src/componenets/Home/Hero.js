import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';


import './Home.css';

const movieData = [
  {
    name: "The Hunger Games: The Ballad of Songbirds & Snakes",
    overview: "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    image: "https://www.koimoi.com/wp-content/new-galleries/2023/11/the-hunger-games-the-ballad-of-songbirds-snakes-director-breaks-silence-on-making-the-longest-run-time-film-amongst-all-the-installments-i-dont-care-if.jpg",
  },
  {
    name: "Dead Silence",
    overview: "After his wife meets a grisly end, Jamie Ashen returns to his hometown of Ravens Fair to find answers. His investigation leads him to the ghost of a ventriloquist named Mary Shaw who seems to have ties to his entire family tree",
    image: "https://karablogssite.files.wordpress.com/2017/08/dead-silence-gallery-10.jpg",
  },
  {
    name: "LA LA LAND",
    overview: "La La Land is a 2016 American musical romance film. The movie is about a struggling jazz pianist and an aspiring actress who fall in love while pursuing their dreams in Los Angeles. The movie stars Ryan Gosling and Emma Stone as Sebastian and Mia, respectively",
    image: "https://miro.medium.com/v2/resize:fit:2000/0*Pi_2-cKGOLZeXQfL",
  },
];

const Hero = () => {
  return (
    <div className='swipe'>
      <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: true,
         }}
         pagination={true}
         modules={[EffectCoverflow, Pagination]}
         loop={true}
         autoplay={{ delay: 1000 }}
      >
        {movieData.map((movie, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <div className='image'>
              <img src={movie.image} alt={movie.name} />
            </div>
            <div className='text'>
              <h1>{movie.name}</h1>
              <p>{movie.overview}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
