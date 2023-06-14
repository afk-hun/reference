import Card from "../../card/Card"

interface WeatherProps {
    path: string;
}

const WeatherCard = (props: WeatherProps) => {
    return (<Card name={"Weather"} path={props.path} />)
}

export default WeatherCard;