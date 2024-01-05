import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react";
import PlacesTab from "../PlacesTab/PlacesTab.jsx";
import 'react-tabs/style/react-tabs.css';
import AddDetail from '../AddDetail/AddDetail.jsx';
import { useAuth } from '../Common/authContext.jsx';
import axios from 'axios';


const Places = () => {
    const { allPlaces, setAllPlaces } = useAuth();
    const [ladds, setLadds] = useState([]);
    const [radds, setRadds] = useState([]);
    const { adds } = useAuth();
    const categories = ["Park", "Museum", "Cafeteria", "Restaurant", "Mall"];
    console.log(categories);
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);

    useEffect(() => {
        axios.get('http://localhost:5000/places')
            .then(response => {
                setAllPlaces(response.data);
                console.log(allPlaces);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        const firstHalf = adds.slice(0, adds.length / 2);
        setLadds(firstHalf);
        const secondHalf = adds.slice(adds.length / 2);
        setRadds(secondHalf);
    }, [])





    return (
        <div className="lg:grid grid-cols-5 gap-4 mt-12">
            <div className='lg:grid grid-rows-3  sticky top-0 h-screen hidden'>
                {

                    ladds.map(add => <AddDetail
                        key={add.id}
                        add={add}
                    />)
                }

            </div>
            <div className="col-span-3 mb-4">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="font-bold text-xl">
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
            <div className='lg:grid grid-rows-3  sticky top-0 h-screen hidden'>
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



