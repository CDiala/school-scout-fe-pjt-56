import study from '../images/study.jpg'
import '../../Scholarship/Scholarship.css'
import { Link } from "react-router-dom"

export const ScholarshipBlock = () => {
  return (
    <section className="scholarship-block schpg-container">
      <div className="block grid grid-cols-2">
        <div className="scholarship__body">
          <div>
            <h2 className="scholarship__heading">
              Get that scholarship at<br></br>
              <em className="scholarship__emphasis">ONE SHOT!</em>
            </h2>
            <p className="scholarship__title">
              Proven tips to help you get that scholarship at your first trial
            </p>
          </div>
          <ul className="nav-links scholarship-nav">
            {/* <li> */}
              <Link to="./">Research</Link>
            {/* </li>
            <li> */}
              <Link to="./">Great essay</Link>
            {/* </li>
            <li> */}
              <Link to="./">Apply early</Link>
            {/* </li> */}
          </ul>
          <Link to="./" className="btn btn-primary btn-xlarge">
            Get tip
          </Link>
        </div>
        <div>
            <img
              className="study"
              src={ study }
              alt="a lady studying"
            ></img>
        </div>
      </div> 
    </section>
  );
};

export default ScholarshipBlock;
