const express = require('express');
const app = express();
app.use(express.json({ limit: "25mb" }));
require('./database/dbConfig');
var cors=require('cors');
app.use(cors());
const path = require('path');


const UserRouter = require('./routes/userRoute')
const ImageRouter = require('./routes/imageUploadRoute');
const PaymentRouter = require('./routes/paymentRoute');
app.use(ImageRouter);
app.use(UserRouter);
app.use(PaymentRouter);




const PORT = process.env.PORT || 6001;
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });


app.use(express.static(path.join(__dirname,'build')))
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'build') });
});
