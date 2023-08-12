import AccordionSection from './AccordionSection';
import './Experience.css';


function Experience() {
  return (

    <div id='main'>
      <h2 className='experience-subtitle'>Work Experiences</h2>
      <div class="accordion">
        <div class="accordion-item item-1 flexcontainer">
          <div class="job-box">
            <div class="flexcontainer">
              <img class="company-logo" src="/uniqueTimepieces.png" alt="Company logo of Unique Timepieces" />
              <div>
                <h3 class="company-name" title="Unique Timepieces">Unique Timepieces</h3>
                <br />
                <h4 class="job_title">2020-2022 || Family Teacher</h4>
              </div>
            </div>

            <AccordionSection title="Click to expand">
              <div class="accordion-panel">
                <p className='text'>- Conceptualized & created learning modules and materials using computer-assisted education systems in electronic classrooms to meet different learning styles, developed engaging activities, and facilitated student discussions.</p>
                <p className='text'>- Monitored learners’ academic progress, evaluated their knowledge with a series of computer-based assessments.</p>
                <p className='text'>- Analyzed the test results, determined trends & patterns in student performance, and adjusted pace to meet needs.</p>
              </div>
            </AccordionSection>

          </div>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item item-2 flexcontainer">
          <div class="job-box">
            <div class="flexcontainer">
              <img class="company-logo" src="/HongKongPoliceLogo.png" alt="Logo of Central Police Station in Hong Kong" />
              <div>
                <h3 class="company-name">Central Police Station</h3>
                <br />
                <h4 class="job_title">2018 || Researcher</h4>
              </div>
            </div>

            <AccordionSection title="Click to expand">
              <div class="accordion-panel">
                <p className='text'>-	Designed a survey questionnaire on public perception of crimes and safety & quality of police service, distributed questionnaires & gathered 200+ responses, conducted detailed interviews with 10 residents in the Central District</p>
                <p className='text'>-	Cleansed & consolidated the data, conducted exploratory analysis, and produced visualizations using Stata to determine patterns, relationships in public perception on safety and quality of police service in Lan Kwan Fong.</p>
                <p className='text'>-	Built a regression model to estimate customer behavioral patterns in a densely populated nightclub zone with an adjusted R-squared value of 0.889, proposed adjustments in policies to decrease accident-related deaths.</p>
              </div>
            </AccordionSection>

          </div>
        </div>
      </div>


      <div class="accordion">
        <div class="accordion-item item-3 flexcontainer">
          <div class="job-box">
            <div class="flexcontainer">
              <img class="company-logo" src="/shenZhenMedia.png" alt="Company logo of Shenzhen Media Group" />
              <div>
                <h3 class="company-name">Shenzhen Media Group</h3>
                <br />
                <h4 class="job_title">2017 || Editor</h4>
              </div>
            </div>

            <AccordionSection title="Click to expand">
              <div class="accordion-panel">
                <p className='text'>- Assessed effectiveness of past events and summarized improvement opportunities for subsequent programs in Excel.</p>
                <p className='text'>- Prepared 10+ summary reports on recent news and interviews & published them on the media group’s official WeChat account with 180k+ followers.</p>
              </div>
            </AccordionSection>

          </div>
        </div>
      </div>


      <div class="accordion">
        <div class="accordion-item item-4 flexcontainer">
          <div class="job-box">
            <div class="flexcontainer">
              <img class="company-logo" src="HKWWA.png" alt="Logo of Hong Kong Women Workers’ Association" />
              <div>
                <h3 class="company-name">Hong Kong Women Workers’ Association</h3>
                <br />
                <h4 class="job_title">2017 || Event planner</h4>
              </div>
            </div>
            <AccordionSection title="Click to expand">
              <div class="accordion-panel">

                <p className='text'>- Scheduled, organized & facilitated 10+ meetings & conferences, produced & distributed agendas and minutes.</p>
                <p className='text'>- Performed monthly district visits to women promoters and proposed ways to safeguard personal interests from sexual harassment situations.</p>
              </div>
            </AccordionSection>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Experience;
