"use strict";

const exportController = require("../controllers/exportController");
const Router = require('koa-router');
const router = new Router({
	prefix: '/export'
});

router.post("/", 
  exportController.create
)



module.exports = router

