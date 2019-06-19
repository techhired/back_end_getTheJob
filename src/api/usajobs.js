// 'use strict';
//
// require('dotenv').config();
// const request = require('superagent');
// const cors = require('cors');
// const express = require('express');
// const authRouter = express.Router();
//
// let job = "Software";
// let location = "Seattle";
//
// request
//   .get(`https://data.usajobs.gov/api/search?Keyword=${job}&LocationName=${location}`)
//   .set("User-Agent": process.env.USA_JOBS_EMAIL, "Authorization-Key": process.env.USA_JOBS_API_KEY)
//
//
// function getUSAJobs(url);