import json
import os
from flask import Flask
from analyser import accident_detector

app = Flask(__name__)
# app.config.from_object(os.environ['APP_SETTINGS'])


@app.route('/')
def status():
    return "UP!"


@app.route('/user/<id>/climbs/<climb_id>/falls')
def get_fall(id, climb_id):
    with open('../../resources/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6.json') as f:
        data = json.load(f)

    detector = accident_detector.AccidentDetector(data)
    fall = detector.find_falls()

    return {
        'user_id': id,
        'user_name': 'Max Muster',
        'falls': [fall]
    }


if __name__ == '__main__':
    app.run(port=os.environ.get('PORT', '5000'))
