<template>
  <div class="countdown">
    <span class="time title">{{ title }}</span>
    <div v-if="!hours">
      <span>have a good day</span>
    </div>
    <div v-else>
      <span class="time">{{ hours }}</span>
      <span class="time">:</span>
      <span class="time">{{ minutes }}</span>
      <span class="time">:</span>
      <span class="time">{{ seconds }}</span>
    </div>
  </div>
</template>

<script>
import { holiday } from "./option";
export default {
  data() {
    return {
      title: "距离下一个假期还有",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  },
  mounted() {
    // 当天零点
    const currentDay = new Date(new Date().setHours(0, 0, 0, 0));
    // 节假日
    const fDay = holiday.festival;
    // 获取下一个节日的日期
    const day = this.getNextFestival(currentDay, fDay);
    console.log(day);
    // 运行倒计时
    setInterval(() => {
      // 计算时间
      this.countdown(day);
    }, 250);
  },
  methods: {
    // 计算下一个节日的日期
    getNextFestival(current, festival) {
      const obj = festival;
      // 过滤节假日列表
      for (const item of Object.keys(obj)) {
        // 比较月份
        if (item < current.getMonth() + 1) {
          delete obj[item];
        } else if (item == current.getMonth() + 1) {
          for (const item1 of Object.keys(obj[item])) {
            if (item1 < current.getDate()) {
              delete obj[item][item1];
            }
          }
        }
      }
      // 获取月
      const key = Object.keys(obj)[0];
      // 获取日
      const value = Object.keys(obj[key])[0];
      this.title = `距离${festival[key][value]}还有`;
      // 返回日期
      return `${current.getFullYear()}-${key}-${value} 00:00`;
    },
    countdown(date) {
      let targetTime = new Date(date);
      let currentTime = new Date();
      let intervalTime = parseInt(
        (targetTime.getTime() - currentTime.getTime()) / 1000
      );
      this.hours = parseInt(intervalTime / 3600);
      if (this.hours < 0) {
        return false;
      }
      if (this.hours < 10) {
        this.hours = `0${this.hours}`;
      }
      this.minutes = parseInt((intervalTime - this.hours * 3600) / 60);
      if (this.minutes < 10) {
        this.minutes = `0${this.minutes}`;
      }
      this.seconds = parseInt(
        intervalTime - this.hours * 3600 - this.minutes * 60
      );
      if (this.seconds < 10) {
        this.seconds = `0${this.seconds}`;
      }
    },
    getData() {
      // feiyan/ city
      // let url = 'https://iflow-api.uc.cn/feiyan/special?uc_param_str=pccplomi&feiyan=1&district=1&tabStart=0&tabEnd=1&tabBrief=1'
    },
  },
  watch: {},
  computed: {},
};
</script>
<style scoped>
.countdown {
  width: 100%;
  height: 100%;
  background-color: #42d5ff;
  text-align: center;
  user-select: none;
}
.time {
  color: #ffffff;
  font-size: 100px;
  font-family: "Microsoft YaHei";
  user-select: none;
}
.title {
  font-size: 50px;
}
</style> 