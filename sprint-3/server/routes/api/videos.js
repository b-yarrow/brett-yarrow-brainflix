const express = require("express");
const router = express.Router();
const fileName = __dirname + "/../../model/videos.json";
let videos = require(fileName);
const helper = require("../../helper/helper");

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
        // res.json(Object(videos.filter(video => video.id === req.params.id)));
        res.json(videos.find(video => video.id === req.params.id));
    } else {
        res
            .status(400)
            .json({ errorMessage: `Video with ID:${req.params.id} not found` });
    }
});

//  Create new Video
router.post("/", (req, res) => {
    // console.log(req.body)
    const newVideo = {
        id: helper.getNewId(videos),
        title: req.body.title,
        channel: req.body.channel,
        image: req.body.image,
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "2:35",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: new Date().getTime(),
        comments: [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ]
    };
    // console.log(newVideo)
    if (!newVideo.title || !newVideo.description) {
        console.log('failure')
        return res.status(400).json({
            "errorMessage": "Please provide title and description for new video"
        });
    }
    videos.push(newVideo);
    // console.log(JSON.stringify(students));
    helper.writeJSONFile(fileName, videos);
    return res.status(201).json(newVideo);
});


//  Create new Comment
router.post("/:id/comments", (req, res) => {
    // console.log(req.body)

    // res.send(req.params.id);
    const found = videos.some(video => video.id === req.params.id);
    if (found) {
        // res.json(Object(videos.filter(video => video.id === req.params.id)));
        // res.json(videos.find(video => video.id === req.params.id));
        if (req.body.comment) {
            const newComment = {
                name: req.body.name,
                comment: req.body.comment,
                id: helper.getNewId(videos),
                likes: 0,
                timestamp: new Date().getTime()
            }
            // videos.find(video => video.id === req.params.id).comments.push(newComment);
            console.log(newComment)
            console.log(videos.find(video => video.id === req.params.id).comments);
            const commentList = videos.find(video => video.id === req.params.id).comments
            videos.find(video => video.id === req.params.id).comments.unshift(newComment);
            helper.writeJSONFile(fileName, videos);
            return res.status(201).json(commentList);
        } else {
            return res.status(400).json({ errorMessage: 'Please enter a comment' });
        }
    } else {
        return res
            .status(400)
            .json({ errorMessage: `Video with ID:${req.params.id} not found` });
    }
});


module.exports = router;