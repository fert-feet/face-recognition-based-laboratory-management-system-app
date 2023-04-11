<template>
  <view class="container">
    <template>
      <uni-card
          style="border-radius: 18px 18px 18px 18px"
          class="login-card"
          padding="25px"
          :border="true"
          :is-shadow="true"
          :shadow="cardShadow"
          :is-full="true">
        <template>
          <u-text text="登录" size="18" style="margin-top: 15px" align="center"></u-text>
          <u-input
              style="margin-top: 30px"
              placeholder="请输入用户名"
              border="surround"
              v-model="username"
              @change="handleUsernameChange"
          ></u-input>
          <u-input
              style="margin-top: 30px"
              placeholder="请输入密码"
              border="surround"
              v-model="password"
              @change="handleUsernameChange"
          ></u-input>
          <u-button @click="handleLogin" style="margin-top: 30px" type="primary" shape="circle" text="登录"></u-button>
        </template>
      </uni-card>
    </template>
    <template>
    </template>
  </view>
</template>

<script>
import UButton from "../../uni_modules/uview-ui/components/u-button/u-button.vue";
import UInput from "../../uni_modules/uview-ui/components/u--input/u--input.vue";
import UniCard from "../../uni_modules/uni-card/components/uni-card/uni-card.vue";
import UText from "../../uni_modules/uview-ui/components/u-text/u-text.vue";
import {request} from "../../request/request";

export default {
  components: {UText, UniCard, UInput, UButton},
  data() {
    return {
      href: 'https://uniapp.dcloud.io/component/README?id=uniui',
      username: '',
      password: '',
      cardShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.08)"
    }
  },
  methods: {
    // username change
    handleUsernameChange(username) {
      console.log('username', username)
    },
    // login
    handleLogin() {
      request({
        url: "/person/list",
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          page: 3
        }
      }).then(res => {
      })
    }

  }
}
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}

.login-card {
  height: 300px;
}
</style>
