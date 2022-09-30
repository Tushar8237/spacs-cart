import React from "react";
import "./Feed.css";
import { data } from "../../../utils/data";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Feed() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Feeds</h1>
      <div className="Feed">
        <Slide>
          {data.map((x) => (
            <div className="feed_section">{x.image}</div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Feed;
