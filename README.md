# dynamic-ogp-with-spa

Firebase Hosting でホストされた SPA の動的パスを Cloud Run でプロキシすることで動的に OGP 画像を付加できるかの検証用リポジトリ。

`/room/:id`が動的パス

## ogp-proxy

`gcloud config get-value project`でプロジェクト ID を確認

```sh
cd ogp-proxy
```

Container Registory にビルド、push

```sh
gcloud builds submit --tag asia.gcr.io/xflag-lx-playground/ogp-proxy
```

Cloud Run にデプロイ

```sh
gcloud run deploy ogp-proxy --image asia.gcr.io/xflag-lx-playground/ogp-proxy --platform managed --allow-unauthenticated
```
