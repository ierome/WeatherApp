import React, { useState } from 'react'
import { Form, Select, Button, Icon } from 'semantic-ui-react'
import data from './data.json'
import moment from 'moment'
import '../styles/WeatherSelect.css'
import { useSelector } from 'react-redux'
import WeatherCard from './WeatherCard'

export default props => {
const [day, setDay] = useState('2019-08-01 12:00:00')

const todos = useSelector(appState => appState.weather)

const grabDates = data.list.filter(item => {
    if (item.dt_txt.includes("12:00:00")) {
        return true;
    }}).map(item => {
    return {
        text: moment(item.dt_txt).format('dddd'),
        key: item.dt,
        value: moment(item.dt_txt).format('YYYY-MM-DD 12:00:00')
    }
})

const handleOnChange = (e, data) => {
    setDay(data.value)
 }

    return (
        <div id="mainWrapper">
            <h1>WeatherApp</h1>
            <Form id="mainForm">
            <Select onChange={handleOnChange} placeholder='Select the day to see the weather' options={grabDates} id="dropdown" />
            {/* <Button id="checkout" animated>
                <Button.Content visible>Check out the Weather!</Button.Content>
                <Button.Content hidden>
                <Icon name='arrow right' />
                </Button.Content>
            </Button> */}
            </Form>
            <WeatherCard day={day}></WeatherCard>
        </div>
    )
}