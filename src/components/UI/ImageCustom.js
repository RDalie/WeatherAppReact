import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from './ImageCustom.module.css';

const api = process.env.REACT_APP_UNSPLASH_API
const ImageCustom = (props) => {

const [img, setImage] = useState("https://images.unsplash.com/photo-1682685797208-c741d58c2eff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTcwMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MzczMTM3N3w&ixlib=rb-4.0.3&q=85");

const fetchData = async () => {
  let response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${api}&per_page=8&query=${props.location}`    );

    console.log(response.data);
  setImage(response.data.results[0].urls.full);

}

useEffect(() => {fetchData()}, [props.location]);

  return  <div style={{ backgroundImage: `url(${img})` }} className={classes.back}>{props.children}</div>;
};

export default ImageCustom;
