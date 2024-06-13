const router = require("express").Router()

const Project = require('../models/Project.model')

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.post('/', isAuthenticated, (req, res, next) => {
    const { projectName, description, stackUsed } = req.body
    const { _id: owner } = req.payload
    Project
        .create({ projectName, description, stackUsed, owner })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})
router.get("/", (req, res, next) => {
    Project
        .find()
        .select()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/:projectId', (req, res, next) => {
    const { projectId } = req.params

    Project
        .findById(projectId)
        .then(project => res.json(project))
        .catch(err => next(err))
})
router.put('/:projectId', (req, res, next) => {
    const { projectId } = req.params
    const { projectName, description, stackUsed } = req.body

    Project
        .findByIdAndUpdate(projectId, { projectName, description, stackUsed })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})
router.delete('/:projectId', (req, res, next) => {
    const { projectId } = req.params

    Project
        .findByIdAndDelete(projectId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})
module.exports = router;