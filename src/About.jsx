import './About.css';
import Carousel from './Carousel';
import pictures from './pictures';

function About() {
    return (
        <>
        <h2 id='main' className='about-page__subtitle'>My Dream: Travel Around The World!</h2>
       
        <Carousel pictures={pictures}/>
        </>
    );
}

export default About;