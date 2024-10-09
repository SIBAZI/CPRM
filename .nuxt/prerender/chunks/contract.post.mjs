import { defineEventHandler, readBody } from 'file://C:/CPRM/CPRM/node_modules/h3/dist/index.mjs';

const contract_post = defineEventHandler(async (e) => {
  const body = await readBody(e);
  let params = new URLSearchParams();
  console.log(body);
  for (const table in body) {
    for (const key in body[table]) {
      console.log(`${key}`);
      params.append(`${table}[${key}]`, body[table][key]);
    }
  }
  console.log(params);
  const response = await fetch("http://localhost/CPRM/API/contracts.php", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST",
    body: params
  });
  const json = await response.json();
  return json;
});

export { contract_post as default };
//# sourceMappingURL=contract.post.mjs.map
