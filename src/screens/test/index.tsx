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
    h-[100%]
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
          url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F163671912285037%2F&show_text=true&t=0"
          id=""
          className=""
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;"
          allowFullScreen
          sandbox="allow-modals"
          // styles={{
          //   background: "white",
          //   width: "100%",
          //   height: "100%",
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          // }}
        />
      </IframeContainer>
      <IframeContainer>
        <Iframe
          url="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F1207148619771662%2F&show_text=true&width=560&t=0"
          width="100%"
          height="100%"
          id=""
          className=""
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;"
          allowFullScreen
          sandbox="allow-modals"
          styles={{ background: "white" }}
        />
      </IframeContainer>
      <IframeContainer>
        <Iframe
          url="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fyinaamy%2Fvideos%2F432938068276457%2F&show_text=true&width=476&t=0"
          width="100%"
          height="100%"
          id=""
          className=""
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;"
          allowFullScreen
          sandbox="allow-modals"
          styles={{ background: "white" }}
        />
      </IframeContainer>
    </TestContainer>
  );
}
