import React, {Component} from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <>
                <header>
                    <div className="container container-nav">
                        <img src="nav-logo.svg" alt="nav-logo"/>
                        <nav>
                            <div>
                                <ul className="nav-center" >
                                    <li><Link to={process.env.PUBLIC_URL + "./"}>Explore schools</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/compare-schools"}>Compare schools</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "./"}>Find scholarship</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "./"}>Career advisory</Link></li>
                                </ul>
                            </div>
                        <div>
                            <ul className="nav-right">
                                <li><Link to={process.env.PUBLIC_URL + "./"}><i className=" icon fas fa-search"></i>Search</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}><i className=" icon fas fa-globe"></i>Language</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}><i className=" icon fas fa-user"></i>User</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}><i className=" icon fas fa-bookmark"></i>Saved</Link></li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                </header>
                <div className="footer-container">
                    <div className="footer-columns">
                        <div className="col col-2">
                            <p className="footer-description"><img src="logo.svg" alt="footer-logo"/>
                                <br/>school scout seeks to help students<br/>
                                make the best educational decision<br/>
                                by proviing them with all relevant<br/>
                                information and also helping them<br/>
                                choose a career for themselves.
                            </p>
                        </div>
                        <div className="col col-1">
                            <ul>
                                <li><Link to={process.env.PUBLIC_URL + "./"}>About us</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}>Explore schools</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/compare-schools"}>Compare schools</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}>Find schorlaship</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}> Career advisory</Link></li>
                            </ul>
                        </div>
                        <div className="col col-1">
                            <ul>
                                <li><Link to={process.env.PUBLIC_URL + "./"}>Testimonials</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}>Review</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "./"}>Articles/blog</Link></li>
                            </ul>
                        </div>
                        <div className="col col-2">
                            <p>Newsletter signup</p>
                                <form action="">
                                    <label for="email">signup to get important information via mail</label><br/>
                                    <input type="email" placeholder="Enter email address"/>
                                </form>
                                <i className=" icon fas fa-instagram"></i>
                                <i className=" icon fas fa-linkedin"></i>
                                <i className=" icon fas fa-twitter"></i>
                                <i className=" icon fas fa-facebook"></i>
                        </div>

                    </div>
                    <div className="bottom">
                        <p>Copyright &copy;2021 SchoolScout. All rights resereved</p>
                    </div>
                </div>
            </>
        )

    }
}
export default Navbar;