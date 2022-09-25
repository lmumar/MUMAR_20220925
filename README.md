# Dependencies

* Node v12.22.11

# How to run?

* Clone the repo
* Compile assets
```bash
$ cd <app location>/frontend
$ nvm use
$ npm install
$ npm run bundle:dev
```
* Build docker image & run the app
```bash
 $ cd <app location>
 $ docker build -t casmedia .
 $ docker compose up -d
```
