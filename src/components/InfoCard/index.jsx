import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';

const InfoCard = () => {
    const { results } = useResult();
    const { cagrValue } = useCagr();

    if (!results) {
        return <div>Loading...</div>;
    }

    const { tradefi, btc, difference } = results;

    return (
        <div style={styles.card}>
            <p>
                Based on your inputs, buying a <strong>${tradefi.car_price}</strong> car at
                <strong> {tradefi.apr} APR</strong> over a <strong>60 month loan term</strong> with a down payment of
                <strong> ${tradefi.amount_down}</strong>, results in an ending net asset value of
                <strong> ${tradefi.end_term_value}</strong>. Comparatively, putting only <strong>${btc.amount_down}</strong> down and investing
                <strong> ${btc.btc_investment}</strong> in Bitcoin appreciating at <strong>${cagrValue}% CAGR</strong>, produces an ending net value of <strong>${btc.ending_btc_value}</strong>, a difference of <strong>${difference.difference_dollar}</strong> or roughly <strong>{difference.difference_percent}</strong>.
            </p>
            <p style={styles.disclaimer}>(This is a hypothetical model built on assumptions and user inputs. It is not financial advice and should not be relied upon for investment decisions.)</p>
        </div>
    );
};

export default InfoCard;
