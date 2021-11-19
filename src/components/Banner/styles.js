import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BannerSection = styled.div`
  overflow: hidden;
  .ant-row {
    flex-wrap: nowrap;
    .resSection {
      position: relative;
    }
    #view_prize Button {
      margin-top: 43px;
      width: 277px;
      height: 48px;
      transition: 0.5s ease;
    }
    #view_prize Button:hover {
      width: 282px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
      .resSection {
        display: none;
      }
      #view_prize {
        margin: 43px auto 0 auto;
      }
      #view_prize Button {
        width: 69vw;
        height: 10vw;
        font-size: 3.2vw;
        margin: 3vw 0 0 9.5vw;
      }
      #view_prize Button:hover {
        width: 69vw;
      }
    }
    .mob-banner-illustration {
      display: none;
      @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: block;
      }
    }
  }
  .contentSection {
    margin: 0 auto;
    max-width: 600px;
    padding-left: 50px;
    padding: 9% 0 9% 4%;
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      max-width: 400px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      max-width: unset;
      padding: 4% 6% 12% 6%;
      margin: 0;
    }
    @media (min-width: 1500px) {
      max-width: 700px;
    }
  }
`

export const ContentContainer = styled.div`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    text-align: center;
  }
`

export const Content = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: ${palette.PRIMARY_TXT_COLOR};
  .typeAnimation {
    margin-left: 8px;
    color: ${palette.HIGHLIGHT_TEXT};
    font-weight: 600;
    .typed-cursor {
      font-weight: normal;
    }
    @media (max-width: 768px) {
      display: block;
      margin-left: 0px;
    }
  }
`

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 576px) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 30px 45px 0px;
  }
  li {
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
    .ant-btn a {
      color: ${palette.PRIMARY_TXT_COLOR} !important;
      &:hover {
        color: ${palette.WHITE_COLOR} !important;
      }
    }
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      .ant-btn {
        padding: 12px 20px;
      }
      margin-right: 15px;
    }
    @media (max-width: 576px) {
      .ant-btn {
        width: 100%;
      }
      width: 100%;
      margin: 10px 0px;
    }
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    position: unset;
  }
`
