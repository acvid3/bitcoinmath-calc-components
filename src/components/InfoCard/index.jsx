import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import { useForm } from "../../context/FormContext";
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

    // const { tradefi, btc, difference } = results;

    const year = results?.data[results.data.length-1].year;
    const data = results.data[year-1];

    return (
        <div style={styles.card}>
            <p>
                Based on your inputs, earning
                <strong> ${formatNumber(formData?.monthly_net_income * 12)} </strong> dollars per year with a
                <strong> {formatNumber(formData?.yoy_salary_increase)}% </strong>annual increase results in a Nominal Annual Income of
                <strong> ${formatNumber(data?.annual_income)} </strong>after 20 years.  Factoring in
                (inflation) % for inflation, however, means in real terms your actual purchasing power will be
                <strong> ${formatNumber(data?.btc_acquired)}</strong>, representing a loss of roughly
                <strong> {formatNumber(data?.btc_acquired)}%</strong>. If, however, you were to convert those dollars into Bitcoin at
                <strong> {cagrValue}% </strong>CAGR annually, and borrow the needed salary each year at
                <strong> {formatNumber(formData?.apr)}%</strong>, after 20 years of generating the same income along with the same inflation rate, your total holdings would be
                <strong> ${formatNumber(data?.interest_paid)} </strong>BTC, worth roughly
                <strong> ${formatNumber(data?.yearly_loan)}</strong>. Less the total borrowing costs of
                <strong> ${formatNumber(data?.income_plus_bitcoin)}</strong>, this would produce a net benefit of
                <strong> ${formatNumber(data?.net_increase)}</strong>, or roughly
                (T26) additional value earned per year in Bitcoin.
            </p>
            <p style={styles.disclaimer}>
                (This is a hypothetical model built on assumptions and user inputs.
                It is not financial advice and should not be relied upon for investment decisions.)
            </p>
        </div>
    );
};

export default InfoCard;
