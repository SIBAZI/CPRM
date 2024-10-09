import { defineEventHandler, readBody } from 'file://C:/CPRM/CPRM/node_modules/h3/dist/index.mjs';

const users_post = defineEventHandler(async (e) => {
  const body = await readBody(e);
  const response = await fetch("http://localhost/CPRM/API/users.php", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST",
    body: new URLSearchParams(body)
  });
  const json = await response.json();
  return json;
});

export { users_post as default };
//# sourceMappingURL=users.post.mjs.map
