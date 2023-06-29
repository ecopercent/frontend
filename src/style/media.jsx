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

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export default media;
