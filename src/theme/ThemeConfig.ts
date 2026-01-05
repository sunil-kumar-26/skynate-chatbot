export const getTheme = (
  configuredTheme: string,
  isDarkMode: boolean,
) => {
   
  if (isDarkMode) {
    return {
      token: {
        colorPrimary: '#5550ff',
        colorLink: '#5550ff',
        colorText: '#fff',
        colorTextSecondary: '#fff',
        colorTextHeading: '#fff',
        colorError: '#ff4d4f',
        colorSuccess: '#52c41a',
        colorBgContainerDisabled: '#3d3a80',
        colorTextDisabled: '#9fa2d0',
      },
      components: {
        Menu: {
          itemColor: '#9B9B9D',
          itemHoverColor: '#EFEFEF',
          itemHoverBg: '#0000000A',
          itemSelectedColor: '#EFEFEF',
          itemSelectedBg: '#0d162b',
        },
        Button: {
          colorPrimary: '#5550ff',
          colorPrimaryHover: '#6b66ff',
          colorPrimaryActive: '#5550ff',
          colorTextDisabled: '#9fa2d0',
          colorBgContainerDisabled: '#3d3a80',
          borderColorDisabled: '#4a47a3',

          defaultColor: '#5550ff',
          defaultBorderColor: '#5550ff',
          defaultBg: '#141414',
          defaultHoverColor: '#6b66ff',
          defaultHoverBorderColor: '#6b66ff',
          defaultHoverBg: '#2a2a40',
          defaultActiveColor: '#5550ff',
          defaultActiveBorderColor: '#5550ff',
          defaultActiveBg: '#3a3a50',
        },
        Tag: {
          defaultColor: '#5550ff',
          colorBorder: '#5550ff',
          defaultBg: '#2a2a40',
        },
        customComponents: {
          UsageBanner: {
            background: `linear-gradient(90deg, #1a2d40 0%, #0f1f33 100%)`,  
          },
        },
      },
    };
  }

  const buttonTheme = (
    primary: string,
    hover: string,
    disabledBg: string,
    disabledText: string,
    hoverTint: string,
    activeTint: string,
  ) => ({
    Button: {
      colorPrimary: primary,
      colorPrimaryHover: hover,
      colorPrimaryActive: primary,
      colorTextDisabled: disabledText,
      colorBgContainerDisabled: disabledBg,
      borderColorDisabled: disabledBg,

      defaultColor: primary,
      defaultBorderColor: primary,
      defaultBg: '#fff',
      defaultHoverColor: hover,
      defaultHoverBorderColor: hover,
      defaultHoverBg: hoverTint,
      defaultActiveColor: primary,
      defaultActiveBorderColor: primary,
      defaultActiveBg: activeTint,
    },
  });

  const tagTheme = (primary: string, bg: string ,textColor: string) => ({
    Tag: {
      defaultColor: textColor,
      colorBorder: primary,
      defaultBg: bg,
    },
  });

  switch (configuredTheme) {
    case 'light-green':
      return {
        token: {
          colorPrimary: '#175F66',
          colorLink: '#175F66',
          colorText: '#175F66',
          colorTextSecondary: '#4a4a4a',
          colorTextHeading: '#175F66',
          colorError: '#ff4d4f',
          colorSuccess: '#52c41a',
        },
        components: {
          Menu: {
            itemColor: '#526682',
            itemHoverColor: '#175F66',
            itemHoverBg: '#0000000A',
            itemSelectedColor: '#175F66',
            itemSelectedBg: '#0000000A',
          },
          ...buttonTheme(
            '#175F66',
            '#22767f',
            '#d9f0f0',
            '#7a9fa0',
            '#e6f7f7',
            '#cceeee',
          ),
          ...tagTheme('#175F66', '#175F66', '#fff'),
          customComponents: {
            UsageBanner: {
              background: `linear-gradient(90deg, #d4f0ff 0%, #d0ffe6 100%)`, 
            },
          },
        },
      };

    case 'gold':
      return {
        token: {
          colorPrimary: '#faad14',
          colorLink: '#faad14',
          colorText: '#1a1a1a',
          colorTextSecondary: '#595959',
          colorTextHeading: '#d48806',
          colorError: '#ff4d4f',
          colorSuccess: '#52c41a',
        },
        components: {
          Menu: {
            itemColor: '#8c8c8c',
            itemHoverColor: '#d48806',
            itemHoverBg: '#fffbe6',
            itemSelectedColor: '#d48806',
            itemSelectedBg: '#fffbe6',
          },
          ...buttonTheme(
            '#faad14',
            '#ffc53d',
            '#fff7e6',
            '#d9a441',
            '#fffbe6',
            '#ffe58f',
          ),
          ...tagTheme('#faad14', '#fffbe6','#faad14'),
          customComponents: {
            UsageBanner: {
              background: `linear-gradient(90deg, #fff3d0 0%, #ffe7a1 100%)`,  
            },
          },
        },
      };

    case 'purple':
      return {
        token: {
          colorPrimary: '#722ed1',
          colorLink: '#722ed1',
          colorText: '#1a1a1a',
          colorTextSecondary: '#595959',
          colorTextHeading: '#722ed1',
          colorError: '#ff4d4f',
          colorSuccess: '#52c41a',
        },
        components: {
          Menu: {
            itemColor: '#8c8c8c',
            itemHoverColor: '#722ed1',
            itemHoverBg: '#f9f0ff',
            itemSelectedColor: '#722ed1',
            itemSelectedBg: '#f9f0ff',
          },
          ...buttonTheme(
            '#722ed1',
            '#9254de',
            '#f9f0ff',
            '#bfa6e7',
            '#f9f0ff',
            '#efdbff',
          ),
          ...tagTheme('#722ed1', '#f9f0ff','#722ed1'),
          customComponents: {
            UsageBanner: {
              background: `linear-gradient(90deg, #f0e6ff 0%, #d9c2ff 100%)`, 
            },
          },
        },
      };

    case 'cyan':
      return {
        token: {
          colorPrimary: '#13c2c2',
          colorLink: '#13c2c2',
          colorText: '#1a1a1a',
          colorTextSecondary: '#595959',
          colorTextHeading: '#13c2c2',
          colorError: '#ff4d4f',
          colorSuccess: '#52c41a',
        },
        components: {
          Menu: {
            itemColor: '#8c8c8c',
            itemHoverColor: '#13c2c2',
            itemHoverBg: '#e6fffb',
            itemSelectedColor: '#13c2c2',
            itemSelectedBg: '#e6fffb',
          },
          ...buttonTheme(
            '#13c2c2',
            '#36cfc9',
            '#e6fffb',
            '#66d9d9',
            '#e6fffb',
            '#b5f5ec',
          ),
          ...tagTheme('#13c2c2', '#e6fffb', '#13c2c2'),
          customComponents: {
            UsageBanner: {
              background: `linear-gradient(90deg, #d4faff 0%, #b5f5ec 100%)`, 
            },
          },
        },
      };

    case 'polar-green':
      return {
        token: {
          colorPrimary: '#52c41a',
          colorLink: '#52c41a',
          colorText: '#1a1a1a',
          colorTextSecondary: '#595959',
          colorTextHeading: '#389e0d',
          colorError: '#ff4d4f',
          colorSuccess: '#52c41a',
        },
        components: {
          Menu: {
            itemColor: '#8c8c8c',
            itemHoverColor: '#389e0d',
            itemHoverBg: '#f6ffed',
            itemSelectedColor: '#389e0d',
            itemSelectedBg: '#f6ffed',
          },
          ...buttonTheme(
            '#52c41a',
            '#73d13d',
            '#f6ffed',
            '#91c77a',
            '#f6ffed',
            '#d9f7be',
          ),
          ...tagTheme('#52c41a', '#f6ffed', '#52c41a'),
          customComponents: {
            UsageBanner: {
              background: `linear-gradient(90deg, #e4ffe6 0%, #c2f0cc 100%)`, 
            },
          },
        },
      };

    default:
      return {
        token: {
          colorPrimary: '#5550ff',
          colorLink: '#5550ff',
        },
        components: {
          Menu: {
            itemColor: '#9B9B9D',
            itemHoverColor: '#5550FF',
            itemHoverBg: '#F4F4FF',
            itemSelectedColor: '#5550FF',
            itemSelectedBg: '#F4F4FF',
          },
          ...buttonTheme(
            '#5550ff',
            '#6b66ff',
            '#f4f4ff',
            '#a0a0d9',
            '#F4F4FF',
            '#d6d6ff',
          ),
          ...tagTheme('#5550ff', '#F4F4FF', '#5550ff'),
          customComponents: {
            UsageBanner: {
              background: `linear-gradient(90deg, #e6e6ff 0%, #ccccff 100%)`, 
            },
          },
        },
      };
  }
};
