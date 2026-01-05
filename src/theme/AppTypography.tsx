import { Typography as AntTypography, theme } from 'antd';
import React from 'react';
import { themeTypography, type TypographyVariant } from './typography';
const { Title, Paragraph } = AntTypography;

type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'link'
  | 'success'
  | 'heading'
  | 'text';

interface TypographyProps {
  variant?: TypographyVariant;
  color?: ColorVariant;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: any;
}

export const Typography = ({
  variant = 'h1Regular',
  color,
  children,
  style,
  className,
}: TypographyProps) => {
  const { token } = theme.useToken();

  const colorMap: Record<ColorVariant, string> = {
    primary: token.colorText,
    secondary: token.colorTextSecondary,
    danger: token.colorError,
    success: token.colorSuccess,
    link: token.colorLink,
    heading: token.colorTextHeading,
    text: token.colorText,
  };

  const baseStyle = themeTypography[variant];
  const mergedStyle: React.CSSProperties = {
    ...baseStyle,
    ...(color ? { color: colorMap[color] } : {}),
    margin: 0,
    ...style,
  };

  if (variant.startsWith('h1'))
    return (
      <Title
        level={1}
        style={mergedStyle}
        className={className}
      >
        {children}
      </Title>
    );
  if (variant.startsWith('h2'))
    return (
      <Title
        level={2}
        style={mergedStyle}
        className={className}
      >
        {children}
      </Title>
    );
  if (variant.startsWith('h3'))
    return (
      <Title
        level={3}
        style={mergedStyle}
        className={className}
      >
        {children}
      </Title>
    );
  if (variant.startsWith('h4'))
    return (
      <Title
        level={4}
        style={mergedStyle}
        className={className}
      >
        {children}
      </Title>
    );
  if (variant.startsWith('h5'))
    return (
      <Title
        level={5}
        style={mergedStyle}
        className={className}
      >
        {children}
      </Title>
    );

  return (
    <Paragraph style={mergedStyle} className={className}>
      {children}
    </Paragraph>
  );
};
