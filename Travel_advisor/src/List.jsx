import { useContext, useState } from "react";
import MyContext from "./MyContext";
import { PlacesDetails } from "./PlaceDetails";
export function List() {
  // {/* {place?.map((place,index)=>(
  //     <MyContext.Provider key={index}
  //         value={place}
  //     >
  //         {/* <PlacesDetails key={index}/>     */}
  //     </MyContext.Provider>
  // ))} */}
  const [type, setType] = useState();
  const [rating, setRating] = useState();
  const place = useContext(MyContext);
  console.log(place);
  return (
    <>
      <div className="flex gap-5 container mx-auto my-5">
        <div className="mx-4">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-1 border rounded cursor-pointer"
          >
            <option value="restaurant">Restaurant</option>
            <option value="Hotels">Hotels</option>
            <option value="Attraction">Attractions</option>
          </select>
        </div>
        <div className="mx-4">
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="px-3 py-1 border rounded cursor-pointer"
          >
            <option value={0}>All</option>
            <option value={3}>Above 3 star</option>
            <option value={4}>Above 4 star</option>
            <option value={4.5}>Above 4.5 star</option>
          </select>
        </div>
      </div>
      <div className="h-[500px] overflow-y-auto">
        <PlacesDetails places={place}/>
      </div>
    </>
  );
}
