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
    flex-col
    items-center
    pt-[10%]
    overflow-hidden
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
  @media (max-width: 720px) {
    background-position: left 25% bottom 0%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;

export const LandingTitle = styled.h1`
  ${tw`
    font-medium
    text-[450%]
  `}
  animation-name: fade;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ButtonContainer = styled.div`
  ${tw`
    w-full
    pl-[3%]
    pr-[3%]
    mt-[5%]
    flex
    justify-between
    items-center
  `}
`;

export const LandingButton = styled.button`
  ${tw`
    min-w-[10%]
    text-[200%]
  `}
  animation-name: fade;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    animation-name: hover;
    animation-duration: 1.8s;
    animation-timing-function: ease-in-out;
    @keyframes hover {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
