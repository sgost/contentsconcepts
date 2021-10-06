import { createGlobalStyle } from "styled-components"
// Abstracts
import * as palette from "./variables"

export const GlobalStyle = createGlobalStyle`
  @-ms-viewport {
  width: device-width;
  }
  html {
  box-sizing: border-box;
  font-size: 13pt;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  overflow-y: auto;
  scroll-behavior: smooth;
  }

  body {
  -ms-overflow-style: scrollbar;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  background-color: ${palette.APP_BACKGROUND_COLOR} !important;
  }

  html, body, #root {
  width: 100%;
  height: 100%;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }

  ol, ul {
  list-style: none;
  }

  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
  content: none;
  }
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
  }
  input, select, textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  }
  body, input, select, textarea, button {
  font-family: ${palette.FONT_FAMILY} !important;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.65;
  }
  section {
  position: relative;
  }
  a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  }
  strong {
  font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
  line-height: 1.25;
  }

  h1 {
  font-size: 36px;
  }

  h2 {
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
  }

  img {
    width: 100%;
  }

  p {
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.70) !important;
  }
  .ant-modal-mask, .ant-modal-wrap {
    left: 65px !important;
  }
  .ant-modal {
    width: initial !important;
    max-width: 500px;
    top: 90px !important;
    margin: 0 !important;
  }
  .ant-modal-content {
    border-radius: 0px !important;
  }
  .ant-modal-body {
    padding: 0px !important;
  }

  .ant-select {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px !important;
    color: ${palette.CHARCOAL};
    .ant-select-arrow {
      right: 20px;
    }
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${palette.PRIMARY_SECTION_BACKGROUND};
  }
  .ant-select-selector {
    height: 48px !important;
    min-height: 38px !important;
    display: flex !important;
    align-items: center !important;
    box-shadow: 0px 0px 5px rgba(25, 39, 67, 0.1) !important;
    border-radius: 8px !important;
    padding: 11px 24px !important;
    border: 1px solid ${palette.BORDER_COLOR} !important;
    &:hover {
      border-color: ${palette.BORDER_COLOR} !important;
    }
    .ant-select-selection-search-input {
      height: 48px !important;
      text-overflow: ellipsis;
    }
    .ant-select-selection-placeholder {
      color: ${palette.DARK_GREY};
    }
  }
  .ant-select-dropdown-menu-item {
    padding: 7px 14px !important;
  }
  .tags-selection {
    max-width: 100% !important;
  }
  .ant-tooltip {
    line-height: 1 !important;
  }
  .ant-tooltip-inner {
    min-height: 20px !important;
    font-size: 12px;
    font-weight: 600;
  }
  .ant-dropdown-menu-item {
    &:hover {
      background-color: #3b4ada14 !important;
    }
  }
  .ant-modal-header {
    background: initial !important;
    border-bottom: initial !important;
    .modal-title {
      font-size: 24px;
      color: #5860AF;;
      position: relative;
      padding-bottom: 12px;
      text-transform: capitalize;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 75px;
        height: 4px;
        border-radius: 2px;
        background-color: #CAC8F6;
        bottom: 0px;
        left: 5px;
      }
    }
  }
  .ant-modal-footer {
    padding: 16px 24px !important;
    border: initial !important;
  }
  .ant-btn {
    border-radius: 8px;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: ${palette.PRIMARY_TXT_COLOR};
    padding: 12px 24px;
    height: 46px;
    border: 1px solid ${palette.COLOR_DENIM};
    &.active, &:hover, &:focus {
      color: ${palette.PRIMARY_TXT_COLOR} !important;
      border-color: ${palette.COLOR_DENIM} !important;
    }
    &:hover {
      background-color: ${palette.BUTTON_HOVER} !important;
      border-color: ${palette.BUTTON_HOVER} !important;
      color: ${palette.WHITE_COLOR} !important;
      box-shadow: 0px 0px 0px 5px rgba(24,144,255, 0.1) !important
    }
  }
  .ant-btn-primary {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    height: 38px;
    padding: 8px 28px;
    background-color: ${palette.BUTTON_PRIMARY} !important;
    border-color: ${palette.BUTTON_PRIMARY} !important;
    color: ${palette.WHITE_COLOR} !important;
    &.active, &:hover, &:focus {
      color: ${palette.WHITE_COLOR} !important;
      border-color: ${palette.BUTTON_PRIMARY} !important;
    }
  }
  .ant-input {
    text-overflow: ellipsis;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px !important;
    color: ${palette.CHARCOAL};
    padding: 11px 24px;
    box-shadow: 0px 0px 5px rgba(25, 39, 67, 0.1) !important;
    border-radius: 8px;
    &:focus, &:hover {
      border: 1px solid ${palette.BORDER_COLOR} !important;
    }
    &:placeholder-shown {
      color: ${palette.DARK_GREY};
    }
  }

  .ant-modal-confirm-body-wrapper {
    padding: 25px;
  }

  #notification-wrapper .ant-notification {
    position: relative;
    overflow: hidden;
    top: 0 !important;
    width: 100%;
    z-index: 10;
    margin-right: 0;
    max-width: 100%;
  }
  #notification-wrapper .ant-notification-notice {
    background: linear-gradient(178.57deg, #8D58D4 0%, #578DC3 100%);
    padding: 10px 35px;
    margin-bottom: 0;
    width: 100% !important;
    max-width: 100% !important;
    @media (max-width: 576px) {
      padding: 10px 15px;
    }
  }
  #notification-wrapper .ant-notification-notice-close {
    top: 12px;
    right: 35px;
    color: ${palette.WHITE_COLOR};
    &:hover {
      color: ${palette.WHITE_COLOR};
    }
    @media (max-width: 576px) {
      right: 15px;
    }
  }
  #notification-wrapper .ant-notification-notice-message {
    display: block;
    margin-bottom: 0;
    padding-right: 40px !important;
    @media (max-width: 576px) {
      padding-right: 20px !important;
    }
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
    }
  }

  .drawerNavMenu {
    z-index: 1010;
    .ant-drawer-content-wrapper {
      height: auto;
    }
    .ant-drawer-body {
      padding: 15px;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }

  .homeSpin {
    padding: 40px;
    display: flex;
    justify-content: center;
  }

  .editingMenu {
    border-right: none;
  }
  .editingSubMenu {
    margin-top: 25px;
    &:first-child {
      margin-top: 0;
    }
    .ant-menu-submenu-title {
      padding: 0px 0px 10px 0px !important;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px !important;
      color: ${palette.BLACK_COLOR};
      border-bottom: 1px solid ${palette.CHARCOAL};
      margin: 0;
      height: auto !important;
      overflow: unset !important;
      text-overflow: unset !important;
      white-space: unset !important;
      .ant-menu-submenu-arrow {
        display: none;
      }
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background: ${palette.WHITE_COLOR};
    }
    .ant-menu-item {
      padding-left: 10px !important;
      background: ${palette.WHITE_COLOR};
      margin-top: 15px;
      height: auto !important;
      line-height: 20px !important;
      overflow: unset !important;
      text-overflow: unset !important;
      a {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: ${palette.SECONDARY_TXT_COLOR};
        display: inline-block;
      }
    }
    .ant-menu-item-selected a, .ant-menu-item-selected a:hover {
      color: ${palette.BUTTON_PRIMARY};
    }
    .ant-menu-inline .ant-menu-item::after {
      left: 0;
      right: unset;
      border-right: 3px solid ${palette.BUTTON_PRIMARY};
    }
  }

  #blogListContainer_menu{
    box-shadow:rgb(46 41 51 / 8%) 0px 1px 2px, rgb(71 63 79 / 8%) 0px 2px 4px;
    width:fit-content;
    margin:0 0 0 auto;
    position:absolute;
    right:0;
    z-index:2;
    padding:28px 0 28px 0;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
    background:white;
    overflow:hidden;
    cursor:pointer;
    #menu1{
    font-size: 20px;
    width:100%;
    padding:16px 16px 16px 20px;
    border-left:5px solid #1976D2;
    color:#1976D2;
    box-shadow: 10px 10px 10px rgba(71, 63, 79, 0.08);
    background-color: ${palette.WHITE_COLOR};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }
      #menu2{
        font-size: 20px;
        width:100%;
        margin:16px 16px 16px 28px ;
        transition:0.5s ease;
        }
  }


  .blogListContainer {
    max-width: 700px;
    margin: 48px auto;
    h2 {
      font-size: 30px;
      padding: 24px;
    }
    .blogListItem {
      box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
      background-color: ${palette.WHITE_COLOR};
      border-radius: 16px;
      margin-bottom: 24px;
      position: relative;
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      @media (max-width: 768px) {
        margin: 0px 20px 24px 20px;
      }
      &:hover {
        transform: translateY(-0.25rem);
        box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
      }
      a {
        display: inline-block;
        padding: 48px;
        @media (max-width: 768px) {
          padding: 24px;
        }
      }
      .blogHeading {
        margin-bottom: 24px;
        font-size: 22px;
      }
      .blogExcerpt {
        margin-bottom: 24px;
        color: #78757a;
        font-size: 16px;
      }
      .blogInfo {
        display: flex;
        flex-direction: row;
        align-items: center;
        .authorImage {
          width: 25px;
          border-radius: 100%;
        }
        img {
          height: 100%;
          display: block;
        }
        span {
          margin-left: 2px;
          color: #78757a;
          font-size: 14px;
        }
      }
    }
  }
  .ant-modal-mask, .ant-modal-wrap {
    left: 0 !important;
  }
  .ant-modal {
    width: 100% !important;
    max-width: 100% !important;
    top: 0 !important;
    bottom: 0 !important;
    height: 100% !important;
    padding: 0 !important;
  }
  .ant-modal-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  .ant-modal-content {
    background: ${palette.PRIMARY_SECTION_BACKGROUND};
  }
  .ant-modal-close {
    top: 10px;
    right: 20px;
  }
  .ant-modal-close-x {
    font-size: 20px;
  }
  .ant-modal-header {
    text-align: center;
    padding: 20px 24px;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${palette.BUTTON_PRIMARY};
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${palette.BUTTON_PRIMARY};
    border-color: ${palette.BUTTON_PRIMARY};
  }

  .uploadBtn {
    border-radius: 5px;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: ${palette.PRIMARY_TXT_COLOR};
    padding: 12px 40px;
    height: 40px;
    border: 1px solid ${palette.BORDER_COLOR};
    background: transparent;
    &:hover, &:focus, &:active {
      background-color: transparent !important;
      border-color: ${palette.BORDER_COLOR} !important;
      color: ${palette.PRIMARY_TXT_COLOR} !important;
      box-shadow: none !important;
    }
  }

  .ant-upload-list-item-card-actions-btn {
    border: none;
    &:hover, &:focus, &:active {
      background-color: transparent !important;
      box-shadow: none !important;
      .anticon {
        color: rgba(0, 0, 0, 0.45)
      }
    }
  }
  .ant-upload-list-item {
    border-radius: 8px !important;
  }
  .ant-upload-list-item-card-actions {
    right: 8px !important;
  }

  .navPopover {
    .ant-popover-arrow {
      display: none;
    }
    .ant-popover-inner {
      border-radius: 8px;
    }
  }

  .ant-input-number {
    text-overflow: ellipsis;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px !important;
    color: ${palette.CHARCOAL};
    padding: 8px 0px;
    box-shadow: 0px 0px 5px rgba(25,39,67,0.1) !important;
    border-radius: 8px;
    width: 150px;
    &:focus, &:hover, &:active {
      border: 1px solid ${palette.BORDER_COLOR} !important;
    }
    .ant-input-number-handler-wrap {
      border-radius: 0px 8px 8px 0px;
      .ant-input-number-handler-up {
        border-top-right-radius: 8px;
      }
      .ant-input-number-handler-down {
        border-bottom-right-radius: 8px;
      }
    }
  }

  .messageCont {
    .ant-message-notice-content {
      padding: 0px;
      border-radius: 8px;
      width: 550px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      @media (max-width: 576px) {
        width: auto;
      }
    }
    .ant-message-success {
      background-color: #f6ffed;
    }
    .ant-message-error {
      background-color: #fff2f0;
    }
    .ant-message-custom-content {
      display: flex;
      align-items: flex-start;
      padding: 40px;
      border-radius: 8px;
      @media (max-width: 576px) {
        padding: 20px;
      }
      span {
        &:last-child {
          text-align: left;
          margin-left: 8px;
          font-size: 16px;
          line-height: 28px;
        }
      }
    }
    .anticon {
      font-size: 24px;
    }
  }

  .whatsappContainer {
    position: fixed;
    bottom: 4%;
    right: 2%;
    width: 56px;
    height: 56px;
    background: #48C857;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    a {
      display: flex;
      align-items: center;
    }
  }
`
