# This is a student project by which we try to solve the problem of recycling

## This is done by Team 78

Thar Lin Shwe
Harsha Vardhini Boopathi
Wong Yuan Jie, Jeremy
Jia Min Sylvia Bay

## To get started you must install node and run respective commands in the terminal for each environment: dev, prod

Before that don't forget to creat **.env** file in the root folder

```bash
NEXTAUTH_SECRET=SECRET
NEXT_PUBLIC_BASE_API_URI=http://localhost:4000
NEXT_PUBLIC_API_URI=http://localhost:4000/api/v1
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### dev

```bash
npm run dev
```

### production

```bash
npm run build
npm start
```

### It is recommended to run in a **linux** environment. Otherwise, you may face _cors_ error.
