import styled, { css } from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.button<{ style?: any; path?: string }>`
  ${tw`
    w-[103px]
    h-[155px]
    sm:w-[103px]
    sm:h-[153px]
    gap-1
    ml-1
    mr-1
    border
    border-transparent
  `}
  & :hover {
    border-width: 0.5px;
    border-color: white;
  }
  ${({ path }) =>
    css`
      background-image: url(${path});
    `}

  ${({ style }) =>
    style &&
    css`
      ${style}
    `}
`;

export const CardTitle = styled.div<{ style?: any }>`
  ${tw`
    text-white
    font-normal
    text-sm
    text-center
    truncate
    leading-[21px]
    pointer-events-none
  `}

  ${({ style }) =>
    style &&
    css`
      ${style}
    `}
`;
