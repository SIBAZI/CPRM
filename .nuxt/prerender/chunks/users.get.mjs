import { defineEventHandler } from 'file://C:/CPRM/CPRM/node_modules/h3/dist/index.mjs';

const users_get = defineEventHandler(async () => {
  const response = await fetch("http://localhost/CPRM/API/users.php", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  });
  const json = await response.json();
  return json;
});

export { users_get as default };
//# sourceMappingURL=users.get.mjs.map
