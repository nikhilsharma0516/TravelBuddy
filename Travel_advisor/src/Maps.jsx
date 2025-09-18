import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Maps({ cordinates, setCordinates, setBounds,bounds,setPlace }) {
  const api_key = "AIzaSyADLxEE9I15SoK8FUyH66CKTgR6ZEiUE70";
  console.log("Map is working")
  
  console.log(cordinates, "in maps");
  return (
    <>
      <APIProvider apiKey={api_key}>
        <div className="hidden md:block w-2/3 h-[610px] my-5 shadow-lg rounded-lg overflow-hidden mr-7 flex-grow">
          <Map
            className="w-full h-full"
            defaultCenter={cordinates}
            defaultZoom={14}
            gestureHandling="greedy"
            disableDefaultUI={true}
            zoomControl={true}
            fullscreenControl={true}
            onBoundsChanged={(e) => {
              setBounds({
                ne: { lat: e.detail.bounds.north, lng: e.detail.bounds.east },
                sw: { lat: e.detail.bounds.south, lng: e.detail.bounds.west },
              });
              
            }}
          >
            {/* <Marker position={cordinates} /> */}
          </Map>
        </div>
      </APIProvider>
    </>
  );
}
