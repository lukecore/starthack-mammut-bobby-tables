class fallsService {

    static getFalls() {
        return fetch("https://start-hack-mammut-bobby-tables.herokuapp.com/user/1/climbs/1/falls").then((data) => data.json()).then(data => data.falls)
    }
}

export default fallsService