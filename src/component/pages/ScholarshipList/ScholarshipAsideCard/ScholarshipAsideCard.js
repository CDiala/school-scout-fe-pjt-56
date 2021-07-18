import React from 'react'
import '../../Scholarship/Scholarship.css'
import { ScholarshipAsideCardData } from '../../Scholarship/Card/Card'
import { Link } from "react-router-dom"


export const ScholarshipAsideCard = () => {
    return (
        ScholarshipAsideCardData.map(item => {
            return (
                <div className="schlshp-asd-card-container">
                    <h2 className="schlshp-asd-card-header">{ item.heading }</h2>
                    <div className="schlshp-asd-card-body">
                        <Link to="./">
                            <div className="schlshp-asd-card-img">
                                <img src={ item.img } alt="" />
                            </div>
                            <p className="schlshp-asd-card-title">{ item.caption }</p>
                        </Link>
                    </div>
                </div>
            )
        })
    )
}
