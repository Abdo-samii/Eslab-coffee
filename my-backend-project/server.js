const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const User = require('./models/User'); // استيراد نموذج المستخدم

const app = express();

// تمكين CORS
app.use(cors());
app.use(bodyParser.json());

// ربط مع MongoDB
mongoose.connect('mongodb+srv://abdoook708:k5SOYPVs5DsercXT@cluster0.6xc9i.mongodb.net/merncorsess?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error MongoDB:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// إعداد الاتصال مع Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // يمكنك تغيير الخدمة إلى أي خدمة بريد أخرى مثل Outlook أو غيرها
  auth: {
    user: 'your-email@gmail.com',  // استبدل هذا ببريدك الإلكتروني
    pass: 'your-email-password',  // استبدل هذا بكلمة مرور بريدك الإلكتروني أو كلمة مرور تطبيق Gmail
  },
});

// تسجيل مستخدم جديد
app.post('/api/register', async (req, res) => {
  const { email, password, confirmPassword, googleEmail } = req.body;

  try {
    // تحقق من وجود البريد الإلكتروني مسبقًا
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    // تحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, googleEmail });
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// تسجيل الدخول
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// استعادة كلمة المرور
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: 'Email not found' });

    // إنشاء توكن لإعادة تعيين كلمة المرور
    const resetToken = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    // رابط إعادة تعيين كلمة المرور
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    // إعداد البريد الإلكتروني
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      text: `Click the following link to reset your password: ${resetLink}`,
    };

    // إرسال البريد الإلكتروني
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Failed to send email' });
      }
      res.json({ success: true, message: 'Password reset link sent to your email' });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// التحقق من التوكن لحماية المسارات
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ success: false, message: 'No token provided' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId; 
    next();
  });
}

// حماية مسارات للتأكد من أنه تم تسجيل الدخول
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ success: true, message: 'This is a protected route', userId: req.userId });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000')); 
