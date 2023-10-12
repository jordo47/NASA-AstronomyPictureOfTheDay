import { useState, useEffect } from "react";
import axios from "axios";
import "./DailyPhoto.css"

const url = "https://api.nasa.gov/planetary/apod?api_key=iT3cZalYqyh9PiHJzSnWMpriQIW8llzGMaZvtKt6";

export default function DailyPhoto()
{

    const [photo, setPhoto] = useState("");
    
    const fetchdata = async () => {
        const res = await axios.get(url);
        console.log(res.data);
        setPhoto(res.data.hdurl);
    }
    useEffect(() => {
        console.log(1);
        fetchdata();
    }, [])
    
    return (
        <div>
            <img src={photo} className='photo'></img>
        </div>
    );
}