import React from "react";
import Iframe from "react-iframe";
import styled from "styled-components";
import tw from "twin.macro";

const TestContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`;

export default function Test() {
  return (
    <TestContainer>
      <Iframe
        url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=true&height=373&appId"
        width="500px"
        height="373px"
        id=""
        className=""
        overflow="auto"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        // display="block"
        // position="relative"
      />
    </TestContainer>
  );
}
