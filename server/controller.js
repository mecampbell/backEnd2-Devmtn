const houses = require('./db.json')
let setId = 4;

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id);
        movies.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: setId, 
            address,
            price,
            imageURL
        };
        houses.push(newHouse);
        res.status(200).send(houses);
        setID++;
},
    updateHouse: (req, res) => {
        let { id } = req.params;
        let { type } = req.body;
        let newPrice = houses[index].price;
        let index = houses.findIndex(elem => +elem.id === +id)
// use a sequce of conditional checks to see if the type is ‘minus’ or ‘plus’, and then decrease or increase the price of the hosue by $10,000.
        if (newPrice <= 10000 && type === 'minus') {
            newPrice = 0;
            res.status(200).send(houses);
        } else if (type === 'plus') {
            newPrice += 10000;
            res.status(200).send(houses);
        } else if (type === 'minus') {
            newPrice -= 10000;
            res.status(200).send(houses);
        } else {
            res.sendStatus(400);
        }
}
};