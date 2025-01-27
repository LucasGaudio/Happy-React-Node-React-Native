import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import logoImg from "../images/map-marker.svg";

import "../styles/pages/landing.css";

export default function LandingPage() {
   return (
      <div id="page-landing">
         <div className="content-wrapper">
            <img src={logoImg} alt="happy" />
            <main>
               <h1>Leve felicidade para o mundo</h1>
               <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
               <strong>Rio de Janeiro</strong>
               <span>Rio de Janeiro</span>
            </div>

            <Link to="/map" href="" className="enter-app">
               <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
         </div>
      </div>
   );
}
