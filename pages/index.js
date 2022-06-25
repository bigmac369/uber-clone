import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import tw from "tailwind-styled-components";
import Map from "./components/Map";

import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Eric Chua</Name>
            <UserImage src="https://lh3.googleusercontent.com/L3hckJ5Jp5QO0ITgVWJBU9phVTC4ViLuhsDwmWfI-o-Ifnqd14dM7_G5K16iOXSFUYWG4Q=s85" />
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png?fbclid=IwAR0oVVjUu-FXwk-2AuvViBk2kq22Y4-ijxCkvQ85PARAVJjwEFW4Jn_JkfM" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png?fbclid=IwAR3hSq2JPSx7SgrhT27xhW_JQ5h2CbT51UOqCGOVOfi6XFvP3SgO9KbtqoQ" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png?fbclid=IwAR0o_Yk0dfJtCAlzFgVYv738UA0dcBO1jM0OLx476c7lYhM8met2bnbMnOw" />
            Reserve
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen

`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-20
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 justify-center items-center rounded-lg
  transform hover:scale-105 transition text-xl cursor-pointer
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
