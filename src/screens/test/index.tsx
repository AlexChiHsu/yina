import React from "react";
import Iframe from "react-iframe";
import styled from "styled-components";
import tw from "twin.macro";
import { FacebookEmbed } from "react-social-media-embed";

const TestContainer = styled.div`
  ${tw`
    w-full
    h-full
    overflow-auto
    flex
    flex-row
    justify-between
    items-center
  `}
`;

const IframeContainer = styled.div`
  ${tw`
    // h-fit
    h-full
    flex-1
    // w-full
    flex
    m-3
    // relative
    // h-0
    // pb-[56.25%]
  `}
`;

// https://www.facebook.com/yinaamy/posts/4994828300530816?ref=embed_video
// https://www.facebook.com/yinaamy/posts/5048234488523530?ref=embed_video
export default function Test() {
  return (
    <TestContainer>
      <IframeContainer>
        <FacebookEmbed
          url="https://www.facebook.com/yinaamy/posts/4331561550190831?ref=embed_video"
          width={350}
        />
      </IframeContainer>
    </TestContainer>
  );
}
