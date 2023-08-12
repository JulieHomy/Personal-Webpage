import './Education.css';
import EducationAccordion from './EducationAccordion';

function Education() {
    return (
        <>
            <h2 id='main' className="subtitle">Education Background</h2>
            <div className="cards">
                <div className="card">
                    <img className="emblem" src="/CUHK.png" alt="Emblem of Chinese university of Hong Kong" />
                    <h3 className="school-name">The Chinese University of Hong Kong</h3>
                    <br />
                    <h4 className='degree'>Bachelor of Sociology</h4>
                    <p className="card-text">The Chinese University of Hong Kong (CUHK) is a renowned public research university located in the Sha Tin district of Hong Kong. Established in 1963, CUHK is the second-oldest university in Hong Kong and one of the most prestigious universities in Asia.</p>
                    <p className="card-text">CUHK is a bilingual university with a strong emphasis on research and education. It offers a wide range of undergraduate, postgraduate, and doctoral programs across a variety of disciplines, including business, engineering, medicine, law, social sciences, and humanities. The university also offers a number of interdisciplinary programs that encourage cross-disciplinary collaboration and innovation.</p>
                    <p className="card-text">With over 20,000 students from around the world, CUHK is a vibrant and diverse community that fosters intellectual curiosity, critical thinking, and creativity. Its faculty members are renowned scholars and researchers who are committed to advancing knowledge and contributing to society through their research, teaching, and community engagement.</p>
                    <p className="card-text">CUHK has a strong tradition of academic excellence and innovation. It is ranked among the top universities in Asia and is recognized globally for its cutting-edge research and teaching. The university has a number of research centers and institutes that focus on areas such as biotechnology, Chinese studies, environment and sustainability, neuroscience, and public health.</p>
                    <a href="https://www.cuhk.edu.hk/english/aboutus/university-intro.html" className="card-link">Learn more about CUHK...</a>

                    <EducationAccordion title="Relevant courses">
                        <span className='accordion-text'>IT Foundation || Social Statistics  ||  Quantitative Data Analysis</span>
                    </EducationAccordion>

                    <EducationAccordion title="Extra-curricular Activities">
                        <span className='accordion-text'>International Ambassador of CUHK || Xuesi Hall Association Committee member in CUHK || Peer Consultor || Volunteer Tutor in HKEC Yam Lam Community Service Centre</span>
                    </EducationAccordion>

                    <EducationAccordion title="Honors and Awards">
                        <span className='accordion-text'>Mr. Michael Wong Student Exchange Scholarship || Shanghai Fraternity Association Diligence Bursary</span>
                    </EducationAccordion>



                </div>

                <div className="card">
                    <img className="emblem" src="/UCB.png" alt="Emblem of University of California, Berkeley" />
                    <h3 className="school-name">University of California, Berkeley</h3>
                    <br />
                    <h4 className='degree'>Summer Exchange Program</h4>
                    <p className="card-text">The University of California, Berkeley (UC Berkeley) is a world-renowned public research university located in Berkeley, California, USA. Established in 1868, UC Berkeley is the flagship campus of the University of California system and one of the top public universities in the United States.</p>
                    <p className="card-text">UC Berkeley offers a broad range of undergraduate and graduate programs in a variety of fields, including business, engineering, social sciences, natural sciences, humanities, and the arts. The university has a strong commitment to research and innovation, and its faculty members are recognized leaders in their respective fields. UC Berkeley is also known for its cutting-edge research facilities, including the Lawrence Berkeley National Laboratory and the Space Sciences Laboratory.</p>
                    <p className="card-text">With a diverse student body of over 42,000 students from all 50 states and over 100 countries, UC Berkeley is a dynamic and vibrant community that fosters intellectual curiosity, creativity, and social engagement. The university offers numerous opportunities for students to engage in research, community service, and experiential learning, and its graduates are highly sought after by top employers in a variety of industries.</p>
                    <p className="card-text">UC Berkeley has a long and proud history of social activism and political engagement, and the campus has been the site of many significant social and political movements over the years. The university has also produced numerous Nobel laureates, Pulitzer Prize winners, MacArthur Fellows, and other distinguished scholars and leaders.</p>
                    <a href="https://www.berkeley.edu/about/" className="card-link">Learn more about UCB...</a>
                    <EducationAccordion title="Relevant courses">
                        <span className='accordion-text'>The Structure and Interpretation of Computer Programs || Data Structures</span>
                    </EducationAccordion>
                </div>

                <div className="card">
                    <img className="emblem" src="NEU.png" alt="Emblem of Northeastern University" />
                    <h3 className="school-name">Northeastern University</h3>
                    <br />
                    <h4 className='degree'>Master of Science in Information Systems</h4>
                    <p className="card-text">Northeastern University (NU) is a private research university located in Boston, Massachusetts, USA. Founded in 1898, NU is known for its commitment to experiential learning, cooperative education, and interdisciplinary research.</p>
                    <p className="card-text">NU offers a wide range of undergraduate and graduate programs across a variety of fields, including business, engineering, health sciences, social sciences, humanities, and the arts. The university is also home to a number of research centers and institutes that focus on areas such as cybersecurity, sustainability, health policy, and entrepreneurship.</p>
                    <p className="card-text">One of NU's defining features is its emphasis on experiential learning, which integrates classroom study with real-world work experiences. The university's co-op program allows students to alternate between periods of academic study and full-time, paid work experiences in their field of study. This unique approach to education has been recognized as one of the best in the country, and has helped NU graduates to achieve high levels of success in their careers.</p>
                    <p className="card-text">NU is also known for its commitment to interdisciplinary research, which brings together scholars from different fields to tackle complex problems and develop innovative solutions. The university has a number of interdisciplinary research centers and institutes, and its faculty members are leaders in their respective fields.</p>
                    <a href="https://www.northeastern.edu/" className="card-link">Learn more about NEU...</a>
                    <EducationAccordion title="Relevant courses">
                        <span className='accordion-text'>Web Design || Application Engineer and Development || Application Modeling and Design</span>
                    </EducationAccordion>

                    <EducationAccordion title="Projects">
                        <span className='accordion-text'>Digital Marketing || Personal Website</span>
                    </EducationAccordion>

                    <EducationAccordion title="Skills">
                        <span className='accordion-text'>Python || Java || HTML || CSS || React || JavaScript || Data Structures || Algorithm</span>
                    </EducationAccordion>
                </div>
            </div>
        </>
    );
}

export default Education;