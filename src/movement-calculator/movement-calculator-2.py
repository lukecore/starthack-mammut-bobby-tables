import h5py as h5
from mpl_toolkits import mplot3d
import matplotlib.pyplot as plt
import numpy as np


def plot_line(name, xName, yName, xValues, yValues):
    plt.plot(xValues, yValues)
    plt.title(name)
    plt.xlabel(xName)
    plt.ylabel(yName)
    plt.show()


rawData = h5.File("../../resources/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6.h5", "r")

print(list(rawData.keys()))

# Dataset 'acc_LH' // Acceleration on Left Hand
# Member 'timestamp': // Ist in seconds
# Member 'AP': // Anterior-Posterior axis (Handrücken)
# Member 'UR': // Ulna-Radial Axis (Ringfinger - Daumen)
# Member 'DP': // Distal-Proximal Axis (Fingerspitzen - Handballen)
# !!!!Immer in Meter
# !!!!Immer in Sekunden

raw_reference_frames = rawData['/acc_LH']
reference_frames = raw_reference_frames # [10000:20000:100]


# Values is in Meters
anchors = [{
    'timestamp': reference_frames[0]['timestamp'],
    'time': 0,
    'xVelocity': 0,
    'yVelocity': 0,
    'zVelocity': 0,
    'x': 0,
    'y': 0,
    'z': 0
}]


def calculate_progress(velocity, duration):
    return velocity * duration


def calculate_velocity(speed_initial, time, acceleration):
    # print('Calculating Velocity from (si, time, acc):', speed_initial, time, acceleration)
    return speed_initial + time * acceleration  # Principia: v_i + at = v_target

print(reference_frames[0-1][0])

start_time = reference_frames[0]['timestamp']
for i in range(len(reference_frames)):
    frame = reference_frames[i]
    past_time = frame[0] - reference_frames[i-1][0]

    xVelocity = calculate_velocity(anchors[i-1]['xVelocity'], past_time, frame[2])
    yVelocity = calculate_velocity(anchors[i-1]['yVelocity'], past_time, frame[3])
    zVelocity = calculate_velocity(anchors[i-1]['zVelocity'], past_time, frame[1])

    anchor = {
        'timestamp': frame['timestamp'],
        'time': frame['timestamp'] - start_time,
        'xVelocity': xVelocity,
        'yVelocity': yVelocity,
        'zVelocity': zVelocity,
        'x': anchors[i-1]['x'] + calculate_progress(xVelocity, past_time),
        'y': anchors[i-1]['y'] + calculate_progress(yVelocity, past_time),
        'z': anchors[i-1]['z'] + calculate_progress(zVelocity, past_time),
    }
    anchors.append(anchor)
    # print(frame)
    # print(anchor)

# print(anchors[10000:20000:100])

# for frame in reference_frames:
#     if frame[3] < 0:
#         print(frame)

xValues = list(map(lambda ds: ds["time"], anchors))
xxValues = list(map(lambda ds: ds["x"], anchors))
yValues = list(map(lambda ds: ds["y"], anchors))
zValues = list(map(lambda ds: ds["z"], anchors))
xValuesAcceleration = list(map(lambda ds: ds[2], reference_frames))
yValuesAcceleration = list(map(lambda ds: ds[3], reference_frames))
zValuesAcceleration = list(map(lambda ds: ds[1], reference_frames))
yValuesHeightOTime = 0
# plot_line('x over time', 'Time in Seconds', 'x', xValues, xxValues)
# plot_line('y over time', 'Time in Seconds', 'y', xValues, yValues)
# plot_line('z over time', 'Time in Seconds', 'z', xValues, zValues)
plot_line('x acc over time', 'Time in Seconds', 'Acceleration', xValues[1:], xValuesAcceleration)
plot_line('y acc over time', 'Time in Seconds', 'Acceleration', xValues[1:], yValuesAcceleration)
plot_line('z acc over time', 'Time in Seconds', 'Acceleration', xValues[1:], zValuesAcceleration)

# Display the different axis acceleration in 2d
# for value in acc_LH:
#     ap_LH.append(value['AP'])
#     ur_LH.append(value['UR'])
#     dp_LH.append(value['DP'])
#     timestamps_LH.append(value['timestamp'])
#
# plt.plot(timestamps_LH, ap_LH, 'r', timestamps_LH, ur_LH, 'b', timestamps_LH, dp_LH, 'g')
# plt.ylabel('AP Lefthand')
# plt.xlabel('time')
# plt.show()


# Display the different axis acceleration in 3d
# for value in acc_LH:
#     ap_LH.append(value['AP'])
#     ur_LH.append(value['UR'])
#     dp_LH.append(value['DP'])
#     timestamps_LH.append(value['timestamp'])
#
# fig = plt.figure()
# ax = plt.axes(projection='3d')
#
# # Data for a three-dimensional line
# # zline = np.linspace(0, 15, 1000)
# # xline = np.sin(zline)
# # yline = np.cos(zline)
# ax.plot3D(ur_LH, dp_LH, ap_LH, 'gray')
# ax.scatter(ur_LH, dp_LH, ap_LH, 'b')
# plt.show()


