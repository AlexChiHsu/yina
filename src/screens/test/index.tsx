import React, { useEffect, useRef, useState } from "react";
import Iframe from "react-iframe";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FacebookEmbed } from "react-social-media-embed";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchSheet } from "../../api/get";
import { Masonry } from "@mui/lab";

const TestContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-auto
  `}
`;
export default function Test() {
  const dispatch = useAppDispatch();
  const sheet = useAppSelector((state) => state.sheetReducer.sheet);
  useEffect(() => {
    dispatch(fetchSheet());
  }, [dispatch]);

  const url = [
    {
      id: 0,
      link: "https://www.facebook.com/yinaamy/posts/4994828300530816?ref=embed_video",
    },
    {
      id: 1,
      link: "https://www.facebook.com/yinaamy/posts/5048234488523530?ref=embed_video",
    },
    { id: 2, link: "https://www.facebook.com/yinaamy/videos/531193931549066/" },
    { id: 3, link: "https://www.facebook.com/yinaamy/videos/432938068276457" },
    { id: 4, link: "https://www.facebook.com/yinaamy/videos/367877762177361/" },
    { id: 5, link: "https://www.facebook.com/yinaamy/videos/396498895504118/" },
    { id: 6, link: "https://www.facebook.com/yinaamy/videos/581946719472476/" },
    {
      id: 7,
      link: "https://www.facebook.com/yinaamy/posts/4331561550190831?ref=embed_video",
    },
  ];
  // console.log(JSON.stringify(sheet));
  return (
    <TestContainer>
      <Masonry spacing={4}>
        {url.map((item) => (
          <FacebookEmbed url={item.link} width={350} />
        ))}
      </Masonry>
    </TestContainer>
  );
}
