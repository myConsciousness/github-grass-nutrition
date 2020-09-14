"use strict";

window.onload = function () {
  Array.from(document.getElementsByClassName("js-calendar-graph-svg")).forEach(
    (svgWrapper) => {
      Array.from(svgWrapper.getElementsByTagName("g"))
        .slice(1)
        .forEach((grassGroup) => {
          Array.from(grassGroup.getElementsByTagName("rect")).forEach(
            (grass) => {
              const contribution = getRandomContribution();
              grass.setAttribute("data-count", contribution);
              grass.setAttribute("fill", getLegendColor(contribution));
            }
          );
        });
    }
  );
};

const getRandomContribution = () => {
  return Math.floor(Math.random() * 81);
};

const getLegendColor = (contribution) => {
  if (contribution === 0 || contribution < 10) {
    return "#ebedf0";
  } else if (contribution < 20) {
    return "#9be9a8";
  } else if (contribution < 40) {
    return "#40c463";
  } else if (contribution < 60) {
    return "#30a14e";
  }
  return "#216e39";
};
