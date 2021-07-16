import React from 'react';
import { Link } from "react-router-dom"
import './Explore.css';
import SchoolCard from './school card/SchoolCard';
import LocationCard from './Location Card/LocationCard';
import CourseCard from './Course Card/CourseCard';
// import AllSchools from '../All Schools/AllSchools';
import Header from './Header'

const Explore = () => {
    return (
        <>
            <Header/>
            <section className='Schools general-pad'>
                <div className="schools-container">
                    <div className='explore-top-section'>
                        <div className='schools-top-text'>
                            <h2 className='explore-text'>Schools</h2>
                            <p className='explore-text'>Browse through our list of schools</p>
                        </div>
                        <div>
                            <Link to="" className='schoolbutton'>Nigerian</Link>
                            <Link to="" className='schoolbutton'>International</Link>
                        </div>
                    </div>
                    <div className='schools-section'>
                        <SchoolCard/>
                    </div>
                    <div className='btn2'>
                        <Link to="" className='bottombtn'>see all schools</Link>
                    </div>
                </div>
            </section>
            <section className="search-courses general-pad">
                <div className="search-container">
                    <div>
                        <h2 className='explore-text'>Search Courses</h2>
                        <p className='explore-text'>Search for schools offering your prefered course</p>
                    </div>
                    <div>
                        <div className="card-container">
                            <div className="course-section">
                                <CourseCard/>
                            </div>
                        </div>
                    </div>
                    <div className='btn2'>
                        <Link to="" className='bottombtn'>see all courses</Link>
                    </div>
                </div>
            </section>
            {/* <section className='location general-pad'>
                <div className="location-container">
                    <div className='explore-top-section'>
                        <div className='location-top-text'>
                            <h2 className='explore-text'>Locations</h2>
                            <p className='explore-text'>Search for schools in your prefered locations</p>
                        </div>
                        <div>
                            <Link to="" className='schoolbutton'>Nigerian</Link>
                            <Link to="" className='schoolbutton'>International</Link>
                        </div>
                    </div>
                    <div className='location-section'>
                        <LocationCard/>
                    </div>
                    <div className='button button-change'>
                        <button>See all locations</button>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Explore
