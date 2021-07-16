import '../../Scholarship/Scholarship.css';
import { Card } from '../Card/Card';
import { Link } from "react-router-dom"

export const ScholarshipCard = () => {

  return (
    Card.map(item => {
      return (
        <figure className="safety-figure">
        <figcaption className="safety-caption">
        <img className="safety-image" src={item.img} alt=""></img>
          <Link to="./">{ item.text }</Link>
        </figcaption>
      </figure>
      )
    })
  )
}

export default ScholarshipCard
