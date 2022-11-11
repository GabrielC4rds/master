import styles from'./style.module.scss';
import React from 'react';

export default function Header() {
    return (
        <div className={styles.Container}>
            <img src="./triangle.png"/>
            <h1>Controle Financeiro</h1>
            <img src="./menu-hamb.png"/>
        </div>
    )
}