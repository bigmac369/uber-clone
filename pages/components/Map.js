import { useEffect } from "react";

import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJpY2NodWE5NCIsImEiOiJjbDNpYjhqMG0wMmd2M2JvOHlyZW5tdngwIn0.uT3Z4CGmkYXaMm0Gnid_SA";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [116.425682, 6.35792],
      zoom: 10,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
