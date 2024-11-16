This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API

**使い方** DB をとりあえず docker で立ち上げているので、docker-compose.yml と.env を直接渡します

project,place については事前に DB に登録することを想定していますが、一応 POST メソッドで作れます

### エンドポイント

http://localhost:3000/api/

> user
> 認証されると勝手に生成され、/api/users/[id]に対して PUT で place を追加します
> エンドポイント例：http://localhost:3000/api/users/cm1bva92i00006gbpaq4rz2y0
> リクエスト形式:'{"projects": [projects の id]}'

> places
> QR コードを読み込むと /projects/[id]に飛ばされ、session の情報から user の id を入手して、両方を含めて api を叩く想定
> エンドポイント例： (curl -X PUT) http://localhost:3000/api/places/cm1g7rw2f00002vzioywb64pc/users/cm1bva92i00006gbpaq4rz2y0
> リクエスト形式: {}
