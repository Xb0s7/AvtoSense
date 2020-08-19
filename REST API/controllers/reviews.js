const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Review.find()
            .then((reviews) => {
                const sorted = reviews.reverse();
                res.send(sorted);
            }
            )
            .catch(next);
    },

    post: (req, res, next) => {
        const { firstName, lastName, email, review } = req.body;

        models.Review.create({ firstName, lastName, email, review })
            .then((createdReview) => {

                console.log(createdReview);
                res.sendStatus(200);
            })
            .catch(next);
    },
};