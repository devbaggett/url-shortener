import Url from "../models/url.js";

export const getUrls = async (req, res) => {
    try {
        const urls = await Url.find();
        res.status(200).json(urls);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createShortenedUrl = async (req, res) => {
    const body = req.body;
    const newUrl = new Url(body);

    try {
        await newUrl.save();
        res.status(201).json(newUrl);
    } catch (error) {
        if (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                // Duplicate URL
                return res.status(422).send({message: 'URL already exists!'});
            }
            // Some other error
            return res.status(409).json({message: error.message});
        }
    }
};

export const redirectUrl = async (req, res) => {
    try {
        const url = await Url.findOne({short: req.params.shortenedUrl});
        url.clicks++;
        url.save();
        res.status(200).json(url.original);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
