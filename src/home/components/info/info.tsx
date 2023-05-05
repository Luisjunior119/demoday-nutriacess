import { Text } from "../../../components/text/text";

import {
  Container,
  ImageAbout,
  TextDescription,
  TextInfo,
  TextTitle,
} from "./info.styles";

interface IInfo {
  title: string;
  description: string;
  direction: "row" | "row-reverse";
  image: {
    url: string;
    alt: string;
  };
}

const Info = ({ title, image, direction, description }: IInfo) => {
  return (
    <Container direction={direction}>
      <TextInfo>
        <TextTitle>
          <Text weight={600} height={1.7} color="vinho" size="24">
            {title}
          </Text>
        </TextTitle>

        <TextDescription>
          <Text weight={600} height={1.7} color="preto" size="16">
            {description}
          </Text>
        </TextDescription>
      </TextInfo>

      <ImageAbout>
        <img src={image.url} alt={image.alt}></img>
      </ImageAbout>
    </Container>
  );
};

export default Info;
