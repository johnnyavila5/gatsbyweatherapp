module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '3b05cd6d46b13fd6045c7286d821c1d5',
        location: 'Chicago',
        units: 'metric',
        type: 'forecast'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: 'e862e505ae42d5ccb993556aa9d4540c',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: [`minutely`, `hourly`, `flags`]
      },
    } 
    
  ]
}