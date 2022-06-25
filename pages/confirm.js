import { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickUpCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZXJpY2NodWE5NCIsImEiOiJjbDNpYjhqMG0wMmd2M2JvOHlyZW5tdngwIn0.uT3Z4CGmkYXaMm0Gnid_SA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZXJpY2NodWE5NCIsImEiOiJjbDNpYjhqMG0wMmd2M2JvOHlyZW5tdngwIn0.uT3Z4CGmkYXaMm0Gnid_SA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUpCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;

const ConfirmButtonContainer = tw.div`
    border-t-2
`;

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

const Wrapper = tw.div`
    h-screen flex flex-col
`;