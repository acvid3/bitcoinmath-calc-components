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
                Based on your inputs, depositing
                <strong> ${formatNumber(formData?.total_cash_savings)} </strong>into a Checking, Savings, CD, or related product earning
                <strong> {formData?.apy}% </strong>APY, produces an annual nominal return of roughly
                <strong> ${formatNumber(tradefi?.annual_yield)} </strong>. Factoring for
                <strong> {formData?.inflation_percent}% </strong>inflation, the real annual yield is actually
                <strong> ${formatNumber(tradefi?.real_annual_yield)}</strong>, or
                <strong> {formatNumber(tradefi?.real_apy)}</strong>. At the end of a
                <strong> {formData?.number_of_years} </strong>year period, this would result in a total net value of
                <strong> ${formatNumber(tradefi?.end_of_term_value)}</strong>. Comparatively, if you were to invest that same
                <strong> ${formatNumber(formData?.total_cash_savings)} </strong>into Bitcoin with a CAGR of
                <strong> {cagrValue}</strong>, your end of term value would be
                <strong> ${formatNumber(btc?.end_of_term_value)} </strong>due to an average real APY of
                <strong> {formatNumber(btc?.real_apy)}</strong>, or roughly a
                <strong> {difference?.percent} </strong>difference.
            </p>
            <p style={styles.disclaimer}>(This is a hypothetical model built on assumptions and user inputs. It is not financial advice and should not be relied upon for investment decisions.)</p>
        </div>
    );
};

export default InfoCard;
