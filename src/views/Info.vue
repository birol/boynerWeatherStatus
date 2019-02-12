<template>
  <div class="info">
    <h1 class="info__title">Proje Hakkında</h1>
    <p class="info__description">Bu proje 5 Avrupa kentinin hava durumu raporunu listeleyen bir web projesidir. Bu şehirlere ait günlük hava durumu raporunun dışında sonraki 5 günün hava durumu raporunu da görüntülemeye imkan sunmaktadır.</p>

    <p class="info__description">VueJs kullanılarak hazırlanmıştır.</p>

    <p class="info__description">Stillendirme işlemleri SASS ile hazırlanıp, BEM metolojisi uygulanmıştır.</p>

    <h1 class="info__title">Şehirler Hakkında</h1>

    <p class="info__description">İl seçimleri, sevdiğim müzisyenler ve adı müzik ile bütünleşmiş şehirler düşünülerek seçildi.</p>

    <p class="info__description">
      Seattle - Kurt Cobain<br />
      Bethel - Woodstock<br />
      Teoc - Mississippi John Hurt<br />
      Salzburg - Mozart<br />
      Kırşehir - Neşet Ertaş
    </p>

    <h1 class="info__title">Geliştirici Hakkında</h1>

    <p class="info__description">2014'ten beri hem freelance hem remote hem de tam zamanlı olarak bir çok firma ile çalışmalar yaptım. 2018 yılının Ocak ayında kendi şirketimi kurdum, bir yıldır remote çalışarak bir çok firmaya projeler geliştirdim.</p>

    <p class="info__description">
      Daha detaylı bilgi için <a class="info__description__link" href="https://birolkoklu.com" target="_blank">internet sitemi</a> ziyaret edebilirsiniz.
    </p>
  </div>
</template>

<script>
export default {
  name: 'info'
}
</script>

<style lang="scss">
.info {
  display: flex;
  max-width: 750px;
  margin: auto;
  flex-direction: column;

  &__title {
    color: $yellow;
    margin: 10px 0;
  }

  &__description {
    font-size: 17px;
    line-height: 20px;
    &__link {
      color: $yellow;
      text-decoration: underline;
    }
  }
}

@media (max-width: 800px) {
  .info {
    margin-left: calc(100% - 720px);
  }
}

@media (max-width: 767px) {
  .info {
    margin-left: 0;
    margin: auto;
    width: 93%;
  }
}
</style>
