import styled from "styled-components";
import tw from "twin.macro";

export const ResumeContainer = styled.div`
  ${tw`
    w-full
    h-full
    bg-orange-400
    p-10
  `}
`;

export const ResumeContentContainer = styled.div`
  ${tw`
    w-full
    h-full
    bg-[#f8edd7CC]
    rounded-[32px]
    p-8
    shadow-2xl
  `}

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;

export const ResumeContentTextContainer = styled.div`
  ${tw`
    inline-block
    w-auto
    h-auto
    bg-gray-600
    text-red-400
  `}
`;
