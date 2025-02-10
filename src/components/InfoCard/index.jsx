import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import {useForm} from "../../context/FormContext";
import {formatNumber} from "../../utils/numbersFormatter";

const InfoCard = () => {
    const { results } = useResult();
    const { cagrValue } = useCagr();
    const {formData} = useForm();

    if (!results) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>No results available.</div>;
    }

    if (results?.data?.status === 400) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Bad Request.</div>;
    }

    const { tradefi, btc, difference } = results;

    return (
        <div style={styles.card}>
            <p>
                Based on your inputs, converting
                <strong> ${formatNumber(formData?.current_equity)} </strong>of Home Equity into Bitcoin with a
                <strong> {formatNumber(formData?.term_months)} </strong>month loan term at
                <strong> {formData?.apr}% </strong>APR, would cost
                <strong> ${formatNumber(btc?.total_monthly_payment)} </strong>each month, or roughly
                <strong> ${formatNumber(btc?.annual_payment)} </strong>each year.  If you were to take that
                <strong> ${formatNumber(formData?.current_equity)} </strong>and buy Bitcoin at current price of
                <strong> ${formatNumber(formData?.btc_current_price)} </strong>, that would total
                <strong> {formatNumber(btc?.bitcoin_acquired)} </strong>BTC, which after the specified loan term would be worth roughly
                <strong> ${formatNumber(btc?.ending_bitcoin_value)} </strong>. Less the total borrowing costs of
                <strong> ${formatNumber(btc?.less_heloc_payments)} </strong>, this produces an ending net value of
                <strong> ${formatNumber(btc?.net_investment_value)} </strong>, or roughly
                <strong> ${formatNumber(difference?.dollar)} </strong>more than the status quo of letting your equity appreciate at
                <strong> {formData?.real_estate_aar}% </strong>annually instead.
            </p>
            <p style={styles.disclaimer}>(This is a hypothetical model built on assumptions and user inputs. It is not financial advice and should not be relied upon for investment decisions.)</p>
        </div>
    );
};

export default InfoCard;
