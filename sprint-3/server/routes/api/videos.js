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

//  Create new Video
router.post("/", (req, res) => {
    const newVideo = {
        id: helper.getNewId(videos),
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    };
    if (!newVideo.title || !newVideo.description || !newVideo.image) {
        return res.status(400).json({
            errorMessage: "Please provide title, description and image for new video"
        });
    }
    videos.push(newVideo);
    // console.log(JSON.stringify(students));
    helper.writeJSONFile(fileName, videos);
    res.json(videos);
});

module.exports = router;