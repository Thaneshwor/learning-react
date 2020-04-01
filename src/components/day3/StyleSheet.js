import React from 'react';
import './css/myStyle.css';
import styles from './css/myStyle.module.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={`${className} font-xl `}>StyleSheet</h1>
            <h2 className='error'>Error</h2>
            <h2 className={styles.succes}>Child Success</h2>
        </div>
    )
}

export default StyleSheet
