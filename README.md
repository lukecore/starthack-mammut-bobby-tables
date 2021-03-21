# Mammut Case by Bobby Tables
![Our History](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

tbd

# Deployment
```bash
heroku login

# Frontend
cd src/climber-frontend && yarn run build
cd ../..
heroku git:remote -a starthack-gripcast
heroku static:deploy --app starthack-gripcast

# Backend
heroku git:remote -a starthack-gripcast-api
git push heroku master

```
