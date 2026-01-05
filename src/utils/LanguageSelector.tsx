import React from "react";
import { Select } from "antd";
import { getLanguageCode, getLanguages, setLanguageCode } from "../i18n";

const LanguageSelector: React.FC = () => {
  const currentLangaue = getLanguageCode();
  const handleLanguageCode = async(language: string) => {
    setLanguageCode(language);
    window.location.reload();
  };
  return (
    <span>
      <Select
        value={currentLangaue}
        style={{
          width: 100,
        }}
        onChange={(language) => handleLanguageCode(language)}
      >
        {getLanguages().map((language) => (
          <Select.Option key={language.id} value={language.id}>
            {language.label}
          </Select.Option>
        ))}
      </Select>
    </span>
  );
};

export default LanguageSelector;
