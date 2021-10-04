import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect, Fragment } from "react"
import { Button, Popover } from "antd"
import {
  NavBarContainer,
  NavLinkContainer,
  NavLink
} from './styles';
import PopoverContent from './PopoverContent';

const NavigationMenu = props => {

  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const isPartiallyActive = () => {
    if (url) {
      return url.indexOf('/services/') >= 0 ? { className: "activeLink" } : null;
    }
  }
  //popover

  const [popoverVisible, setPopoverVisible] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/footer.md"}) {
        childMarkdownRemark {
          frontmatter {
            sitemapList {
              id
              title
              link
              sitemap {
                id
                link
                title
              }
            }
          }
        }
      }
    }
  `);

  const popoverLink = () => {
    setPopoverVisible(false);
  };

  const onVisibleChange = visible => {
    setPopoverVisible(visible);
  };

  return (
    <Fragment>
      <NavBarContainer >
        <NavLinkContainer>
          <NavLink key="about">
            <Link to="/about/" activeClassName="activeLink" onClick={props.onClick}>About</Link>
          </NavLink>
          <NavLink key="services">
            <Popover
              overlayClassName="navPopover"
              content={<PopoverContent content={data.file.childMarkdownRemark.frontmatter} onClick={popoverLink} />}
              visible={popoverVisible}
              onVisibleChange={onVisibleChange}
              placement="bottom"
            >
              <Link
                to="/services/academic_editing"
                getProps={isPartiallyActive}
                activeClassName="activeLink"
                onClick={props.onClick}
                onMouseOver={() => setPopoverVisible(true)}
                onFocus={() => setPopoverVisible(true)}
                id="mob-service-popover"
              >
                Services
              </Link>
            </Popover>
            <Link
              to="/services/academic_editing"
              getProps={isPartiallyActive}
              activeClassName="activeLink"
              onClick={props.onClick}
              id="mob-services-link"
            >
              Services
            </Link>
          </NavLink>
          <NavLink key="blog">
            <Link to="/resources/" partiallyActive={true} activeClassName="activeLink" onClick={props.onClick}>Resources</Link>
          </NavLink>
          <NavLink key="contact">
            <Link to="/contact/" activeClassName="activeLink" onClick={props.onClick} role="presentation">Contact</Link>
          </NavLink>
          <NavLink key="contact">
            <Link to="/pricing/#pricing" activeClassName="activeLink" onClick={props.onClick} role="presentation">Pricing</Link>
          </NavLink>
        </NavLinkContainer>
        <Link to="/pricing/"><Button type="primary">VIEW QUOTE & UPLOAD</Button></Link>
      </NavBarContainer>
    </Fragment>
  )
}

export default NavigationMenu