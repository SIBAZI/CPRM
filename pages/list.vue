<script>
export default {
  data() {
    return {
      count: 0,
      users: useFetch("/api/users").data,
      text: "",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    test() {
      console.log(this.users);
    },
    async button() {
      console.log(this.text);
      const result = useFetch("/api/add", {
        method: "post",
      });
      console.log(result);
    },
  },
};
</script>

<template>
  <div id="app">
    <h3>LIST</h3>
    <button @click="increment">count is: {{ count }}</button>
    <button @click="test">button</button>
    <li v-for="user in users" :key="user.userCode">
      {{ user.userCode }}
    </li>

    <v-btn @click="button"> Button </v-btn>
    <v-text-field v-model="text" label="Label"></v-text-field>
  </div>
</template>
