import { useState, useEffect } from "react";
import axios from "axios";
import "./DailyPhoto.css"

const url = "https://api.nasa.gov/planetary/apod?api_key=iT3cZalYqyh9PiHJzSnWMpriQIW8llzGMaZvtKt6";

export default function PhotoDescription()
{

    const [desc, setDesc] = useState("");

    const fetchdata = async () => {
        const res = await axios.get(url);
        console.log(2)
        console.log(res.data);

        setDesc(res.data.explanation);
    }
    useEffect(() => {
        fetchdata();
    }, [])
    
    return (
        <div className="right">
            <p className="center">{desc}</p>
        </div>
    );

}