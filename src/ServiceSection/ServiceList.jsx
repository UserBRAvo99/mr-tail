import data from "../Data/dataServiceInfo";

import ServiceItem from "./ServiceItem";

function ServiceSection({ serviceItem }) {
  return <ServiceItem data={data} onClick={serviceItem} />;
}
export default ServiceSection;
