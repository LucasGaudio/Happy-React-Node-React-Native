import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanages-map.css";
import api from "../services/api";

interface Orphanage {
   id: number;
   latitude: number;
   longitude: number;
   name: string;
}

export default function OrphanagesMap() {
   const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

   useEffect(() => {
      api.get("orphanages").then(response => {
         setOrphanages(response.data);
      });
   }, []);

   return (
      <div id="page-map">
         <aside>
            <header>
               <Link to="">
                  <img src={mapMarkerImg} alt="map marker image" />
               </Link>
               <h2> Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita</p>
            </header>
            <footer>
               <strong>Rio de Janeiro</strong>
               <span>Rio de Janeiro</span>
            </footer>
         </aside>

         <Map
            center={[-22.9294541, -43.2153584]}
            zoom={14}
            style={{ width: "100%", height: "100%" }}
         >
            <TileLayer
               url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />

            {orphanages.map(orphanage => {
               return (
                  <Marker
                     position={[orphanage.latitude, orphanage.longitude]}
                     icon={mapIcon}
                     key={orphanage.id}
                  >
                     <Popup
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="map-popup"
                     >
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                           <FiArrowRight size={20} color="#fff" />
                        </Link>
                     </Popup>
                  </Marker>
               );
            })}
         </Map>

         <div>
            <Link to="/orphanages/create" className="create-orphanage">
               <FiPlus size={32} color="#fff" />
            </Link>
         </div>
      </div>
   );
}
