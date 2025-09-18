import { useContext } from "react";
import MyContext from "./MyContext";

export function PlacesDetails({ places }) {
  if (!places) {
    return <p>Loading...</p>; // while waiting for API
  }

  if (places.length === 0) {
    return <p>No places found</p>;
  }
  console.log(places);
  return (
    <>
      <div className="flex flex-wrap gap-6 ">
        {places.map((item, index) => (
          <div className="w-full  overflow-hidden rounded-b-md bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-2 mx-4 my-4">
            <img
              src={item.photo ? item.photo.images.large.url : "res.jpeg"}
              className="w-full h-48 object-cover"
            />
            <div>
              <h3 className="py-3 px-2">{item.name}</h3>
            </div>
            <div className="flex justify-between">
              <p className="px-2 pb-3">Price</p>
              <p className="px-4 pb-3">{item.price_level}</p>
            </div>
            <div className="flex justify-between">
              <p className="px-2 pb-3">Ranking</p>
              <p className="px-4 pb-3 text-sm">{item.ranking}</p>
            </div>
            <div className="flex flex-wrap gap-2 px-2 pb-3">
              {item?.cuisine?.slice(0,5).map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 shadow-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
                <img src="25530.jpg" alt="location" className="w-10 h-10 p-2 "/>
                <p className="px-4 pb-3 text-sm">{item.address}</p>
            </div>
            
            <div className="flex justify-between">
                <img src="call2.jpeg" alt="location" className="w-10 h-10 p-2 "/>
                <p className="px-4 pb-3 text-sm">{item.phone}</p>
            </div>
            
            <div className="">
                <button className="text-xs outline-0 border-0 cursor-pointer p-2 bg-gray-400 mx-4 my-2 rounded-3xl " 
                    onClick={()=> window.open(item.web_url,"_blank")}                
                >Trip Advisor</button>
                 <button className="text-xs outline-0 border-0 cursor-pointer p-2 bg-gray-400 mx-2 my-2 rounded-3xl" 
                    onClick={()=> window.open(item.website,"_blank")}                
                >Website</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
