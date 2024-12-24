const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Savollar ro'yxati (misol uchun, dastlabki savollar)
let questions = [
  { question: 'Yer Quyosh atrofini nechchi kunda aylanadi?', options: ['360 kun', '365 kun', '370 kun'], correct: '365 kun' },
  { question: 'Qaysi sayyoramizda hayot mavjud?', options: ['Mars', 'Yer', 'Venus'], correct: 'Yer' },
];

// Savollarni olish
app.get('/questions', (req, res) => {
  res.json(questions);
});

// Savol qo'shish
app.post('/questions', (req, res) => {
  const newQuestion = req.body;
  if (newQuestion && newQuestion.question && newQuestion.options && newQuestion.correct) {
    questions.push(newQuestion);
    res.status(201).send('Savol qo‘shildi!');
  } else {
    res.status(400).send('Ma’lumot yetarli emas!');
  }
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server ishlamoqda: http://localhost:${PORT}`);
});
