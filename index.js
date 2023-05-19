import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config.js';
import { sequelize } from './db/database.js';
import bodyParser from 'body-parser';
import adminRouter from './router/admin/admin.js';
import mainRouter from './router/main/main.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router
app.use('/admin', adminRouter);
app.use('/main', mainRouter);

// 에러 페이지
app.use((req, res, next) => {
    res.sendStatus(404)
});
app.use((error, req, res, next) => {
    console.log(error)
    res.sendStatus(500)
});

// 실행
sequelize.sync().then(() => {
    app.listen(config.host.port);
    console.log('Sequelize 연결 상태 양호')
});