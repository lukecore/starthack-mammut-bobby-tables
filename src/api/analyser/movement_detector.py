from h5py import h5


class MovementDetector:
    def __init__(self, dataset, dataset_raw) -> None:
        super().__init__()
        self.dataset = dataset
        self.dataset_raw = dataset_raw
        self.pressure_RH = self.dataset_raw['/pres_RH']
        self.pressure_LH = self.dataset_raw['/pres_LH']

    def get_movements(self):
        movements = []

        right_hand_movements = self.analyse_right_hand()
        left_hand_movements = self.analyse_left_hand()

        # TODO combine datasets

        return movements

    def analyse_right_hand(self):
        dataset_moves = self.dataset['/moves_RH']
        timestamps = list(map(lambda ds: (ds[1] + ds[0]) / 2, dataset_moves))

        movement_right = []
        for i in range(len(timestamps)):
            height = self.calculate_height(self.pressure_RH, timestamps[i])
            move = {
                'start_time': dataset_moves[i][0],
                'end_time': dataset_moves[i][1],
                'y': height,
                'x': 2,
                'z': 0
            }
            movement_right.append(move)

        return movement_right

    def analyse_left_hand(self):
        dataset_moves = self.dataset['/moves_LH']
        timestamps = list(map(lambda ds: (ds[1] + ds[0]) / 2, dataset_moves))

        movement_right = []
        for i in range(len(timestamps)):
            height = self.calculate_height(self.pressure_LH, timestamps[i])
            move = {
                'start_time': dataset_moves[i][0],
                'end_time': dataset_moves[i][1],
                'y': height,
                'x': 1,
                'z': 0
            }
            movement_right.append(move)

        return movement_right

    @staticmethod
    def extract_height(dataset, timestamp):
        data_at_timestamp = None
        for data in dataset:
            if data['timestamp'] == timestamp:
                data = data
                break

        return MovementDetector.calculate_height(101.325, 20, data_at_timestamp[1])

    @staticmethod
    def calculate_height(reference_pressure, temperature, pressure):
        # P = P₀ exp(-gM(h-h₀)/(RT))
        # TODO Calculate height (sadly, no time for that :/)
        return 230


dataset = h5.File("../../resources/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6.h5", "r")
datasetRaw = h5.File("../../resources/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6_raw.h5", "r")

md = MovementDetector(dataset, datasetRaw)
print('Movements', md.get_movements())
