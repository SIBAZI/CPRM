export default defineEventHandler(async () => {
  // サーバーからデータを取ってくるがfetch
  const response = await fetch("http://localhost/CPRM/API/contracts.php", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const json = await response.json();
  return json;
});
