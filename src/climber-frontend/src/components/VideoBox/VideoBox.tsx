import React from 'react';
import styles from './VideoBox.module.scss';

class VideoBox extends React.Component {
    render() {
        return (<div>
            <h1>test Video Box</h1>
            <video className={styles.sliderVideo} autoPlay={true}>
                <source src={"straight_wall_vertical.mp4"} type="video/mp4"/>
            </video>
        </div>)
    }
}

export default VideoBox;
