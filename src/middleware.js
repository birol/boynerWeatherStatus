/*
 *
 * Bu fonksiyonu Open Weather Api üzerinden gelen veri içinde tarih bilgisi
 * timestamp olarak geldiği için ve html-javascript işlemlerinfe tarih bilgisini
 * daha rahat kullananbilmek adına oluşturdum.
 *
 */

export const dateConverter = (timestamp) => {
  // console.log(timestamp)
  let fullDate = new Date(timestamp * 1000)
  // console.log(fullDate)
  let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  let year = fullDate.getFullYear()
  let month = months[fullDate.getMonth()]
  let date = fullDate.getDate()
  // console.log(fullDate.getDate())
  let dateResult = date + ' ' + month + ' ' + year
  // console.log(dateResult)
  return dateResult
}

/*
 *
 * Bu fonksiyonu hava durumu bilgisine göre havanın durumunu görsel olarakda
 * gösterebilmek adına hazırladım. Open Weather çok düşük çözünürlüklü resimler
 * kullandığı için ve bu resimler için çok anlamlı olmayan kısaltmalar kullandığı için
 * html içerisinden veri okuyarak bu görselleri birbirinden ayırmayı tercih ettim.
 *
 */

export const selectImage = (description) => {
  // console.log(description)
  if (description.indexOf('sisli') > -1) {
    return require('@/assets/icons/mist.png')
  }
  if (description.indexOf('kar') > -1) {
    return require('@/assets/icons/snow.png')
  }
  if (description.indexOf('yağmur') > -1) {
    return require('@/assets/icons/rain.png')
  }
  if (description.indexOf('bulut') > -1) {
    return require('@/assets/icons/cloud.png')
  }
  if (description.indexOf('açık') > -1) {
    return require('@/assets/icons/sun.png')
  }
  if (description.indexOf('kapalı') > -1) {
    return require('@/assets/icons/closed.png')
  }
}
