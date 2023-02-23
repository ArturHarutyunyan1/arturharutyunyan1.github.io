<template>
  <section class="education center">
    <div class="row">
      <div class="row-item">
        <p data-aos="fade-down" data-aos-delay="100">EDUCATION</p>
      </div>
      <div class="row-item">
        <div class="col">
          <div class="space-btw">
            <h1 class="title" data-aos="fade-down" data-aos-delay="200">
              TUMO Center for Creative Technologies
            </h1>
            <p class="date" data-aos="fade-down" data-aos-delay="300">
              2017 / 2022
            </p>
          </div>
          <p class="location" data-aos="fade-down" data-aos-delay="400">
            Yerevan,Armenia
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  width: 100%;
  min-height: 50vh;
}
.center {
  justify-content: unset;
  align-items: unset;
}
.row {
  margin: 35px 0;
  position: relative;
}
p {
  font-size: 18px;
  line-height: 22px;
  margin: 0 90px;
}
.title {
  font-size: 24px;
  line-height: 29px;
}
.date {
  position: absolute;
  font-size: 16px;
  line-height: 24px;
  right: 10px;
}
.location {
  margin: 5px 0;
  color: royalblue;
}
@media (max-width: 1031px) {
  .space-btw {
    flex-direction: column;
    /* float: left; */
  }
  .date {
    width: 100%;
    position: static;
    left: 0;
    margin: 10px 0;
  }
}
@media (max-width: 820px) {
  .row {
    flex-direction: column;
    margin: 25px 0;
  }
  .space-btw {
    text-align: center;
  }
  .col {
    margin: 25px 0;
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>
