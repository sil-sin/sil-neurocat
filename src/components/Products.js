import React from 'react'

function Products(props) {

    return (
        <div id='products'>
            <h4>Overview on neurocat labs</h4>
            <div className='allProducts'>
                <div className='productCard'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/Research.png' alt='research' />
                    <h4>Research</h4>
                    <p>descripiton</p>
                </div>
                <div className='productCard'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/Consulting.png' alt='consulting' />
                    <h4>Consulting</h4>
                    <p>descripiton</p>
                </div>
                <div className='productCard'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/Analysis.png' alt='analysis' />
                    <h4>Analysis</h4>
                    <p>descripiton</p>
                </div>
                <div className='productCard'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/Debugging.png' alt='optimization' />
                    <h4>Optimization</h4>
                    <p>descripiton</p>
                </div>
                <div className='productCard'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/Improvement.png' alt='governance' />
                    <h4>Governance</h4>
                    <p>descripiton</p>
                </div>
                <div className='productCard'>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/DevOps.png' alt='devops' />
                    <h4>DevOps</h4>
                    <p>descripiton</p>
                </div>
            </div>
            {/*Infographic on labs provide*/}
            <img src='' alt='provides' className='infographProd' />
            {/*neurocat labs past industry projects/service project*/}
            <img src='' alt='projects' className='infographProd' />
            {/*non profits*/}
            <ul className='infographProd' id='nonproflist'>
                <li>Open Source Analysis, Optimization and Debugging Framework #aidkit.ai</li>
                <li>Chairman Germany DIN/ISO/IEEE/IEC JTC1 SC42 – Artificial Intelligence</li>
                <li>Initiator DIN SPEC (PAS) 92001-1/-2 Requirements Life Cycle Artificial intelligence</li>
                <li>VDA Leitinitiative “Protection of AI-based computer vision modules”</li>
                <li>SAE/DIN SPEC (PAS) “Taxonomy Autonomous Driving”</li>
            </ul>

        </div>
    )
}
export default Products