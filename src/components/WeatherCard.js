import React from 'react'
import data from './data.json'
import moment from 'moment'
import { declareTypeAlias } from '@babel/types';
import { Card, Icon, Image } from 'semantic-ui-react'

export default props => {

function getImage(main) {
    if (main === "Clear") {
        return "http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png"
    } else if (main === "Clouds") {
        return "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clouds-icon.png"
    } else if (main === "Rain") {
        return "http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42670-cloud-with-rain-icon.png"
    }
}


    return (
    <>
    {data.list.filter(item => {
        if (item.dt_txt.includes(props.day)) {
            return true
        } else {
            return false
        }
    }).map((item, i) => {
        return (
<div id="weatherCard">
            <Card key={i}>
    <Image src={getImage(item.weather[0].main)} wrapped ui={false} />
    <Card.Content>
        <Card.Header>{moment(item.dt_txt).format("LLL")}</Card.Header>
        <Card.Meta>Low: {item.main.temp_min}°F High: {item.main.temp_max}°F</Card.Meta>
        <Card.Description>

        </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
            <Icon name='user' />
            See more!
        </a>
     </Card.Content>
    </Card>
    <div id="description">
        <p>{moment(item.dt_txt).format("dddd")} is looking like a minimum of {item.main.temp_min}°F and a high of {item.main.temp_max}°F</p>
        <p>We have a wind speed of {item.wind.speed}MPH</p>
        <p>Humidity percentages are at {item.main.humidity}%</p>
    </div>
    </div>
        )
    })}
    </>
    )
}