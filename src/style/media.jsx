const size = {
  desktop: "1264px",
  tabletM: "1263px",
  tabletS: "770px",
  mobile: "470px",
};

const media = {
  desktop: `(min-width: ${size.desktop})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletS: `(max-width: ${size.tabletS})`,
  mobile: `(max-width: ${size.mobile})`,
};

export default media;
