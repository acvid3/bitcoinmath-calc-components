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

    const { tradefi, btc, difference } = results;

    return (
        <div style={styles.card}>
            <p>
                Based on your inputs, buying a
                <strong> ${formatNumber(formData?.home_price)} </strong>home with
                <strong> ${formatNumber(results?.tradefi?.amount_down)} </strong>down at
                <strong> {formData?.apr}% </strong>APR over a
                <strong> {formatNumber(formData?.term)} </strong> month term, appreciating at
                <strong> {formatNumber(formData?.re_aar)}% </strong> annually, results in a net asset value of
                <strong> {formatNumber(results?.tradefi?.net_value)} </strong> after
                <strong> {formatNumber(formData?.checkpoint_year)} </strong>years. Comparatively, putting only
                <strong> ${formatNumber(results?.btc?.amount_down)} </strong>down and using the remaining
                <strong> ${formatNumber(results?.btc?.btc_investment)} </strong> to buy Bitcoin appreciating at
                <strong> {cagrValue}% </strong> annually, produces an ending net value of
                <strong> ${formatNumber(results?.tradefi?.net_value)}</strong>, a difference of
                <strong> ${formatNumber(results?.difference?.dollar)}</strong>, or roughly
                <strong> {results?.difference?.percent}</strong>.
            </p>
            <p style={styles.disclaimer}>(This is a hypothetical model built on assumptions and user inputs. It is not financial advice and should not be relied upon for investment decisions.)</p>
        </div>
    );
};

export default InfoCard;
