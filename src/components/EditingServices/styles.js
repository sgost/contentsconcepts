import styled from "styled-components"
import { Col } from "antd"
import * as palette from "../../styles/variables"

export const MenuContainer = styled.div`
  padding: 60px 0px;
  max-width: 1100px;
  margin: 0 auto;
  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .ant-layout {
    background: ${palette.WHITE_COLOR};
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
  .ant-layout-content {
    padding: 0px 30px;
    min-height: 280px;
    width: 70%;
    @media only screen and (min-width: 576px) and (max-width: 992px) {
      padding: 0px 10px;
    }
    @media (max-width: 576px) {
      width: 100%;
      padding: 30px 0px;
    }
  }
  .ant-layout-sider {
    width: 30% !important;
    margin: 0px 30px;
    flex: unset !important;
    max-width: 30% !important;
    background: transparent !important;
    @media only screen and (min-width: 576px) and (max-width: 992px) {
      margin: 0px 10px;
    }
    @media (max-width: 576px) {
      width: 100%;
      max-width: 100% !important;
      min-width: 100% !important;
      margin: 0;
    }
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  h2 {
    font-size: 32px;
    line-height: 48px;
    margin-right: 15px;
  }
  span {
    font-weight: normal;
    font-size: 16px;
    line-height: 40px;
    color: ${palette.BUTTON_PRIMARY};
  }
  @media only screen and (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    align-items: start;
    h2 {
      line-height: 40px;
    }
    span {
      margin-left: 0;
      line-height: 30px;
    }
  }
`

export const TypesContainer = styled.div`
  margin: 8px 0px;
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-bottom: 5px;
  }
`

export const FeaturesListContainer = styled.ul`
  margin: 35px 0px;
`

export const FeatureSecList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
  img {
    width: 16px;
    height: 16px;
  }
  p {
    font-size: 16px;
    margin-left: 12px;
    a:hover {
      text-decoration: underline;
    }
  }
`

export const RefundSection = styled.div`
  p {
    font-size: 20px;
    line-height: 30px;
  }
  span {
    font-weight: 600;
    margin-top: 5px;
    display: block;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction row;
  margin: 35px 0px;
  .ant-btn {
    font-size: 14px;
    line-height: 21px;
    height: 38px;
    padding: 8px 24px;
    margin-right: 20px;
    &:last-child {
      margin-left: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      margin-right: 10px;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    flex-wrap: wrap;
    .ant-btn {
      margin: 5px 10px 5px 0px;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    margin: 30px 20px;
    .ant-btn {
      width: 100%;
      margin: 10px 0px;
    }
  }
`

// Levels Section
export const LevelsListing = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0px;
  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  .cardCol {
    margin: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(69, 68, 68, 0.15);
    img {
      width: 15px;
      height: 15px;
    }
    .hyphen {
      font-size: 15px;
      font-weight: 600;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      margin: 0px 6px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      margin: 0px;
    }
    @media (max-width: 576px) {
      img {
        width: 12px;
        height: 12px;
      }
      .hyphen {
        font-size: 12px;
      }
    }
  }
  .ant-list-header {
    border: none;
    padding: 0;
    .cardCol {
      padding: 10px;
      font-weight: 500;
      color: ${palette.WHITE_COLOR};
      border-radius: 8px 8px 0px 0px;
    }
  }
  .ant-list-footer {
    padding: 30px 0px;
    .cardCol {
      box-shadow: none !important;
      .ant-btn {
        border: 1px solid transparent !important;
      }
    }
  }
  .listItemsContainer {
    padding: 0px;
    border: none !important;
    .ant-row {
      width: 100%;
    }
    .ant-col {
      padding: 10px;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: ${palette.PRIMARY_TXT_COLOR};
      @media (max-width: 576px) {
        font-size: 12px;
      }
    }
    &:last-child {
      .cardCol {
        border-radius: 0px 0px 8px 8px;
      }
    }
    .cardCol {
      background: ${palette.WHITE_COLOR};
    }
    &:nth-child(odd) {
      .cardCol {
        background: ${palette.HAWKES_BLUE};
      }
    }
  }
`

export const LevelsSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
`

export const SectionHeading = styled.div`
  padding: 20px 0px;
  text-align: center;
  span {
    font-size: 18px;
    font-weight: normal;
  }
`

//samples section
export const SamplesSection = styled.div`
  background: ${palette.WHITE_COLOR};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
`

export const TabsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0px;
  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: 1px solid ${palette.DARK_GREY};
  }
  .ant-tabs-nav-list {
    width: 100%;
    @media (max-width: 576px) {
      width: auto;
    }
    .ant-tabs-tab {
      width: 30%;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 35px;
      color: ${palette.CHARCOAL};
      opacity: 0.6;
      justify-content: center;
      @media only screen and (min-width: 320px) and (max-width: 992px) {
        width: auto;
        padding: 12px;
      }
    }
    .ant-tabs-tab-active {
      color: ${palette.BUTTON_PRIMARY};
      opacity: 1;
    }
  }
  .ant-tabs-ink-bar {
    background: ${palette.BUTTON_PRIMARY};
  }
`

export const TabContent = styled.div`
  padding: 30px;
  p {
    font-size: 18px;
    line-height: 40px;
    color: ${palette.CHARCOAL};
  }
  .sampleImage {
    background: ${palette.WHITE_COLOR};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 30px;
    margin: 30px 0px;
  }
  @media (max-width: 576px) {
    padding: 30px 20px 0px;
    .sampleImage {
      padding: 20px;
    }
    p {
      line-height: 35px;
    }
  }
`

//highlights section
export const HighlightsSection = styled.div`
  background: ${palette.PRIMARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .highlightsList {
    max-width: 1100px;
    margin: 0 auto !important;
    justify-content: center;
    padding: 30px 0px;
    @media (min-width: 1500px) {
      max-width: 1300px;
    }
    .card {
      padding: 30px;
      @media only screen and (min-width: 768px) and (max-width: 992px) {
        padding: 20px;
      }
      @media only screen and (min-width: 576px) and (max-width: 768px) {
        padding: 15px;
      }
      @media (max-width: 576px) {
        padding: 20px;
      }
    }
  }
`

export const HighlightCard = styled.div`
  background: ${palette.WHITE_COLOR};
  box-shadow: 2px 2px 16px rgba(16, 50, 101, 0.15);
  border-radius: 8px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  h3 {
    margin: 15px 0px;
    text-align: center;
  }
  p {
    text-align: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 30px;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 25px;
  }
`

//quality section
export const QualitySection = styled.div`
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
  .qualityContent {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    @media (max-width: 576px) {
      padding: 30px 0px;
    }
    .qualityBadge {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
      }
    }
    .contentDesc {
      padding-left: 50px;
      h2 {
        font-size: 28px;
        line-height: 42px;
        color: ${palette.SPRING_GREEN};
      }
      p {
        font-size: 16px;
        color: ${palette.LIGHT_GREY};
        margin-top: 12px;
      }
      @media (max-width: 576px) {
        padding: 20px 0px;
        h2,
        p {
          text-align: center;
        }
      }
    }
  }
`

//service card
export const ServiceCard = styled.div`
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 32px 0px;
  text-align: center;
  h3 {
    color: rgba(52, 152, 219, 0.7);
    padding: 0px 12px;
  }
`

export const PriceSection = styled.div`
  margin: 16px 0px 25px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  .startingText {
    display: block;
    margin-bottom: 5px;
  }
  .priceSec {
    display: flex;
    flex-direction: column;
  }
  .priceValue {
    margin: 5px 0px;
    span {
      font-weight: bold;
      font-size: 22px;
    }
  }
`

export const TagContent = styled.div`
  padding: 8px;
  background: rgb(255, 246, 218);
  margin-bottom: 30px;
  p {
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
  }
`

export const DescSection = styled.div`
  margin-bottom: 30px;
  padding: 0px 40px;
  p {
    font-size: 14px;
  }
`

export const ButtonSection = styled.div`
  padding: 15px 45px 0px;
  button {
    width: 100%;
    @media (max-width: 992px) {
      width: auto;
    }
  }
`

export const FooterCol = styled(Col)`
  .ant-btn {
    background-color: ${props => props.theme} !important;
    &:hover,
    &:focus,
    &:active {
      background-color: ${props => props.theme} !important;
    }
  }
`

//Level Description
export const LevelDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vw;
  width: fit-content;
  margin: auto;
  h1 {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  h3 {
    margin-bottom: 24px;
  }
  .gatsby-resp-image-wrapper {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 24px;
    font-size: 16px;
  }
  ul {
    list-style: inside;
    margin-bottom: 10px;
  }
  li {
    font-weight: normal;
    font-size: 16px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 15px 0px;
  }
`
