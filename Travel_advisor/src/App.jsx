import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Header from "./Header";
import { List } from "./List";
import { useEffect, useState } from "react";
import CallData from "./CallData";
import MyContext from "./MyContext";
import Maps from "./Maps";
function App() {
  const [cordinates, setCordinates] = useState();
  const [bounds, setBounds] = useState(null);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords; // correct destructuring
      setCordinates({ lat: latitude, lng: longitude });
      setBounds({
        ne: { lat: latitude + 0.05, lng: longitude + 0.05 },
        sw: { lat: latitude - 0.05, lng: longitude - 0.05 },
      });
    });
  }, []);

  useEffect(() => {
    if (bounds && cordinates) {
      console.log(cordinates, bounds, "in app useeffect");
      CallData(bounds.ne, bounds.sw).then((res) => {
        setPlace(res.data.data);
        console.log("call data run");
      });
    }
  }, [bounds,cordinates]);
  return (
    <>
      <Header />

      <div className="flex  gap-4 w-full">
        <div className="w-1/3">
          <MyContext.Provider value={place}>
            <List className="" />
          </MyContext.Provider>
        </div>
        {
          cordinates?(<Maps
          cordinates={cordinates}
          setCordinates={setCordinates}
          setBounds={setBounds}
          bounds={bounds}
          setPlace={setPlace}
        />):null
        }
      </div>
    </>
  );
}

export default App;
