// كل بيانات المطعم القابلة للتعديل في مكان واحد
export const site = {
  name: 'STEEL',
  whatsapp: '962791994000', // رقم استقبال الحجوزات (بدون + أو أصفار)
  phones: [
    { tel: '+962791994000', label: '079 199 4000' },
  ],
  facebook: 'https://www.facebook.com/steel.jor/',
  coords: { lat: 32.5215835, lng: 35.8721237 },
  followers: '+46K',
}

// الصور: ضع الملفات في public/img بهذه الأسماء. إذا لم توجد صورة يظهر تدرّج لوني بديل.
export const img = (name) => `/img/${name}`
