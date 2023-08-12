import { useState } from 'react';
import './Carousel.css';

function Carousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevPicture) => (prevPicture === 0 ? pictures.length - 1 : prevPicture - 1));
    }

    const prevSlide = () => {
        setCurrentSlide((prevPicture) => (prevPicture === pictures.length - 1 ? 0 : prevPicture + 1));
    }


    return (

        <div className='carousel'>
            <div className='image-container'>
                <img className='carousel-picture'
                    src={pictures[currentSlide].path}
                    alt={`${pictures[currentSlide].name}`} />
            </div>

            <p className='picture-description'>{pictures[currentSlide].name}</p>
            <div className='carousel-button'>
                <button className='left-button' aria-label='Click for previous slide' onClick={prevSlide}>
                    <i class="gg-chevron-left"></i>
                    </button>
                <button className='right-button' aria-label='Click for next slide' onClick={nextSlide}>
                    <i class="gg-chevron-right">
                        </i></button>
            </div>
        </div>

    );
}

export default Carousel;