import express from 'express';
import { Express, Request, Response } from 'express'; // Import types
import cors from 'cors';

const app: Express = express();
const port = 8080;

app.use(express.json());
app.use(cors());

// // react側で画像を表示させるために必要なもの
// app.use('/api/images', express.static('/backend/public/images'));

// // user関係のルーティング
// app.post('/api/users/register', createUser);

app.get('/work', (req: Request, res: Response) => {
    const message = 'Hello World!'; // 送信したいメッセージを変数に格納
    res.status(200).json({ message }); // 変数をJSONレスポンスとして送信
});

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));