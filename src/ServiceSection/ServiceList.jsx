import React from "react";
import ServiceItem from "./ServiceItem";
import data from "../Data/dataServiceInfo";

function ServiceSection() {
  const handleClickService = (event) => {
    const childrenList = [...event.currentTarget.parentElement.children];
    const childId = event.currentTarget.id;

    childrenList.forEach((e) => {
      if (e.children[2].style.display === "flex") {
        return (e.children[2].style.display = "none");
      }
      if (e.id === childId) {
        return (e.children[2].style.display = "flex");
      }
      return (e.children[2].style.display = "none");
    });
  };
  return <ServiceItem data={data} onClick={handleClickService} />;
}
export default React.memo(ServiceSection);
