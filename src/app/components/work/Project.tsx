import React from "react";
//import LiveSite from "./LiveSite";

function Project(props: any) {
  return (
    <div>
      <a href={props.link} className="h-60 bg-cyan-600 p-4 rounded-xl bg-cover bg-right" style={{ backgroundImage: `url("/images/work/${props.src}")` }}>
        <span className="bg-white p-2 rounded-lg">{props.title}</span>
      </a>
      {/* <LiveSite href={props.liveSite} /> */}
    </div>
  );
}
export default Project;
