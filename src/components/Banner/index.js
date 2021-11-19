import React, { Fragment, useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Row, Col, Button } from "antd"
import {ArrowRightOutlined} from '@ant-design/icons';

import BannerImage from '../../images/banner_image.png';
import {
  BannerSection,
  ContentContainer,
  Content,
  ServicesList,
  ImageContainer
} from './styles';
import Typed from 'react-typed';

export const HomeBannerSection = ({
  title,
  typedWords,
  services
}) => {
  return(
    <BannerSection>
      <Row>
        <Col xs={24} sm={24} className="mob-banner-illustration">
          <ImageContainer>
            <img src={BannerImage} alt="banner" />
          </ImageContainer>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="contentSection">
          <ContentContainer>
            <Content>
              {title}
              {
                typedWords &&
                <Typed
                  strings={typedWords && typedWords}
                  typeSpeed={60}
                  backSpeed={60}
                  backDelay={1200}
                  loop
                  className="typeAnimation"
                />
              }
            </Content>
          </ContentContainer>
          <ServicesList>
            {
              services && services.map(dataItem =>
                <li key={dataItem.id}>
                  <Button>
                    <Link to={dataItem.link}>{dataItem.title}</Link>
                  </Button>
                </li>
              )
            }
          </ServicesList>
          <Link to="/pricing/" id="view_prize">
          <Button id="view_prize" type="primary">GET QUOTE & UPLOAD<ArrowRightOutlined /></Button>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="resSection">
          <ImageContainer>
            <img src={BannerImage} alt="banner" />
          </ImageContainer>
        </Col>
      </Row>
    </BannerSection>
  );
};

const Banner = () => {

  const[content, setContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/banner.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            typedWords
            services {
              id
              title
              link
            }
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
        <HomeBannerSection
          title={content.title}
          typedWords={content.typedWords}
          services={content.services}
        />
      }
    </Fragment>
  )
}

export default Banner
