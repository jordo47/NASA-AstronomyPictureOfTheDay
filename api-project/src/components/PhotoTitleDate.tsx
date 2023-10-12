import { useState, useEffect } from "react";
import axios from "axios";
import "./DailyPhoto.css"

const url = "https://api.nasa.gov/planetary/apod?api_key=iT3cZalYqyh9PiHJzSnWMpriQIW8llzGMaZvtKt6";

export default function PhotoTitleDate()
{

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const fetchdata = async () => {
        const res = await axios.get(url);
        console.log(2)
        console.log(res.data);
        setTitle(res.data.title);
        setDate(res.data.date);
    }
    useEffect(() => {
        fetchdata();
    }, [])
    
    return (
        <div className="titledate">
            <h4>{title}</h4>
            <h5>{date}</h5>
        </div>
    );

}