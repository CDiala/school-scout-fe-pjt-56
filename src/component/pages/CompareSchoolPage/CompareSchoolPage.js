import { CompareSchoolHero } from './CompareSchoolHero/CompareSchoolHero'
import './CompareSchoolPage.css'
import ranking from './compare add/ranking.svg'
import money from './compare add/money.svg'
import Rectangle_73 from './compare add/Rectangle_73.png'
import Rectangle_89 from './compare add/Rectangle_89.png'
import {ScholarshipAsideCardGrid} from '../ScholarshipList/ScholarshipAsideCardGrid/ScholarshipAsideCardGrid'
export const CompareSchoolPage = () => {
    return (
        <div>
            <CompareSchoolHero />
            <div className="left_side cmp-sch-container">
                <div className="">
                    <div className="compare">
                        <h1 className="cmp-schl-h1">Select the Schools you want to compare</h1>
                        <div className="compare_btn">
                            <div className="compare_input">
                                <div className="uni_1">
                                    <i className="fas fa-chevron-down arrow_i"></i>
                                    <input className="cmp-input" type="text" placeholder="University of Ibadan"/>
                                </div>
                                <div className="uni_2">
                                    <i className="fas fa-chevron-down arrow_i"></i>
                                    <input className="cmp-input" type="text" placeholder="Lagos State Unversity"/>
                                </div>
                            </div>
                            <div className="btn_compare">
                                <button>Compare</button>
                            </div>
                        </div>
                    </div>
                    <div className="left_side2">
                        <div className="school_logos">
                            <div className="school_logo1">
                                <img src={Rectangle_73} alt=""/>
                                <h3 className="cmp-h3">University of Ibadan</h3>
                            </div>
                            <div className="school_logo2">
                                <img src={Rectangle_89} alt=""/>
                                <h3 className="cmp-h3">Lagos State University</h3>
                            </div>
                        </div>
                        <div className="ranking">
                            <h3 className="cmp-h3 cmp-h3-A1"> <img src={ranking} alt=""/>Ranking</h3>
                            <h3 className="cmp-h3 cmp-h3-A2">1654</h3>
                            <h3 className="cmp-h3">1652</h3>
                        </div>
                        <div className="location">
                            <h3 className="cmp-h3 cmp-h3-B1"><i className="fas fa-map-marker-alt"></i>Location </h3>
                            <h3 className="cmp-h3 cmp-h3-B2">Ibadan, Oyo State</h3>
                            <h3 className="cmp-h3">Lagos, Nigeria</h3>
                        </div>
                        <div className="tuition">
                            <h3 className="cmp-h3 cmp-h3-C1"><img src={money} alt=""/>Tuition </h3>
                            <h3 className="cmp-h3 cmp-h3-C2">N65,000</h3>
                            <h3 className="cmp-h3">N75,000</h3>
                        </div>
                        <div className="program">
                            <h3 className="cmp-h3 cmp-h3-D1"><i className="fas fa-graduation-cap"></i>Program</h3>
                            <h3 className="cmp-h3 cmp-h3-D2">Undergraduate, Post-Graduate</h3>
                            <h3 className="cmp-h3 cmp-h3-D3">Undergraduate, Post-Graduate, Diploma</h3>
                        </div>
                        <div className="accommodation">
                            <h3 className="cmp-h3 cmp-h3-E1"><i className="fas fa-bed"></i>Accommodation</h3>
                            <h3 className="cmp-h3 cmp-h3-E2">Yes</h3>
                            <h3 className="cmp-h3 cmp-h3-E3">Yes</h3>
                        </div>
                    </div>
                    <div className="cmp-btn">
                        <button>View School</button>
                        <button>View School</button>
                    </div>
                </div>
                <div id="helosd">
                    <ScholarshipAsideCardGrid/>
                </div>
            </div>
        </div>
    )
}
