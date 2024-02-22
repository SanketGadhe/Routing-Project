import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data=useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/SanketGadhe")
//       .then((response) => response.json())
//       .then((data) => {
//         setdata(data);
//       });
//   }, []);

  return (
    <div className="">
      <div className="profile flex  p-10 ml-28">
        <div className="image rounded-full ">
          <img
            src={data.avatar_url}
            className="rounded-full w-100"
            alt=" Profile Picture"
          />
        </div>
        <div className="info m-16">
          <h2 className="name">
            <span className="font-semibold text-lg mr-2">Name: </span> {data.login}
          </h2>
          <h3 className="followers"><a href={data.followers_url}>
            <span className="font-semibold text-lg mr-2">Followers:</span>{" "}
            {data.followers} </a>{" "}
          </h3>
          <h3 className="following">
          <a href={data.following_url}>
            <span className="font-semibold text-lg mr-2">Following:</span>{" "}
            {data.following} </a>
          </h3>
          <h4 className="info">
            <span className="font-semibold text-lg mr-2">Bio:</span>
            {data.bio}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Github;
export const githubdata=async ()=>{
const response=await fetch('https://api.github.com/users/SanketGadhe')
return response.json();
}