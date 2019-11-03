import React from "react";

class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            temperature: 0,
            temperatureUnit: "",
            info: "",
            name: "",
        };

    }

    componentDidMount() {
        
        fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
            .then(res => res.json())
            .then((result) => {
                // Save the "periods" returned by the data
                let periods = result.properties.periods;

                // Update the data using the first (0) data
                // Retrieve the "temperature", 
                //  "temperatureUnit", and "detailedForecast" 
                //  properties of the object.     
                this.setState({
                    temperature: periods[1].temperature,
                    temperatureUnit: periods[1].temperatureUnit,
                    info: periods[1].detailedForecast,
                    name: periods[1].name
                });

            })
            .catch((error) => { console.log(error) });

    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h5>{this.state.temperature}
                {this.state.temperatureUnit}
                </h5>
                <p>
                    {this.state.info}
                </p>
            </div>
        );
    }

}

export default Weather;