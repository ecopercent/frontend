const size = {
  desktop: "1000px",
  tabletMax: "999px",
  tabletMin: "761px",
  tabletSmallMax: "760px",
  tabletSmallMin: "471px",
  mobile: "470px",
};

const media = {
  desktop: `(min-width: ${size.desktop})`,
  tabletMax: `(max-width: ${size.tabletMax})`,
  tabletMin: `(min-width: ${size.tabletMin})`,
  tabletSmallMax: `(max-width: ${size.tabletSmallMax})`,
  tabletSmallMin: `(min-width: ${size.tabletSmallMin})`,
  mobile: `(max-width: ${size.mobile})`,
};

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export default media;
