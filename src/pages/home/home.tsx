import growth from "../assets/Growth.svg";
import prati from "../assets/Pratí.svg";
import smartfit from "../assets/Smart-fit.svg";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Text } from "../../components/text/text";
import About from "./about/about";
import Data from "./data/data";
import Feedback from "./feedback/feedback";
import Goals from "./goals/goals";
import {
  ButtonWrapper,
  Container,
  DivButton,
  DivText,
  ImageWrapper,
  LogoPartners,
  Partners,
} from "./home.styles";
import Operation from "./operation/operation";
import Plans from "./plans/plans";

const Home = () => {
  return (
    <Container>
      <Header />

      <ImageWrapper>
        <DivText>
          <Text weight={600} height={94} color="branco" size="64">
            Nutra sua saúde
          </Text>
          <Text weight={600} height={94} color="branco" size="64">
            e bem estar com
          </Text>
          <Text weight={600} height={94} color="branco" size="64">
            a NutriAcess
          </Text>
        </DivText>
        <DivButton>
          <ButtonWrapper>
            <Button variant="primario" title="Conheça nossos planos" />
          </ButtonWrapper>
        </DivButton>
      </ImageWrapper>

      <About />

      <Goals />

      <Operation />

      <Data />

      <Partners>
        <LogoPartners>
          <img src={growth} alt="Logo da Growth" />
        </LogoPartners>
        <LogoPartners>
          <img src={smartfit} alt="Logo da SmartFit" />
        </LogoPartners>
        <LogoPartners>
          <img src={prati} alt="Logo da Prati" />
        </LogoPartners>
      </Partners>

      <Feedback />

      <Plans />
      <Footer />
    </Container>
  );
};

export default Home;