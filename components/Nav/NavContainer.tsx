import { profileData } from "@/components/Nav/mockData";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import DashboardButtons from "./DashboardButtons";
import Profile from "./Profile";
import ProfileImages from "./ProfileImages";
import Image from "next/image";
import crown from "@/assets/icons/crown.svg";

interface NavContainerProps {
  title: string;
  $isMyNav?: boolean;
  createdByMe?: boolean;
}

function NavContainer({ title, $isMyNav = false, createdByMe = false }: NavContainerProps) {
  const { nickname, profileImageUrl } = profileData;

  return (
    <Wrapper $isMyNav={$isMyNav}>
      <Title $isMyNav={$isMyNav}>
        {title}
        {createdByMe && <Crown src={crown} alt="왕관" />}
      </Title>
      <Content $isMyNav={$isMyNav}>
        <DashboardButtons />
        {/* {$isMyNav ? null : <ProfileImages />} */}
        {$isMyNav || <ProfileImages />}
        <Line />
        <Profile profileImageUrl={profileImageUrl} nickname={nickname} />
      </Content>
    </Wrapper>
  );
}

export default NavContainer;

const Wrapper = styled.div<{ $isMyNav: boolean }>`
  padding: 2.3rem 8rem 2.3rem 34rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;

  border-bottom: 1px solid var(--Gray30);
  justify-content: space-between;

  @media (max-width: ${DeviceSize.tablet}) {
    padding: 1.5rem 4rem;

    justify-content: ${({ $isMyNav }) => ($isMyNav ? "space-between" : "flex-end")};
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 1.5rem 1.2rem;
  }
`;

const Title = styled.div<{ $isMyNav: boolean }>`
  color: var(--Black20);
  font-size: 2rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: ${DeviceSize.pc}) {
    display: ${({ $isMyNav }) => ($isMyNav ? "block" : "none")};
  }
`;

const Crown = styled(Image)`
  width: 2rem;
  height: 1.6rem;
`;

const Content = styled.div<{ $isMyNav: boolean }>`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: ${({ $isMyNav }) => ($isMyNav ? "3.2rem" : "4rem")};

  @media (max-width: ${DeviceSize.mobile}) {
    gap: "1.6rem";
  }
`;

const Line = styled.div`
  border-left: 1px solid var(--Gray30);
  height: 3.8rem;
`;
