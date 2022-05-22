import React, {useState} from 'react';
import Class from '../Class/Class';
import ClassGraphQL from '../Class/ClassGraphQL';
import "./Home.css";

function Home(props) {

    // Hooks help us keep track of the state of the component
    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // we don't want the default of sending post request and changing page
        if (!favoriteClasses.includes(value))
        {
            setClasses(favoriteClasses.concat(value)); // concat returns array with favoriteClasses + new class
            setValue('');
        }
        console.log(favoriteClasses);
    }

    return (
        <div className="home-structure">
            <h1>Favorite Classes</h1>
            <div className="card">
                <form onSubmit={ handleSubmit } className="form-structure">
                    <label>Add Favorite Class</label>
                    <input type="text" value={ value } onChange={ handleChange }></input>
                    <button type="submit">Add Class</button>
                </form>
            </div>

            <div className="api-columns">
                <div className="my-classes">
                    <h2 className="rest">REST API</h2>
                    {favoriteClasses.map((favClass) => 
                        <Class name={ favClass } key={ favClass }></Class>
                    )}
                </div>
                <div className="my-classes">
                    <h2 className="graphql">GRAPHQL</h2>
                    {favoriteClasses.map((favClass) => 
                        <ClassGraphQL name={ favClass } key={ favClass }></ClassGraphQL>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;