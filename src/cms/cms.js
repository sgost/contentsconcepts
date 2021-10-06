import CMS from "netlify-cms-app";
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';

import HomeBannerPreview from "./preview-templates/HomeBannerPreview";
import ClientsPreview from "./preview-templates/ClientsPreview";
import FeaturesPreview from "./preview-templates/FeaturesPreview";
import HomeServicesPreview from "./preview-templates/HomeServicesPreview";
import SpecializationPreview from "./preview-templates/SpecializationPreview";
import TestimonialPreview from "./preview-templates/TestimonialPreview";
import CustomersPreview from "./preview-templates/CustomersPreview";
import ProcessPreview from "./preview-templates/ProcessPreview";
import ContactPreview from "./preview-templates/ContactPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import OffersPreview from "./preview-templates/OffersPreview";

import FAQPreview from "./preview-templates/FAQPreview";

import QualityAssurancePreview from "./preview-templates/QualityAssurancePreview";

import QuoteCategoryPreview from "./preview-templates/QuoteCategoryPreview";

import AboutBannerPreview from "./preview-templates/AboutBannerPreview";
import TeamPreview from "./preview-templates/TeamPreview";

import ServicePreview from "./preview-templates/ServicePreview";

import BlogPreview from "./preview-templates/BlogPreview";

import PricingPreview from "./preview-templates/PricingPreview";

import PayPreview from "./preview-templates/PayPreview";

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
        {children}<GlobalStyle />
        </>
      </StyleSheetManager>
    )
  );
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

CMS.registerPreviewTemplate("homeBanner", withStyledComponentsRendered(HomeBannerPreview));
CMS.registerPreviewTemplate("clients", withStyledComponentsRendered(ClientsPreview));
CMS.registerPreviewTemplate("features", withStyledComponentsRendered(FeaturesPreview));
CMS.registerPreviewTemplate("homeServices", withStyledComponentsRendered(HomeServicesPreview));
CMS.registerPreviewTemplate("specialization", withStyledComponentsRendered(SpecializationPreview));
CMS.registerPreviewTemplate("testimonial", withStyledComponentsRendered(TestimonialPreview));
CMS.registerPreviewTemplate("customers", withStyledComponentsRendered(CustomersPreview));
CMS.registerPreviewTemplate("process", withStyledComponentsRendered(ProcessPreview));
CMS.registerPreviewTemplate("contact", withStyledComponentsRendered(ContactPreview));
CMS.registerPreviewTemplate("footer", withStyledComponentsRendered(FooterPreview));
CMS.registerPreviewTemplate("offers", withStyledComponentsRendered(OffersPreview));

CMS.registerPreviewTemplate("faq", withStyledComponentsRendered(FAQPreview));

CMS.registerPreviewTemplate("qualityAssurance", withStyledComponentsRendered(QualityAssurancePreview));

CMS.registerPreviewTemplate("quoteCategory", withStyledComponentsRendered(QuoteCategoryPreview));

CMS.registerPreviewTemplate("banner", withStyledComponentsRendered(AboutBannerPreview));
CMS.registerPreviewTemplate("team", withStyledComponentsRendered(TeamPreview));

CMS.registerPreviewTemplate("services", withStyledComponentsRendered(ServicePreview));

CMS.registerPreviewTemplate("resources", withStyledComponentsRendered(BlogPreview));

CMS.registerPreviewTemplate("pricing", withStyledComponentsRendered(PricingPreview));

CMS.registerPreviewTemplate("pay", withStyledComponentsRendered(PayPreview));
