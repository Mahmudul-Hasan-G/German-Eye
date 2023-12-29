import { useLocation } from "react-router-dom";
//import Place from "../Common/Place";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import CityTab from "../CityTab/CityTab";
import 'react-tabs/style/react-tabs.css';


const SelectedCity = () => {
    const categories = [ "Park", "Museum", "Cafeteria", "Restaurant", "Mall"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  
    const location = useLocation();
    const {places} = location.state || {};
    console.log(places);
    return (
        <div className="grid grid-cols-5 gap-4 my-12">
            <div></div>
            <div className="col-span-3">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>PARK</Tab>
    <Tab>MUSEUM</Tab>
    <Tab>CAFETERIA</Tab>
    <Tab>RESTAURANT</Tab>
    <Tab>MALL</Tab>
  </TabList>
  <TabPanel>
    <CityTab sItem = "Park" />
  </TabPanel>
  <TabPanel>
  <CityTab sItem = "Museum" />
  </TabPanel>
  <TabPanel>
  <CityTab sItem = "Cafeteria" />
  </TabPanel>
  <TabPanel>
  <CityTab sItem = "Restaurant" />
  </TabPanel>
  <TabPanel>
  <CityTab sItem = "Mall" />
  </TabPanel>
</Tabs>
            </div>
            {/* <div className="grid grid-cols-3 col-span-3 gap-4">
                {
                    places.map(place => <Place
                        key={place._id}
                        place={place}
                    />)
                }
            </div> */}
            <div></div>
        </div>
    );
};

export default SelectedCity;