// import React from 'react';
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";



const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.history}>
            <thead className={styles.heading}>
                <tr>
                    <th className={styles.cell}>Type</th>
                    <th className={styles.cell}>Amount</th>
                    <th className={styles.cell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};


export default TransactionHistory;