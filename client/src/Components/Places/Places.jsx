import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import PlacesTab from "../PlacesTab/PlacesTab.jsx";
import 'react-tabs/style/react-tabs.css';


const Places = () => {

    const categories = ["Park", "Museum", "Cafeteria", "Restaurant", "Mall"];
    console.log(categories);
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);

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
                        <PlacesTab sItem="Park" />
                    </TabPanel>
                    <TabPanel>
                        <PlacesTab sItem="Museum" />
                    </TabPanel>
                    <TabPanel>
                        <PlacesTab sItem="Cafeteria" />
                    </TabPanel>
                    <TabPanel>
                        <PlacesTab sItem="Restaurant" />
                    </TabPanel>
                    <TabPanel>
                        <PlacesTab sItem="Mall" />
                    </TabPanel>
                </Tabs>
            </div>
            <div></div>
        </div>
    );
};

export default Places;



