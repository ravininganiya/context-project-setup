import { useContext } from "react";
import ProjectContext from "./Context/ProjectContext";
const Country = () => {
  const { countryList } = useContext(ProjectContext);
  console.log(countryList, "countryList");
  return (
    <>
      {countryList.map((item) => (
        <div>{item.countryName}</div>
      ))}
    </>
  );
};

export default Country;
