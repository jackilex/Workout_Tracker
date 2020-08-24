const router = require("express").Router();
const Workout=require("../models/Workout.js")
const mongoose = require("mongoose");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkouts => {
          consolse.log('getting docs')
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err.message);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
    Workout.update({_id: mongoose.Types.ObjectId(req.params.id)},{$push:{exercises:req.body}},{new:true})
      .then(dbWorkouts => {
          consolse.log('updating')
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


  module.exports = router;

