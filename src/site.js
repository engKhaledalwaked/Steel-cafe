// كل بيانات المطعم القابلة للتعديل في مكان واحد
export const site = {
  name: 'STEEL',
  whatsapp: '962771223344', // رقم استقبال الحجوزات (بدون + أو أصفار)
  phones: [
    { tel: '+962771223344', label: '077 122 3344' },
    { tel: '+962771445566', label: '077 144 5566' },
  ],
  facebook: 'https://www.facebook.com/steel.jor/',
  coords: { lat: 32.5215835, lng: 35.8721237 },
  followers: '+46K',
}

// الصور: ضع الملفات في public/img بهذه الأسماء. إذا لم توجد صورة يظهر تدرّج لوني بديل.
export const img = (name) => `/img/${name}`
