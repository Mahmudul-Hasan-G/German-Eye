import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react";
import PlacesTab from "../PlacesTab/PlacesTab.jsx";
import 'react-tabs/style/react-tabs.css';
import AddDetail from '../AddDetail/AddDetail.jsx';


const Places = () => {
    const [adds, setAdds] = useState([]);
    const [ladds, setLadds] = useState([]);
    const [radds, setRadds] = useState([]);
    const categories = ["Park", "Museum", "Cafeteria", "Restaurant", "Mall"];
    console.log(categories);
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);

    fetch('adds.json')
        .then(res => res.json())
        .then(data => {
            setAdds(data)
        })

    useEffect(() => {
        const firstHalf = adds.slice(0, adds.length / 2);
        setLadds(firstHalf);
        const secondHalf = adds.slice(adds.length / 2);
        setRadds(secondHalf);

    }, [adds]);


    return (
        <div className="grid grid-cols-5 gap-4 mt-12">
            <div className='grid grid-rows-3  sticky top-0 h-screen'>
                {

                    ladds.map(add => <AddDetail
                        key={add.id}
                        add={add}
                    />)
                }

            </div>
            <div className="col-span-3 mb-4">
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
            <div className='grid grid-rows-3  sticky top-0 h-screen'>
                {

                    radds.map(add => <AddDetail
                        key={add.id}
                        add={add}
                    />)
                }

            </div>
        </div>
    );
};

export default Places;



