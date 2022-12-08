import React from 'react'
//import Collection from './components/Collection/Collection';
import Collections from './components/Collection/Collections';
import Creator from './components/Creator/Creator';
import Discover from './components/Discover/Discover';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Footer/Newsletter';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import QA from './components/QA/QA';


function App () {
    return (
        
            <div>
            <Navbar />
            <Hero />
            <Collections />
            <Discover />
            <Creator />
            <QA />
            <Newsletter />
            <Footer />
            </div>
    );
}


export default App;