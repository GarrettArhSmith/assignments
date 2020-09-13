import React from 'react';
import ServiceCard from '../ServiceCard'

function Services(props) {
    return (
        <main className="services">
            <div>
                <h1>Our Services</h1>
                <h2>Plumbing and Water Cleanup. Yeah, We Do Both.</h2>
            </div>
            <ul>
                <li>
                    <ServiceCard 
                        imgUrl="https://cdn.rotorootercdn.com/images/images/home/emergencyservice.svg" 
                        title="Emergency Service" 
                        description="Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays." 
                    />
                </li>
                <li>
                    <ServiceCard 
                        imgUrl="https://cdn.rotorootercdn.com/images/images/home/plumbingdrain.svg" 
                        title="Plumbing and Drains" 
                        description="As the largest plumbing and drain service company, we make thousands of repairs every day." 
                    />
                </li>
                <li>
                    <ServiceCard 
                        imgUrl="https://cdn.rotorootercdn.com/images/images/home/waterdamage.svg" 
                        title="Water Damage" 
                        description="Our teams are equipped with state-of-the-art water extraction and cleanup equipment." 
                    />
                </li>
                <li>
                    <ServiceCard 
                        imgUrl="https://cdn.rotorootercdn.com/images/images/home/waterheaters.svg" 
                        title="Water Heaters" 
                        description="Trust Roto-Router for repair and replacement of gas, electric and tankless water heaters." 
                    />
                </li>
            </ul>
        </main>
    );
}

export default Services;