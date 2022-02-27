/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/phone';
const router = express.Router();

router.get('/phones', controller.getCompanyList);

export = router;