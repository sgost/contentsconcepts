import React, { Fragment, useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import BannerImage from '../../images/about_banner.png';
import {
  BannerSection,
  ContentContainer,
  OverlayContainer
} from './styles';
import Typed from 'react-typed';

const AboutBanner = () => {

  const[content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about/banner.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data.file) {
      setContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <BannerSection>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="contentSection">
              <ContentContainer>
                <h2>{content.title}</h2>
                <p>
                  {content.description}
                </p>
              </ContentContainer>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="resSection">
              <OverlayContainer>
                <div className="topBg"></div>
                <div className="imageContainer">
                  <img src={BannerImage} alt="banner" />
                </div>
                <div className="bottomBg"></div>
              </OverlayContainer>
            </Col>
          </Row>
        </BannerSection>
      }
    </Fragment>
  )
}

export default AboutBanner
