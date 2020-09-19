import React from 'react';
import Header from '../../components/Header/Header';
import './HomePage.scss';
import '../../styles/search-flight-form.scss';
import FlightsContainer from '../../components/FlightsContainer/FlightsContainer';
const HomePage = (props: any) => {
    return (
        <div className="main-container">
            <Header />
            <div className="bodyContainer">
                <FlightsContainer />
            </div>

        </div>
    );
}

export default HomePage;