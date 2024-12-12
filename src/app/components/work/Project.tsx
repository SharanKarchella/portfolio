import React from "react";


function Project(props: any) {
  return (
      <a href={props.link} className="h-60 bg-cyan-600 p-4 rounded-xl bg-cover bg-right" style={{ backgroundImage: `url("/images/work/${props.src}")` }}>
        <span className="bg-white p-2 rounded-lg">{props.title}</span>
      </a>
  );
}
export default Project;
