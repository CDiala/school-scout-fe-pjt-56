import React from "react";
import { ScholarshipCard } from "../ScholarshipCard/ScholarshipCard";
import "../../Scholarship/Scholarship.css";
import { Link } from "react-router-dom"

export const LocationCardGrid = () => {
  return (
    <section className="location-block schpg-container">
      <div className="block">
        <h2 className="location__heading">Locations</h2>
        <div className="locations">
          <div className="location-nav">
            <p className="location__text">Search scholarships by locations</p>
            <Link to="./" className="btn btn-tab btn-secondary">
              Undergraduate
            </Link>
            <Link to="./" className="btn btn-tab">
              Postgraduate
            </Link>
          </div>
          <div className="grid grid-cols-3">
            <ScholarshipCard></ScholarshipCard>
          </div>
          <Link to="./" className="btn btn-large btn-primary btn-more">
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationCardGrid;
