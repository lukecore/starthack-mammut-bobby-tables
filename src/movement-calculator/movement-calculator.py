import math
import h5py as h5
from scipy import integrate
import numpy as np
from mpl_toolkits import mplot3d
import matplotlib.pyplot as plt

from pip._internal.utils.misc import pairwise

rawData = h5.File("../../resources/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6_raw.h5", "r")

print(list(rawData.keys()))

# TODO remove test data restriction
acc_LH = rawData['/acc_LH'][:20]

ap_LH = []
ur_LH = []
dp_LH = []
timestamps_LH = []


def integrate_points(x_new, x_old, timestamp_new, timestamp_old):
    f_x = lambda x, y, z: (
            math.sqrt(x ** 2) + (y ** 2))
    result = integrate.quad(f_x, timestamp_old, timestamp_new, args=(x_new - x_old, timestamp_new - timestamp_old))
    return result

# Velocity Values
one_time_integrated_ap_LH = []
one_time_integrated_ur_LH = []
one_time_integrated_dp_LH = []

# Displacement Values
two_times_integrated_ap_LH = []
two_times_integrated_ur_LH = []
two_times_integrated_dp_LH = []

for old_val, new_val in pairwise(acc_LH):
    ap_LH.append(new_val['AP'])
    one_time_integrated_ap_LH.append(
        (integrate_points(new_val['AP'], old_val['AP'], new_val['timestamp'], old_val['timestamp']))[0])
    ur_LH.append(new_val['UR'])
    one_time_integrated_ur_LH.append(
        (integrate_points(new_val['UR'], old_val['UR'], new_val['timestamp'], old_val['timestamp']))[0])
    dp_LH.append(new_val['DP'])
    one_time_integrated_dp_LH.append(
        (integrate_points(new_val['DP'], old_val['DP'], new_val['timestamp'], old_val['timestamp']))[0])
    timestamps_LH.append(new_val['timestamp'])

ax1 = plt.axes(projection='3d')
ax1.plot3D(ur_LH, dp_LH, ap_LH, 'gray')
ax1.scatter(ur_LH, dp_LH, ap_LH, 'b')
plt.show()

fig1, (ax2, ax3) = plt.subplots(2)
fig1.suptitle("Ulnar-Radial UR")
ax2.plot(timestamps_LH, ur_LH, 'b')
ax3.plot(timestamps_LH, one_time_integrated_ur_LH, 'b')
plt.show()

fig2, (ax4, ax5) = plt.subplots(2)
fig2.suptitle("Distal-Proximal DP")
ax4.plot(timestamps_LH, dp_LH, 'g')
ax5.plot(timestamps_LH, one_time_integrated_dp_LH, 'g')
plt.show()

fig3, (ax6, ax7) = plt.subplots(2)
fig3.suptitle("Anterior-Posterior AP")
ax6.plot(timestamps_LH, ap_LH, 'r')
ax7.plot(timestamps_LH, one_time_integrated_ap_LH, 'r')
plt.show()

# TODO remove white noise errors before second and first integration
# TODO Add second cycle of integration to receive the displacement
