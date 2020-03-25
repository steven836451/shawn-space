<template>
  <div class="container">
    <div class="box">
      <img
        class="img"
        src="https://s7d5.scene7.com/is/image/Guess/G_Site_Feature_OurStory_01?$jpg$&wid=512"
        alt
      />
      <div class="introduce">
        <h3>GUESS起源</h3>
        <p>GUESS是由Marciano兄弟於1981年創立的，他們為了追求美國夢而離開法國南部。受歐洲風格影響，Marcianos重新定義了單寧系列。他們最初的設計之一是Marilyn修身牛仔褲。 Bloomingdale's是第一家向GUESS進貨的百貨公司，雖然只有12件牛仔褲，但它們在幾個小時內就從貨架上消失了。這是一個漫長的成功故事的開始。</p>

        <p>GUESS迅速成為年輕、性感和冒險的品牌形象。在過去的幾十年中，GUESS借助其具有標誌性的Logo和不間斷的廣告，也成就了許多著名的模特兒。 2004年，該公司為其現代系列“Marciano”萌生出零售概念。 Marciano品牌提供專為引領潮流或時尚的男女所設計。 2007年，G by GUESS零售概念誕生了，這是由於Marciano兄弟對初次移居美國時富有加州熱情的年輕人所激發的，從而獲得了南加州的青睞。</p>

        <p>時至今日，GUESS已成為真正的全球生活品牌，在全球80多個國家/地區販售單寧系列，服裝和配飾。</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.box {
  display: flex;
  margin:20px 0;
}
.img {
  max-width: 100%;
  height: auto;
}
.introduce {
  text-align: left;
  margin: auto;
  padding: 5%;
  line-height: 2em;
  h3 {
    text-align: center;
    margin-bottom: 5%;
  }
}
@media (max-width: 1000px) {
  .box {
    flex-direction: column;
  }
}
</style>