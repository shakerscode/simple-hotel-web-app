import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-section'>
            <div className='home-first-section'>
                <div className='left-section'>
                    <div className='left-section-info'>
                        <p>The great place
                        </p>
                        <h1>FOR YOUR VACATION</h1>
                        <p>Leave the city behind to explore the great <br /> outdoors at our Outposts in the town of Catskill, New York.</p>
                        <button className='book-now'>Book</button>
                    </div>
                </div>
                <div className='right-section'>
                    <img src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg" alt="" />
                </div>
            </div>
            <div className="home-second-section">
                <div className='second-div-info'>
                <div>
                    <img src="https://img.freepik.com/free-photo/vertical-shot-round-brown-side-table-beside-bed_181624-2470.jpg" alt="" height={'550px'}width={'500px'}/>
                </div>
                <div className='second-sec-info'>
                    <h4>1-Hello, there</h4>
                    <h1>Welcome to your world of relaxation. Relax and have fun</h1>
                    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it’s seen all around the web; on templates, websites, and stock designs.</p>
                    <a href="">Read More</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;