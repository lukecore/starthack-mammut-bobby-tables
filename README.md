# Mammut Case "The Gripcast" by Bobby Tables

## Our Vision
We enrich the existing raw data of CLIMBAX with a detailed visualisation of your recent climbing activities to gain valuable insights. Our features will you to improve your performance and ultimately become a safer climber.

## Description
*Main idea:* 
- visualize the route one climbed in an appealing way and easy to follow way
- the visualizations helps the user to compare their activities with friends who climbed the same route
- further safety features are helping the climber to prevent injuries

*Other ideas:*
- implement security features (in case someone falls down xyz meters/xyz accelerometer in an outside environment)
- warning when overuse is detected (in order to avoid chronical desease)
- help the provider of the climbing gym to recognize where difficulties in routes are (as well as dangerous/too tricky spots)

## Technical Documentation:
- Backend
```bash
pip3 install -r requirements.txt
python3 src/api/api.py
```  
- [Frontend](https://github.com/lukecore/starthack-mammut-bobby-tables/blob/main/src/climber-frontend/README.md)

## Deployment
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
## Where does our group name come from
![Our History](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)
[Source](https://xkcd.com/327/)
