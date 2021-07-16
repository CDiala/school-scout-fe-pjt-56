import "../Scholarship/Scholarship.css";
import { Link } from "react-router-dom"
// import { Card } from "../Card/Card";
// import ScholarshipCard from "../Scholarship/ScholarshipCard/ScholarshipCard";

export const ScholarshipLikeGrid = (props) => {
  const schDetLike = props.schDetLike;
  console.log(schDetLike, props);

  return (
    <>
      {schDetLike.map(item => (
        <figure className="safety-figure" key={item.id}>
          <figcaption className="safety-caption">
            <img className="safety-image" src={item.image} alt=""></img>
            <Link to="./">{ item.title }</Link>
          </figcaption>
        </figure>
      ))}
    </>
  )
};

export default ScholarshipLikeGrid;

// Card.map(item => {
//   return (
//     <figure className="safety-figure">
//     <figcaption className="safety-caption">
//     <img className="safety-image" src={item.img} alt=""></img>
//       <Link to="./">{ item.text }</Link>
//     </figcaption>
//   </figure>
//   )
// })
