import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

import Link from "next/link";

const Search = () => {
  return (
    <Wrapper>
      {/* Button Container */}
      <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png?fbclid=IwAR14Bv3oUmbp5cLog5HZnGoMZi6Gm4GEzHbEN2WigfhLDRf2_FULa3XOj-0" />
        </ButtonContainer>
      </Link>
      {/* Input Container */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png?fbclid=IwAR07AnyE8F-CrnVdFzqZA8w2jVaaeSXVaHQ7TKQmp3trOJqv_0ZvJiwDeqQ" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png?fbclid=IwAR1bLAuLCTBa8BL3kpaNy2RkDHMRsTT2R4k1uxEr6EYdmaeBroZ-JWwPZmA" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png?fbclid=IwAR3kTxnrXRrIAXAUMqJaATVBXMemqhjOjVqwxC9dMNb8TjX46fqr3KYBgC8" />
      </InputContainer>
      {/* Saved Places */}
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png?fbclid=IwAR13KZ2AcRtdc1ypnxvTnoLfBd6ly6DnRkVina_z9cmY3dvLCgwBBBQLL9A" />
        Saved Places
      </SavedPlaces>
      {/* Confirm Location */}
      <ConfirmLocations>Confirm Locations</ConfirmLocations>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
    bg-white px-4
`;

const BackButton = tw.img`
    h-12 cursor-pointer
`;

const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`;

const Circle = tw.img`
    h-2.5 
`;

const Line = tw.img`
    h-10
`;

const Square = tw.img`
    h-3
`;

const InputBoxes = tw.div`
    flex flex-col flex-1 
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmLocations = tw.button`
    bg-black text-white ml-3 mt-3 px-32 py-2
`;
