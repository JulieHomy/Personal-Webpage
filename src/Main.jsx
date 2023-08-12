import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';

function Main({page, setPage}) {
    return (
        <main className="main">
            { (page === 'Home') && <Home setPage={setPage}/> }
            { (page === 'About Me') && <About/> }
            { (page === 'Education') && <Education/> }
            { (page === 'Experience') && <Experience/> }
            { (page === 'Contact') && <Contact/> }
        </main>
    );
}

export default Main;