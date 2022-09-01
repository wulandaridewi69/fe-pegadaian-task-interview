# Interview App

This application describes a list of job applicants who did a test interview based on the date of the test.

The challenge there is the creation of filter by new date.

## URL

A RESTful API using http://localhost:3000/data with REACT App.

```bash
Localhost : http://localhost:3000/
```
## How To Run

1. Clone this repo
```bash
git@github.com:wulandaridewi69/fe-pegadaian-task-interview.git
```

2. Before run this project, do this in your terminal :
```bash
cd my-app 
nmp i
npm start
```

## Endpoint Hilight

For users with Pro API Key, please use this root URL to make API request: http://localhost:3000/data/

##### Homepage [ / ]
`GET` /data

- API fetch : 
```
http://localhost:3000/data
```
- Response :
```
cache-control: public,max-age=300 
 Content-type: application/json; charset=utf-8 
 Expires: Tue,30 Aug 2022 06:50:25 GMT
Code : 200
Description : List all coins with market data

```

##### Detail [ /data/{id} ]
`GET` /data

- API fetch : 
```
http://localhost:3000/data/${id}
```

## Build With:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

This is a [React.js](https://reactjs.org/) project bootstrapped with [`my-app`](https://github.com/vercel/next.js/tree/canary/packages/my-app).
