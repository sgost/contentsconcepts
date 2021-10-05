import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Layout, Button } from "antd"
import MenuContent from './content';
import EditingLevels from './levels';
import EditingSamples from './samples';
import Highlights from './highlights';
import { ProcessPreviewSection } from "../Process"
import {
  MenuContainer,
  ServiceCard,
  PriceSection,
  TagContent,
  DescSection,
  ButtonSection
} from './styles';

const { Content, Sider } = Layout;

const MenuSection = props => {

  const data = props.content;

  return (
    <Fragment>
      <MenuContainer>
        <Layout>
          <Content>
            <MenuContent content={data} description={props.description} preview={props.preview} />
          </Content>
          <Sider>
            {
              data.priceCard &&
              <ServiceCard>
                <h3>{data.title}</h3>
                <PriceSection>
                  <span className="startingText">{data.priceCard.pricing.title}</span>
                  {
                    data.priceCard.pricing.price &&
                    <div className="priceSec">
                      {
                        data.priceCard.pricing.price.inr && <span className="priceValue" dangerouslySetInnerHTML={{__html: data.priceCard.pricing.price.inr}} />
                      }
                      {
                        data.priceCard.pricing.price.usd && <span className="priceValue" dangerouslySetInnerHTML={{__html: data.priceCard.pricing.price.usd}} />
                      }
                    </div>
                  }
                </PriceSection>
                {
                  data.priceCard.tagContent &&
                  <TagContent>
                    <p>
                      {data.priceCard.tagContent}
                    </p>
                  </TagContent>
                }
                <DescSection>
                  <p>{data.priceCard.content}</p>
                </DescSection>
                <ButtonSection>
                  <Button type="primary">
                    <Link to="/pricing/">Get Started</Link>
                  </Button>
                </ButtonSection>
              </ServiceCard>
            }
          </Sider>
        </Layout>
      </MenuContainer>
      <EditingLevels content={data.editingLevels} />
      <EditingSamples content={data.editingSample} />
      <Highlights content={data.editingHighlights} />
      {
        data.serviceProcess && <ProcessPreviewSection title={data.serviceProcess.title} process={data.serviceProcess.steps} />
      }
    </Fragment>
  )
}

export default MenuSection
