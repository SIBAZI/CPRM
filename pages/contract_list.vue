<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = useFetch("/api/contract", {
      method: "get",
    }).data;
    // console.log(result);
  },
  methods: function () {
    console.log(this.$data);
    const result = useFetch("/api/contract", {
      method: "get",
    });
    console.log(result);
  },
};
</script>

<template>
  <div class="container">
    <table border="1">
      <tbody>
        <tr>
          <th>ID</th>
          <th>userCode</th>
          <th>orderDate</th>
        </tr>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.userCode }}</td>
          <td>{{ item.orderDate }}</td>
          <td>{{ item.carModel }}</td>
          <td>{{ item.storeKubun }}</td>
          <td>{{ item.managerName }}</td>
          <td>{{ item.newCarUsedCarKubun }}</td>
          <td>{{ item.normalCarLightCarKubun }}</td>
          <td>{{ item.paymentKubun }}</td>
          <td>{{ item.tradeInCarKubun }}</td>
          <td>{{ item.insuranceKubun }}</td>
          <td>{{ item.powerOfAttorneyDate }}</td>
          <td>{{ item.normalCarDocumentsGarageVerificationDate }}</td>
          <td>{{ item.lightCarDocumentsGarageVerificationDate }}</td>
          <td>{{ item.StoringMethodDate }}</td>
          <td>{{ item.orderDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
