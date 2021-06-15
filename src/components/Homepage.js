
import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div>
            <header>
                <div className='header'>
                    <h1>What/Who is neurocat?</h1>
                    <p>Neurocat is an IT startup based in the innovation and business
                        incubator Berlin-Adlershof. The team of mathematicians, computer scientists,
                        and industrial engineers is working on basic research in the field of
                        Artificial Intelligence (AI), and solves engineering challenges for
                        applied AI technologies. The current main focus lies on research and
                        applications of Deep Learning and Reinforcement Learning, on AI safety
                        and trustworthiness, and on combining AI systems with blockchain technology.</p>
                </div>
            </header>
            <div className='statementSection'>
                <div className='statementBox come-in'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/05/about.jpg' alt='mission img' />
                    <div><h6>Our Mission</h6>
                        <p>We are drowning in information but starved for knowledge“ – John Naisbitt.
                            Neurocat strives to live in an explainable digital world,
                            where society benefits from safe,
                            accessible and transparent AI technologies.
                            Our goal is to build up trust and confidence for AI
                            solutions by integrating innovative AI Quality applications.</p></div>
                </div>
                <div className='statementBox come-in'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/05/about.jpg' alt='vision img' />
                    <div>
                        <h6>Our Vision</h6>
                        <p>The neurocat GmbH was founded in 2017 with the goal
                            of shaping our modern world through the use of AI safety & security
                            technologies. Today, we help companies to implement modern AI
                            systems that are safe & secure with respect to functionality,
                            comprehensibility and robustness. With the help of our quality
                            tools we can also help you to develop reliable AI solutions for your business.</p>
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='servicesBox' >
                    <Link to='/products'>   <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png' alt='AI Quality Services' />
                        <h4>AI Quality Services</h4></Link>
                    Unique IP
                    <p>Research| Consulting| Analysis| Optimization | Governance |DevOps  </p>

                </div>
                <div className='servicesBox'>
                    <Link to='/aidkit' ><img src='https://www.neurocat.ai/wp-content/uploads/2018/11/aidkit.png' alt='aidkit' />
                        <h4>Click to check aidkit</h4></Link>
                    <p>Is an open source AI analysis, optimization and debugging platform. It will support prototyping,
                        deployment and operation.</p>

                </div>
                <div className='servicesBox'>
                    <Link to='/deeptrust'> <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/deeptrust_siegel.png' alt='deeptrust' style={{ width: '80px' }} />
                        <h4>AI Seal Of Aproval</h4></Link>
                    <p>Is an AI risk, safety, security and privacy framework for all stakeholders.
                        The acceptance of AI hinges on trust into the system. Thus, our quality seal and its related
                        frameworks serve to create trust in your AI solutions. Calculate and cover your risks,
                        be insured, monitor and control cyber-critical criteria with this unique platform.</p>
                </div>
            </div>
            <div className='aiInfografic' data-aos="fade-left">
                <h4>Flowing Infographic on why AI Quality MAtters | AI Saffety Matters| AI Security Standard </h4>
                <img src='' alt='infographAi' id='infographAi' />
            </div>
            <div className='pastProjects' data-aos="flip-right">
                <img src='https://www.neurocat.ai/wp-content/uploads/2018/06/finalcordcloud.png' alt='pastProj' />
                <div>
                    <h4>Text for past thing outomes and partners</h4>
                    <p>Some texts</p>
                </div>
            </div>
            <div className='withDin' data-aos="flip-right">
                <div style={{ maxWidth: '800px', width: '100%' }}><h4>Neurocat past work with DIN standarts</h4>
                    <p>AI and ML experts from all over Germany came together to kick-off work on the DIN SPEC 92001
                        ‘Artificial Intelligence – Quality requirements and life cycle management for AI modules’.</p></div>
                <Link to='/work-DIN'> <img src='https://www.neurocat.ai/wp-content/uploads/2018/05/admin-ajax.jpg' alt='withDin' />
                </Link>
            </div>
            <div className='customerVoice'>
                <h1>Customers Voice</h1>
                <img src='' alt='custVoice.png' />
            </div>
            <div className='team' data-aos="fade-bottom">
                <h3>TEAM</h3>
                <div id='team'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/05/our-team.jpg' alt='teamimg' />
                    <p>Our team of 25 mathematicians, computer scientists and industrial engineers
                        brings together the best of both worlds, combining academic with application
                        perspectives and experiences. With different backgrounds, skill sets and a unifying
                        desire to grow, learn and understand the world through modern technology our team is
                        the essence of neurocat. We are based in the innovation and business incubator Berlin-Adlershof
                        which gives us, together with its close proximity to the Humboldt-University of Berlin,
                        the opportunity to build a strong network of like-minded people.</p></div>
            </div>
        </div>
    )
}

export default Homepage;