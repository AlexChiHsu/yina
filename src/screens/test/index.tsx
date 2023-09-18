import React from "react";
import Iframe from "react-iframe";
import styled from "styled-components";
import tw from "twin.macro";

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

export default function Test() {
  return (
    <TestContainer>
      <IframeContainer>
        <Iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F163671912285037%2F&show_text=true&t=0"
          url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F163671912285037%2F&show_text=true&t=0"
          id=""
          className=""
        />
      </IframeContainer>
      <IframeContainer>
        <Iframe
          url="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F1207148619771662%2F&show_text=true&width=560&t=0"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F1207148619771662%2F&show_text=true&width=560&t=0"
          id=""
          className=""
          // styles={{ background: "white" }}
        />
      </IframeContainer>
      <IframeContainer>
        <Iframe
          url="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F432938068276457%2F&show_text=true&width=476&t=0"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F432938068276457%2F&show_text=true&width=476&t=0"
          id=""
          className=""
          // styles={{ background: "white" }}
        />
      </IframeContainer>
    </TestContainer>
  );
}
