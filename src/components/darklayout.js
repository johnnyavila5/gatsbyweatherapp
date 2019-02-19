import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
        
    weatherData{
      latitude
      longitude
      currently {
        time
        summary
        icon
        nearestStormDistance
        nearestStormBearing
        precipIntensity
        precipProbability
        temperature
        apparentTemperature
        dewPoint
        humidity
        pressure
        windSpeed
        windGust
        windBearing
        cloudCover
        uvIndex
        visibility
        ozone
      }
    }
  }
      
    `
}
    render={data => (
  <div>
    <Link to="/">
      <h3>
            <h3> Weather Info from Dark Sky</h3>
            <h3>Current Weather: {data.weatherData.currently.summary}</h3>
            <h3>Nearest Storm Distance (Miles): {data.weatherData.currently.nearestStormDistance}</h3>
            <h3>Nearest Storm Bearing (Miles): {data.weatherData.currently.nearestStormBearing}</h3>
      </h3>
      
      
    </Link>
	<Link to="/about/" style={{ float: `left`}}>
      About
    </Link>
    {children}
  </div>
    )}
  />
    )