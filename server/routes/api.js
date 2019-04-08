const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const Video = require('/home/joshuareynold/Documents/VNIT/6th sem/Soft/E3/ngApp/server/models/video.js');

const db = "mongodb+srv://Joshua:family@cluster0-mgohe.mongodb.net/nptel?retryWrites=true";

mongoose.Promise = global.Promise;
mongoose.connect(db, {
  auth: {
    user: 'Joshua',
    password: 'family'
  },
  useNewUrlParser: true,
  useCreateIndex: true
}, function (err, client) {
  if (err) {
    console.error("Error! " + err);

  }
});


router.get('/videos', function (req, res) {
  // res.send('api works');
  console.log('Get request for all videos');
  Video.find({})
    .exec(function (err, videos) {
      if (err) {
        console.log("Error retirveing vids");

      } else {
        res.json(videos);

      }
    });
});

router.get('/videos/:id', function (req, res) {
  // res.send('api works');
  console.log('Get request for for a single video');
  Video.findById(req.params.id)
    .exec(function (err, video) {
      if (err) {
        console.log("Error retirveing video");

      } else {
        res.json(video);

      }
    });
});

router.post('/video', function (req, res) {
  console.log('Post a vid');
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  newVideo.save(function (err, insertedVideo) {
    if (err) {
      console.log('Error saving video');

    } else {
      res.json(insertedVideo);

    }
  });

});

router.put('/video/:id', function (req, res) {
  console.log('Update a vid');
  Video.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description
      }
    }, {
      new: true
    },
    function (err, updatedVideo) {
      if (err) {
        res.send("Error Updating vid");

      } else {
        res.json(updatedVideo);

      }
    }
  );
});

router.delete('/video/:id', function (req, res) {
  console.log("Delete vid");
  Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
    if (err) {
      res.send("Error deleting video");

    } else {
      res.json(deletedVideo);

    }
  });
});

module.exports = router;
