const ISIData = require("./models/ISIData");

// create and save new data
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be emtpy!"
        });
        return;
    }

    const total = parseInt(req.body.question1) + parseInt(req.body.question2) +
        parseInt(req.body.question3) + parseInt(req.body.question4) + parseInt(req.body.question5) +
        parseInt(req.body.question6) + parseInt(req.body.question7);
    const category = findCategory(total);

    // new data
    const isi_data = new ISIData({
        measure: "Insomnia Severity Index",
        time_frame: "2 weeks",
        questions: [{
                question: "Difficulty falling asleep",
                answer: req.body.question1,
            },
            {
                question: "Difficulty staying asleep",
                answer: req.body.question2,
            },
            {
                question: "Problems waking up too early",
                answer: req.body.question3,
            },
            {
                question: "How SATISFIED/DISSATISFIED are you with your CURRENT sleep pattern?",
                answer: req.body.question4
            },
            {
                question: "How NOTICEABLE to others do you think your sleep problem is in terms of impairing the quality of your life?",
                answer: req.body.question5,
            },
            {
                question: "How WORRIED/DISTRESSED are you about your current sleep problem?",
                answer: req.body.question6,
            },
            {
                question: "To what extent do you consider your sleep problem to INTERFERE with your daily functioning",
                answer: req.body.question7,
            },
        ],
        total: total,
        category: category
    });

    // save data in the database
    isi_data
        .save(isi_data)
        .then(data => {
            // res.send(data)
            res.redirect('/result');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error occurred on create operation"
            });
        });

}

// retrieve and return all data or just data by id
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        ISIData.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: "No data found with id: " + id
                    })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "error retrieving data with id " + id
                })
            })

    } else {
        ISIData.find()
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "error occurred on retriving data"
                })
            })
    }


}

// Update a new idetified data by data id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({
                message: "data is empty"
            })
    }

    const id = req.params.id;
    ISIData.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `cannot update data with ${id}. data not found!`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error occurred on updating data"
            })
        })
}

// Delete a data with specified data id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ISIData.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `cannot delete with id ${id}. id not found`
                })
            } else {
                res.send({
                    message: "data was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "could not delete data with id=" + id
            });
        });
}


// Helper functions

function findCategory(score) {
    if (score >= 0 && score <= 7) {
        return "No clinically significant insomnia";
    } else if (score >= 8 && score <= 14) {
        return "Subthreshold insomnia";
    } else if (score >= 15 && score <= 21) {
        return "Clinical insomnia (moderate severity)";
    } else if (score >= 22 && score <= 28) {
        return "Clinical insomnia (moderate severity)";
    } else {
        return "";
    }
}