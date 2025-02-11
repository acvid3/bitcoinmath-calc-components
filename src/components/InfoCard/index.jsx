import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import {useForm} from "../../context/FormContext";
import {formatNumber} from "../../utils/numberFormatter";

const InfoCard = () => {
    const { results } = useResult();
    const { cagrValue } = useCagr();
    const { formData } = useForm();

    if (!results) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>No results available.</div>;
    }

    if (results?.data?.status === 400) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Bad Request.</div>;
    }

    const { selling, borrowing, difference } = results;

    return (
        <div style={styles.card}>
            <p>
                Based on your inputs, selling
                <strong> {formatNumber(formData?.total_bitcoin_sold)} </strong> BTC with an estimated
                <strong> {formData?.loan_apr}% </strong>Capital Gains Tax, means your take home cash value is roughly
                <strong> ${formatNumber(selling?.net_value)}</strong>. Comparatively, if you were to borrow the cash at
                <strong> {formData?.loan_apr}% </strong>APR for a term of
                <strong> {formatNumber(formData?.loan_term_years)} </strong>Years, you would pay an estimated
                <strong> ${formatNumber(borrowing?.yearly_interest_owed)} </strong>in interest expense annually, or
                <strong> ${formatNumber(borrowing?.total_cost)} </strong>over the term of the loan. If Bitcoin has a compound annual growth rate of
                <strong> {cagrValue}%</strong>, the same B5 BTC will have an ending term value of
                <strong> ${formatNumber(borrowing?.end_of_term_value)}</strong>. Less the borrowing costs of
                <strong> ${formatNumber(borrowing?.total_cost)}</strong>, the ending cash value is
                <strong> ${formatNumber(difference?.dollar)} </strong>which is
                (F25)x greater than the Selling Scenario, a difference of
                <strong> ${formatNumber(difference?.dollar)}</strong>, or roughly
                <strong> {difference?.percentage}%</strong>.
            </p>
            <p style={styles.disclaimer}>
                (This is a hypothetical model built on assumptions and user inputs.
                It is not financial advice and should not be relied upon for investment decisions.)
            </p>
        </div>
    );
};

export default InfoCard;
