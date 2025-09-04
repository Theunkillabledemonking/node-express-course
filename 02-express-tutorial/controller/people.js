let { people } = require('./data');
const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people})
}

const createPeople = (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status.json({success: false, msg: 'Please provide name Value'})
    }
    res.status(201).send({success:true, person: name});
}

const updatePeople = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => person.id === Number(id))
        if (!person) {
        return res.status(201).json({success: false, msg: `No person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(201).send({success:true, person: newPeople });
}

const deletePeople = (req, res) => {
    const {id} = req.params;

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(201).json({success: true, msg: `No person With id ${id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(201).json({success: true, data: newPeople});
}

module.exports = {getPeople, createPeople, updatePeople, deletePeople};