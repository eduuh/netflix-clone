import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'
import Row from './Row'


function HomeScreen() {
    return (
        <div className="homescreen">
            
            <Nav />
            {/* Banner */}
            <Banner/>

            {/* Row */}
            <Row title='Treding Now'
            fetchUrl={requests.fetchTrending}
            isLargeRow
            />
            <Row title='Top Rated'
            fetchUrl={requests.fetchTrending}
            />

            <Row title='Action Movies'
            fetchUrl={requests.fetchTrending}
            />

            <Row title='Horror Movies'
            fetchUrl={requests.fetchHorrorMovies}
            />

            <Row title='Romance Movies'
            fetchUrl={requests.fetchRomanceMovies}
            />

            <Row title='Documentaries'
            fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
