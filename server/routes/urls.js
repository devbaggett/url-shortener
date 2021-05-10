import express from "express";
import { createShortenedUrl, getUrls, redirectUrl } from "../controllers/urls.js";

const router = express.Router();

router.get("/", getUrls)
router.post("/shortenUrl", createShortenedUrl);
router.get("/:shortenedUrl", redirectUrl)

export default router;
