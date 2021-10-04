import React, { Fragment } from "react"
import { Row, Col, List, Button } from "antd"
import CheckMark from "../../images/check_mark.svg"
import { Link } from "gatsby"
import {
  LevelsSection,
  SectionHeading,
  LevelsListing,
  LevelDescription,
  FooterCol,
} from "./styles"

const EditingLevels = ({ content, paraDescription }) => {
  // const content = props.content;
  console.log(paraDescription)

  return (
    <Fragment>
      {content && (
        <LevelsSection>
          <SectionHeading>
            <h2>
              {content.title} <span> - {content.subHeading}</span>
            </h2>
          </SectionHeading>
          <LevelsListing>
            <List
              dataSource={content.levels}
              header={
                <Row>
                  <Col xs={9} sm={9} md={9} lg={10} xl={10}></Col>
                  {content.levelTypes &&
                    content.levelTypes.map(level => (
                      <Col
                        xs={5}
                        sm={5}
                        md={4}
                        lg={4}
                        xl={4}
                        key={level.id}
                        className="cardCol"
                        style={{ background: level.themeColor }}
                      >
                        <span>{level.title}</span>
                      </Col>
                    ))}
                </Row>
              }
              footer={
                <Row>
                  <Col xs={9} sm={9} md={9} lg={10} xl={10}></Col>
                  {content.levelTypes &&
                    content.levelTypes.map(level => (
                      <FooterCol
                        xs={5}
                        sm={5}
                        md={4}
                        lg={4}
                        xl={4}
                        key={level.id}
                        theme={level.themeColor}
                        className="cardCol"
                      >
                        <Link to="/pricing/">
                          <Button type="primary">Get Quote</Button>
                        </Link>
                      </FooterCol>
                    ))}
                </Row>
              }
              renderItem={item => (
                <List.Item key={item.id} className="listItemsContainer">
                  <Row>
                    <Col xs={9} sm={9} md={9} lg={10} xl={10}>
                      {item.title}
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={4} xl={4} className="cardCol">
                      {item.copy === "yes" ? (
                        <img src={CheckMark} alt="yes" />
                      ) : (
                        <span className="hyphen">-</span>
                      )}
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={4} xl={4} className="cardCol">
                      {item.substantive === "yes" ? (
                        <img src={CheckMark} alt="yes" />
                      ) : (
                        <span className="hyphen">-</span>
                      )}
                    </Col>
                    <Col xs={5} sm={5} md={4} lg={4} xl={4} className="cardCol">
                      {item.developmental === "yes" ? (
                        <img src={CheckMark} alt="yes" />
                      ) : (
                        <span className="hyphen">-</span>
                      )}
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </LevelsListing>
          <LevelDescription>
            {paraDescription.map(paraDescriptions => (
              <Fragment key={paraDescriptions.title}>
                <h1>{paraDescriptions.title}</h1>
                {paraDescriptions.descriptions.map(descriptionss => (
                  <Fragment key={descriptionss.description}>
                    <p>{descriptionss.description}</p>
                  </Fragment>
                ))}
                <ul>
                  {paraDescriptions.lists.map(listss => (
                    <li key={listss.list}>{listss.list}</li>
                  ))}
                </ul>
              </Fragment>
            ))}
          </LevelDescription>
        </LevelsSection>
      )}
    </Fragment>
  )
}

export default EditingLevels
