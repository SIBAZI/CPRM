export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  let params = new URLSearchParams();
  for (const table in body) {
    for (const key in body[table]) {
      // console.log(`${key}`);
      params.append(`${table}[${key}]`, body[table][key]);
    }
  }
  console.log(params);
  // サーバーからデータを取ってくるがfetch
  const response = await fetch("http://localhost/CPRM/API/contracts.php", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: params,
  });

  const json = await response.json();
  return json;
});
