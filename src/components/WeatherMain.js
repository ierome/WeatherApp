import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import data from './data.json'
import moment from 'moment'
import '../styles/WeatherMain.css'

export default props => {


    return (
        <div id="mainWrapper">
            <div id="header">
                <h1>Current Weather</h1>
            </div>
            <div className="weatherContents">
{data.list.filter(item => {
    if (item.dt_txt.includes("08-01")) {
        return true
    }
}).map(item => {
    return (
    <Card>
    <Image src='http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png' wrapped ui={false} />
    <Card.Content>
        <Card.Header>{moment(item.dt_txt).format("LLL")}</Card.Header>
        <Card.Meta>Low: {item.main.temp_min} High: {item.main.temp_max}</Card.Meta>
        <Card.Description>

        </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
            <Icon name='user' />
            10 Friends
        </a>
     </Card.Content>
    </Card>
    )})}
            </div>
            <div className="weatherContents">
{data.list.filter(item => {
    if (item.dt_txt.includes("08-02")) {
        return true
    }
}).map(item => {
    return (
    <Card>
    <Image src='http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png' wrapped ui={false} />
    <Card.Content>
        <Card.Header>{moment(item.dt_txt).format("dddd")}</Card.Header>
        <Card.Meta>Low: {item.main.temp_min} High: {item.main.temp_max}</Card.Meta>
        <Card.Description>

        </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
            <Icon name='user' />
            10 Friends
        </a>
     </Card.Content>
    </Card>
    )})}
            </div>
            <div className="weatherContents">
{data.list.filter(item => {
    if (item.dt_txt.includes("08-03")) {
        return true
    }
}).map(item => {
    return (
    <Card>
    <Image src='http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png' wrapped ui={false} />
    <Card.Content>
        <Card.Header>{moment(item.dt_txt).format("dddd")}</Card.Header>
        <Card.Meta>Low: {item.main.temp_min} High: {item.main.temp_max}</Card.Meta>
        <Card.Description>

        </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
            <Icon name='user' />
            10 Friends
        </a>
     </Card.Content>
    </Card>
    )})}
            </div>
            <div className="weatherContents">
{data.list.filter(item => {
    if (item.dt_txt.includes("08-04")) {
        return true
    }
}).map(item => {
    return (
    <Card>
    <Image src='http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png' wrapped ui={false} />
    <Card.Content>
        <Card.Header>{moment(item.dt_txt).format("dddd")}</Card.Header>
        <Card.Meta>Low: {item.main.temp_min} High: {item.main.temp_max}</Card.Meta>
        <Card.Description>

        </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
            <Icon name='user' />
            10 Friends
        </a>
     </Card.Content>
    </Card>
    )})}
            </div>
        </div>
    )
}