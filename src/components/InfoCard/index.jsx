import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import { useForm } from "../../context/FormContext";
import {Box} from "@mui/material";
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
        <Box sx={styles.card}>
            <p>
                Based on your inputs, buying a
                <strong> ${formatNumber(formData?.car_price)}</strong> car at
                <strong> {formatNumber(tradefi?.apr)} APR</strong> over a <strong>60 month loan term</strong> with a down payment of
                <strong> ${formatNumber(tradefi?.amount_down)}</strong>, results in an ending net asset value of
                <strong> ${formatNumber(tradefi?.end_term_value)}</strong>. Comparatively, putting only
                <strong> ${formatNumber(btc?.amount_down)}</strong> down and investing
                <strong> ${formatNumber(btc?.btc_investment)}</strong> in Bitcoin appreciating at
                <strong> {cagrValue}% CAGR</strong>, produces an ending net value of
                <strong> ${formatNumber(btc?.ending_term_value)}</strong>, a difference of
                <strong> ${formatNumber(difference?.dollar)}</strong> or roughly
                <strong> {formatNumber(difference?.percent)}</strong>.
            </p>
            <p style={styles.disclaimer}>
                (This is a hypothetical model built on assumptions and user inputs.
                It is not financial advice and should not be relied upon for investment decisions.)
            </p>
        </Box>
    );
};

export default InfoCard;
