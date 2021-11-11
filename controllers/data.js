const asyncHandler = require('express-async-handler');

const karrieretagModel = require('../model/data');

const getAnträge = asyncHandler(async (req, res) => {
  const { data } = await karrieretagModel.getAnträge();
  res.status(200).json(data);
});

module.exports = { getAnträge };
