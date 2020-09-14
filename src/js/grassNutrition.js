"use strict";

const LEGEND_COLOR = {
  0: "ebedf0",
  1: "9be9a8",
  2: "40c463",
  3: "30a14e",
  4: "216e39",
};

window.onload = function () {
  Array.from(document.getElementsByClassName("js-calendar-graph-svg")).forEach(
    (svgWrapper) => {
      Array.from(svgWrapper.getElementsByTagName("g"))
        .slice(1)
        .forEach((grassGroup) => {
          Array.from(grassGroup.getElementsByTagName("rect")).forEach(
            (grass) => {
              console.log(grass);
            }
          );
        });
    }
  );
};
