import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";
import { CardContainer, CardTitle } from "./styles";

interface ICardProp {
  title?: string;
  type?: string;
  path?: string;
  cardContainerStyle?: CSSProp | TwStyle;
  titleStyle?: CSSProp | TwStyle;
}
export default function Card(props: ICardProp) {
  const { title, type, path, cardContainerStyle, titleStyle } = props;

  return (
    <CardContainer style={cardContainerStyle} onClick={() => {}}>
      <CardTitle>{title ?? ""}</CardTitle>
    </CardContainer>
  );
}
