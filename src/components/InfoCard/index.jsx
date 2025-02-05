import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import {useForm} from "../../context/FormContext";

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
                <strong> {formData?.total_bitcoin_sold} </strong> BTC with an estimated
                <strong> {formData?.loan_apr}% </strong>Capital Gains Tax, means your take home cash value is roughly
                <strong> ${selling?.net_value?.toLocaleString('fr-FR')}</strong>. Comparatively, if you were to borrow the cash at
                <strong> {formData?.loan_apr}% </strong>APR for a term of
                <strong> {formData?.loan_term_years?.toLocaleString('fr-FR')} </strong>Years, you would pay an estimated
                <strong> ${borrowing?.yearly_interest_owed?.toLocaleString('fr-FR')} </strong>in interest expense annually, or
                <strong> ${borrowing?.total_cost?.toLocaleString('fr-FR')} </strong>over the term of the loan. If Bitcoin has a compound annual growth rate of
                <strong> {cagrValue}%</strong>, the same B5 BTC will have an ending term value of
                <strong> ${borrowing?.end_of_term_value?.toLocaleString('fr-FR')}</strong>. Less the borrowing costs of
                <strong> ${borrowing?.total_cost?.toLocaleString('fr-FR')}</strong>, the ending cash value is
                <strong> ${difference?.dollar?.toLocaleString('fr-FR')} </strong>which is
                (F25)x greater than the Selling Scenario, a difference of
                <strong> ${difference?.dollar?.toLocaleString('fr-FR')}</strong>, or roughly
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
