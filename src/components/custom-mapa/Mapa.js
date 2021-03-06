import React, { useEffect, useRef } from 'react';
import './mapa.css';
import mapboxgl from 'mapbox-gl';

const  TOKEN = 'pk.eyJ1IjoibHVrYWluYSIsImEiOiJja2JkN216YjIwMHRxMnNtdHRxMzFia3NiIn0.FpEMpmWE43fz9jv9IM_kCA'

mapboxgl.accessToken = TOKEN;

const state = {
  lng: -75.4041900,
  lat:  1.1032300,
  zoom: 4
};

export function CustomMap () {
  const ref = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [state.lng, state.lat],
      zoom: state.zoom
      });
  }, []);
  return(
    <div className="custom-map" ref={ref}>
  
    </div>

  );
}
