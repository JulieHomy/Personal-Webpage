import './Home.css';

function Home({ setPage }) {
    return (
        <>
            <div id='main' className='introduction'>
                <h1 className='greeting'>Hi! 👋 <br />
                    I'm Julie - innovative <span className='designer-text'>designer</span> and <span className='developer-text'>developer</span>
                </h1>
                <div className='picture'>
                    <img className='profile-pic' src="/profilePic.JPG" alt="It's Julie! I was in Half Moon Bay enjoying the beach" />
                </div>
            </div>

            <h1 className='welcome-text'>Welcome to my site!</h1>

            <p className='findout'>
                <a className='findout-link' href='/about.html' onClick={(e) => { e.preventDefault(); setPage("About Me") }}>Find out more about me... 👉</a>
            </p>
        </>
    );
}

export default Home;