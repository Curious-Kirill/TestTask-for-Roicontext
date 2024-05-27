 import React from 'react'
 import styled, { keyframes, css } from "styled-components";

function ScrollingLine({items}) {
 
  
  return (

        <Marquee>
          <MarqueeGroup>
            {items.map((el,index) => (
              <ImageGroup key={index}>
                  {el}
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {items.map((el,index) => (
              <ImageGroup aria-hidden="true" key={index}>
                {el} 
              </ImageGroup>
            ))}
          </MarqueeGroup>
          
        </Marquee>
        

  );
}

export default ScrollingLine;



const Marquee = styled.section`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

 
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: fit-content;
  margin-top:10px;
  margin-bottom:10px;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.ul`
  ${common}
`;


const ImageGroup = styled.li`
  display: grid;
  place-items: center;
  width: fit-content;
  padding: 20px;
  list-style:none;
  transition: 0.5s;
  &:active{
    border-bottom:1px solid white;
  }
  &:hover{

    transform:scale(1.05);
  }
  @media screen and (max-width: 1200px) {
    zoom:0.7;
  }
`;

