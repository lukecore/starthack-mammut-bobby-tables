import h5py as h5
from mpl_toolkits import mplot3d
import matplotlib.pyplot as plt
import numpy as np

rawData = h5.File("../../resources/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6_raw.h5", "r")

print(list(rawData.keys()))

acc_LH = rawData['/acc_LH']

ap_LH = []
ur_LH = []
dp_LH = []
timestamps_LH = []

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


