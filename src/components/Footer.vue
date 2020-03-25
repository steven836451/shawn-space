<template>
  <div class="py-2 bg-secondary text-black mt-auto text-center footer">
    <div>
      <h3>Shawn Space</h3>
    </div>
    <div>
      <ul>
        <li>
          <a href="#">
            <i class="fab fa-instagram-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/steven836451">
            <i class="fab fa-github-square fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="coptright">
      <p>&copy; copyright 2020 by Shawn</p>
      <p>此作為練習用，無商業用途</p>
      <p>
        圖文出處:
        <a href="https://shop.guess.com/en/">https://shop.guess.com/en/</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  justify-content: center;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
a{
    color:black;
    :hover{
        color:black;
        transform: scale(1.4);
        transition: 0.25s;
    }
}
</style>