import { defineEventHandler } from 'file://C:/CPRM/CPRM/node_modules/h3/dist/index.mjs';

const contract_get = defineEventHandler(async () => {
  const response = await fetch("http://localhost/CPRM/API/contracts.php", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  });
  const json = await response.json();
  return json;
});

export { contract_get as default };
//# sourceMappingURL=contract.get.mjs.map
