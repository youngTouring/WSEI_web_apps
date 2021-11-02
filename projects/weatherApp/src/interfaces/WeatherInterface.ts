export interface ICoord{
    lon: number;
    lat: number;
}

export interface IWeather {
    [index: number] : IWeather;
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface IWind {
    speed: number;
    deg: number;
}

export interface IClouds {
    all: number;
}

export interface ISys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export default interface ICityWeather {
    base: string;
    clouds: IClouds;
    cod: number;
    coord: ICoord;
    dt: number;
    id: number;
    main: IMain;
    name: string;
    sys: ISys;
    weather: IWeather;
    wind: IWind;
}