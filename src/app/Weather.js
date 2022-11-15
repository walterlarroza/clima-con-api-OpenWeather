export class Weather {
    constructor(city, countryCode) {
        this.apikey = 'fae2693a875bad95ba5d56d6421e649e';
        this.city = city;
        this.countryCode = countryCode;
    }

}
async getWeather() {
    const URI = `http://api.openweathermap.org/data/2.5/direct?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
};