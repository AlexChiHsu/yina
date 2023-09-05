import styled, { css } from "styled-components";
import tw from "twin.macro";

export const LandingContainer = styled.div<{ path?: string }>`
  ${tw`
    w-full
    h-full
    bg-cover
    bg-bottom
    bg-no-repeat
    flex
    justify-center
  `}
  ${({ path }) =>
    css`
      background-image: linear-gradient(
          360deg,
          #1b1e2580 0%,
          rgba(27, 30, 37, 0.3) 70.22%
        ),
        url(${path});
    `}
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;
