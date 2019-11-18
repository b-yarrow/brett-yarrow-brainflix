const express = require("express");
const router = express.Router();
const fileName = __dirname + "/../../model/videos.json";
let videos = require(fileName);

//  Get all videos
router.get("/", (req, res) => {
    res.json(videos.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }
    }));
});

//  Get video with :id
router.get("/:id", (req, res) => {
    // res.send(req.params.id);
    const found = videos.some(video => video.id === req.params.id);
    if (found) {
        res.json(videos.filter(video => video.id === req.params.id));
    } else {
        res
            .status(400)
            .json({ errorMessage: `Video with ID:${req.params.id} not found` });
    }
});

module.exports = router;