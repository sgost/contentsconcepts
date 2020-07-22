import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const QuoteFormSection = styled.div`
  .quoteForm {
    max-width: 700px;
    margin: 20px auto;
    @media (max-width: 768px) {
      margin: 20px 45px;
    }
  }
  .formLabel {
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-bottom: 10px;
    display: inline-block;
  }
  .categoryGroup {
    background: ${palette.WHITE_COLOR};
    border: 0.5px solid ${palette.BORDER_COLOR};
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgba(25, 39, 67, 0.1);
    border-radius: 8px;
    padding: 18px 24px;
    .categoryItem {
      padding: 8px 0px;
    }
    .ant-checkbox + span {
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
  }
  .submitBtn {
    .ant-form-item-control-input-content {
      text-align: center;
    }
    .ant-btn {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      height: 48px;
      padding: 8px 60px;
    }
  }
  .inputGroupBlock .ant-form-item-control-input-content {
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .inlineInput {
    display: inline-block;
    width: calc(50% - 20px);
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      width: calc(50% - 12px);
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  .emailInput {
    margin-left: 40px;
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      margin-left: 20px;
    }
    @media (max-width: 576px) {
      margin-left: 0;
    }
  }
`;