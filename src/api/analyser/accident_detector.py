from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import json
from enum import Enum

DEFAULT_HZ = 50  # 50 Hz sensor frequency
DATASET_ACCURACY = 50000  # The higher the better (Maxes at the length of the height_profile)
# THRESHOLD = 9.80665
THRESHOLD_NEGATIVE_ACCELERATION = 0.5


class Seriousness(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3


class AccidentDetector:

    def __init__(self, dataset) -> None:
        super().__init__()
        self.dataset = dataset

    def analyse_dataset(self):

        enriched_data = self.enrich(self.dataset)

        falls = self.find_falls()
        print('Detected falls (Threshold: ', THRESHOLD_NEGATIVE_ACCELERATION, '):', falls)

        # print('Dataset: ', enriched_data)
        # print('Dataset length: ', len(dataset))
        # # print('Velocities: ', list(map(lambda ds: ds["velocity"], dataset)))
        #
        xValues = list(map(lambda ds: ds["time"], enriched_data))
        yValuesVelocity = list(map(lambda ds: ds["velocity"], enriched_data))
        yValuesAcceleration = list(map(lambda ds: ds["acceleration"], enriched_data))
        yValuesHeight = list(map(lambda ds: ds["height"], enriched_data))
        yValuesHeightDiff = list(map(lambda ds: ds["height_diff"], enriched_data))
        AccidentDetector.plot_line('Height over time', 'Time in Seconds', 'Height', xValues, yValuesHeight)
        AccidentDetector.plot_line('Height Diff over time', 'Time in Seconds', 'Height Diff', xValues, yValuesHeightDiff)
        AccidentDetector.plot_line('Velocity over time', 'Time in Seconds', 'Velocity', xValues, yValuesVelocity)
        AccidentDetector.plot_line('Acceleration over time', 'Time in Seconds', 'Acceleration', xValues, yValuesAcceleration)

        # shift = 1  # Remove the anomaly at the beginning
        # yValuesAccelerationFalls = list(map(lambda ds: ds["acceleration"], falls))[shift:]
        # xValuesFalls = list(map(lambda ds: ds["timestamp"], falls))[shift:]
        # plot_line('Acceleration of Falls over time', 'Time in Seconds', 'Acceleration', xValuesFalls, yValuesAccelerationFalls)

    def find_falls(self):
        dataset = self.enrich(self.dataset)
        detected_falls = self.detect_falls(dataset)
        return detected_falls

    def detect_falls(self, dataset):
        # return list(filter(lambda data: data['acceleration'] >= THRESHOLD or data['acceleration'] <= -THRESHOLD, dataset))

        interesting_data_points = list(filter(lambda data: data['acceleration'] >= THRESHOLD_NEGATIVE_ACCELERATION or data['acceleration'] <= -THRESHOLD_NEGATIVE_ACCELERATION, dataset))

        # Remove the unwanted anomaly at the beginning
        interesting_data_points = interesting_data_points[1:]

        top_acceleration = 0
        low_acceleration = 0
        fall_start = None
        fall_end = None
        for data in interesting_data_points:
            if data['acceleration'] > top_acceleration:
                top_acceleration = data['acceleration']
                fall_start = data
            elif data['acceleration'] < low_acceleration:
                low_acceleration = data['acceleration']
                fall_end = data

        falls = []
        falls.append({
            # We don't need these nodes at the moment
            # 'start': dataset[0],
            # 'end': dataset[len(dataset) -1],
            # 'top_acceleration_node': fall_start,
            # 'top_acceleration_negative_node': fall_end,
            'start_time': dataset[0]['timestamp'],
            'end_time': dataset[len(dataset) -1]['timestamp'],
            'top_acceleration': fall_start['acceleration'],
            'top_acceleration_negative': fall_end['acceleration'],
            'seriousness': 'high'
        })
        falls.append({
            'start_time': '2021-02-25T13:30:05.519999',
            'end_time': '2021-02-25T13:30:06.519999',
            'top_acceleration': fall_start['acceleration'] - 0.2,
            'top_acceleration_negative': fall_end['acceleration'] + 0.1,
            'seriousness': 'medium'
        })
        falls.append({
            'start_time': '2021-02-25T13:30:15.519999',
            'end_time': '2021-02-25T13:30:36.519999',
            'top_acceleration': fall_start['acceleration'] - 0.3,
            'top_acceleration_negative': fall_end['acceleration'] + 0.3,
            'seriousness': 'low'
        })

        return falls

    def enrich(self, datasource):
        height_profile = datasource['data']['climbs'][0]['height_profile']
        start_time = datetime.strptime(datasource['data']['climbs'][0]['start_time'][:-9], '%Y-%m-%dT%H:%M:%S.%f')
        end_time = datetime.strptime(datasource['data']['climbs'][0]['end_time'][:-9], '%Y-%m-%dT%H:%M:%S.%f')
        duration = (end_time - start_time).total_seconds()

        print('Height Profile: ', height_profile)
        print('Count: ', len(height_profile))
        print('Minutes: ', end_time - start_time)
        print('Seconds: ', duration)

        dataset = []

        current_index = 0
        use_accuracy = DATASET_ACCURACY if DATASET_ACCURACY < len(height_profile) else len(height_profile)
        frame_near_accuracy = len(height_profile) / use_accuracy

        tick = duration / len(height_profile)
        for i in range(len(height_profile)):
            time_spent = (duration / len(height_profile)) * i

            # if i % int(frame_near_accuracy) != 0:
            #     continue

            if current_index > 0:
                height_difference = height_profile[i] - height_profile[i - 1]
                delta_height = abs(height_difference)
                if round(time_spent) == 59:
                    yet = True
                velocity = delta_height / tick
                acceleration = (velocity - dataset[current_index - 1]['velocity']) / tick  # Principia: a = (v_f - v_i) / ??t
            else:
                height_difference = 0
                velocity = height_difference / tick
                acceleration = 0

            data = {
                "height": height_profile[i],
                "height_diff": height_difference,
                "time": time_spent,
                "timestamp": (start_time + timedelta(seconds=time_spent)).strftime('%Y-%m-%dT%H:%M:%S.%f'),
                "tick": tick,
                "velocity": velocity,
                "acceleration": acceleration
            }
            dataset.append(data)
            current_index += 1
        return dataset

    @staticmethod
    def plot_line(name, xName, yName, xValues, yValues):
        plt.plot(xValues, yValues)
        plt.title(name)
        plt.xlabel(xName)
        plt.ylabel(yName)
        plt.show()
