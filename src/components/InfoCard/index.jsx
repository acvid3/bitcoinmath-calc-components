import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import {useForm} from "../../context/FormContext";

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
                <strong> ${formData?.current_equity?.toLocaleString('fr-FR')} </strong>of Home Equity into Bitcoin with a
                <strong> {formData?.term_months?.toLocaleString('fr-FR')} </strong>month loan term at
                <strong> {formData?.apr}% </strong>APR, would cost
                <strong> ${btc?.total_monthly_payment?.toLocaleString('fr-FR')} </strong>each month, or roughly
                <strong> ${btc?.annual_payment?.toLocaleString('fr-FR')} </strong>each year.  If you were to take that
                <strong> ${formData?.current_equity?.toLocaleString('fr-FR')} </strong>and buy Bitcoin at current price of
                <strong> ${formData?.btc_current_price?.toLocaleString('fr-FR')} </strong>, that would total
                <strong> {btc?.bitcoin_acquired?.toLocaleString('fr-FR')} </strong>BTC, which after the specified loan term would be worth roughly
                <strong> ${btc?.ending_bitcoin_value?.toLocaleString('fr-FR')} </strong>. Less the total borrowing costs of
                <strong> ${btc?.less_heloc_payments?.toLocaleString('fr-FR')} </strong>, this produces an ending net value of
                <strong> ${btc?.net_investment_value?.toLocaleString('fr-FR')} </strong>, or roughly
                <strong> ${difference?.dollar?.toLocaleString('fr-FR')} </strong>more than the status quo of letting your equity appreciate at
                <strong> {formData?.real_estate_aar}% </strong>annually instead.
            </p>
            <p style={styles.disclaimer}>(This is a hypothetical model built on assumptions and user inputs. It is not financial advice and should not be relied upon for investment decisions.)</p>
        </div>
    );
};

export default InfoCard;
