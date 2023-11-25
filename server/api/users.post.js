export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  // サーバーからデータを取ってくるがfetch
  const response = await fetch("http://localhost/CPRM/API/users.php", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: new URLSearchParams(body),
  });
  const json = await response.json();
  return json;
});
