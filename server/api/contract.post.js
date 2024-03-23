//Nuxt は API と HMR をサポートするサーバーハンドラを登録するために ~/server/api ディレクトリ、~/server/routes ディレクトリ、~/server/middleware ディレクトリ
//にあるファイルを自動的にスキャンする。
//defineEventHandler：それぞれのファイルは defineEventHandler() で定義されたデフォルトの関数をエクスポートする必要がある。
//ハンドラは JSON データ、Promiseを直接返すか、event.node.res.end() を使用してレンスポンスを送信することができる。
//async:関数を定義する際、関数の先頭に付けることによって、非同期関数（asyncFunction)という特殊な関数を定義できる。
//await：awaitをPromiseインスタンスの前に記述することで、Promiseのステータスがsettled(fullfilledまたはrejected)になるまで、後続のコードの実行を待機する。
//なお、awaitは、非同期関数内(async function)でしか使用できない。
//readBody：POSTリクエストの中身をeventを指定することで取得できる。
//URLSearchParams:URLのクエリ文字列を生成するためのオブジェクト。
//append:配列を渡す
export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  let params = new URLSearchParams();
  //bodyは一回にPOSTするデータ
  console.log(body);
  for (const table in body) {
    //tableは変数の中身
    for (const key in body[table]) {
      console.log(`${key}`);
      params.append(`${table}[${key}]`, body[table][key]);
      // if (params.append(`${table}[${key}]`, body[table][key])) {
      //   params.append(`${table}[${key}]`, body[table][key]);
      // } else {
      //   params.append(`${table}[${key}]`);
      // }
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
