import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const BlogContainer = styled.div`
  max-width: 700px;
  margin: 48px auto;
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
  .author_image {
    margin-right: 8px;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    overflow: hidden;
    img {
      height: 100%;
      display: block;
      object-fit: contain;
    }
  }
  .author_info {
    display: flex;
    flex-direction: column;
    h4 {
      line-height: 22px;
    }
    span {
      font-size: 14px;
      color: #78757a;
      line-height: 20px;
    }
  }
`;

export const BlogContent = styled.div`
  .blogTitle {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 32px;
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 36px;
    }
  }
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
    margin-bottom: 24px;
  }
  li {
    font-weight: normal;
    font-size: 16px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 15px 0px;
  }
  blockquote {
    padding-left: 23px;
    box-shadow: rgb(41, 41, 41) 3px 0px 0px 0px inset;
  }
  a {
    font-weight: normal;
    color: ${palette.PRIMARY_TXT_COLOR};
    text-decoration: underline;
  }
`;

export const TagsList = styled.div`
  margin-top: 50px;
  font-size: 14px;
  color: ${palette.PRIMARY_TXT_COLOR};
  font-weight: 500;
  padding: 48px 0px;
  border-top: 1px solid #f0f0f2;
  span:first-child {
    margin-left: 5px;
  }
`;