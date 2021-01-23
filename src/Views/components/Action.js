function check_temp(city) {
    return function(dispatch) {
        let API_key = "ff9f895b2e884d6680530135202710"
        let temp = city.replace(/\s/g, '%20')
        console.log(city)
        let url = "http://api.weatherapi.com/v1/current.json?key=" + API_key + "&q=" + temp
    
        fetch(url)
            .then(response => response.json())
            .then(data => 
                dispatch({
                    type: "QUOTE_RECEIVED",
                    payload: {cel: data.current.temp_c, far: data.current.temp_f}
                })
                )
            .catch(error => dispatch({
                type: "QUOTE_FAILED",
                payload: "error"
            })
            );
    }
  }

export default check_temp;