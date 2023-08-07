import data from "../Data/dataServiceInfo";

import ServiceItem from "./ServiceItem";

function ServiceSection() {
  function handleClick(event) {
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
  }

  return <ServiceItem data={data} onClick={handleClick} />;
}
export default ServiceSection;
