import express from 'express';
import Thing from '../db/Thing';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Thing.find({})
      .then(things => res.send(things))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    const thingToSave = new Thing(req.body);
    thingToSave.save()
      .then(thing => res.send(thing))
      .catch(err => res.status(400).send(err));
  });

router.route('/:thingId')
  .get((req, res) => {
    Thing.findById(req.params.thingId)
      .then(thing => res.send(thing))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Thing.findByIdAndUpdate(req.params.thingId, req.body, { new: true })
      .then(thing => res.send(thing))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Thing.findByIdAndRemove(req.params.thingId)
      .then(thing => res.send(thing))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;
