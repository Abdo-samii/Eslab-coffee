const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // التأكد من أن البريد الإلكتروني فريد
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false, // لتحديد ما إذا كان المستخدم هو مدير أم لا
  },
  jobApplicationStatus: {
    type: String,
    default: 'Not applied', // الحالة الافتراضية للتقديم على الوظيفة
  },
});

// تشفير كلمة المرور قبل حفظها في قاعدة البيانات
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // إذا لم يتم تعديل كلمة المرور، لا حاجة للتشفير
  this.password = await bcrypt.hash(this.password, 10); // تشفير كلمة المرور باستخدام bcrypt
  next();
});

// دالة للتحقق من كلمة المرور
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password); // مقارنة كلمة المرور المدخلة مع المخزنة
};

module.exports = mongoose.model('User', userSchema);
