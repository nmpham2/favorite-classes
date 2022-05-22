import "./Class.css";
import React, {useState, useEffect} from 'react';

function Class(props) {

    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + props.name);
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    });

    return (
        <div className="class">
            { props.name }
        </div>
    );
}

export default Class;