import React from "react";
import { Select } from "antd";
import { getLanguageCode, getLanguages, setLanguageCode } from "../i18n";
import styled from "styled-components";

const LanguageSelector: React.FC = () => {
  const currentLanguage = getLanguageCode();
  const handleLanguageCode = async (language: string) => {
    setLanguageCode(language);
    window.location.reload();
  };
  return (
    <LanguageWrapper>
      <span>
        <Select
          value={currentLanguage}
       className="selector"
          onChange={(language) => handleLanguageCode(language)}
        >
          {getLanguages().map((language) => (
            <Select.Option key={language.id} value={language.id}>
              {language.label}
            </Select.Option>
          ))}
        </Select>
      </span>
    </LanguageWrapper>
  );
};

export default LanguageSelector;

const LanguageWrapper = styled.div`
  .selector {
    width: 100%;
    height: 35px ! important;
  }

`;
