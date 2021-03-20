import json
import os
from flask import Flask, send_file, send_from_directory, safe_join, abort

from flask_cors import CORS

from analyser import accident_detector

app = Flask(__name__)
# app.config.from_object(os.environ['APP_SETTINGS'])
CORS(app)


@app.route('/')
def status():
    return "UP!"


@app.route('/user/<id>/climbs/<climb_id>')
def get_climb(id, climb_id):
    return {
        'climb_id': climb_id,
        'user_id': id,
        'user_name': 'Max Muster',
        'video_url': f'/user/{id}/climbs/{climb_id}/video'
    }


@app.route('/user/<id>/climbs/<climb_id>/video')
def get_climb_video(id, climb_id):
    print(app.instance_path)
    filename = os.path.join(app.root_path, 'resources', 'vertical', 'Straight Wall (vertical).mp4')
    # try:
    return send_file(filename, as_attachment=True)
    # except FileNotFoundError:
    #     abort(404)


@app.route('/user/<id>/climbs/<climb_id>/falls')
def get_fall(id, climb_id):
    with open('./resources/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6.json') as f:
        data = json.load(f)

    detector = accident_detector.AccidentDetector(data)
    fall = detector.find_falls()

    return {
        'user_id': id,
        'user_name': 'Max Muster',
        'falls': [fall]
    }


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.environ.get('PORT', '5000'))
