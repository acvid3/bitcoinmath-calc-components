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

    const { tradefi, btc, difference } = results;

    return (
        <div style={styles.card}>
            <p>
                Based on your inputs, depositing
                <strong> ${formData?.total_cash_savings?.toLocaleString('fr-FR')} </strong>into a Checking, Savings, CD, or related product earning
                <strong> {formData?.apy}% </strong>APY, produces an annual nominal return of roughly
                <strong> ${tradefi?.annual_yield?.toLocaleString('fr-FR')} </strong>. Factoring for
                <strong> {formData?.inflation_percent}% </strong>inflation, the real annual yield is actually
                <strong> ${tradefi?.real_annual_yield?.toLocaleString('fr-FR')}</strong>, or
                <strong> {tradefi?.real_apy?.toLocaleString('fr-FR')}</strong>. At the end of a
                <strong> {formData?.number_of_years} </strong>year period, this would result in a total net value of
                <strong> ${tradefi?.end_of_term_value?.toLocaleString('fr-FR')}</strong>. Comparatively, if you were to invest that same
                <strong> ${formData?.total_cash_savings?.toLocaleString('fr-FR')} </strong>into Bitcoin with a CAGR of
                <strong> {cagrValue}</strong>, your end of term value would be
                <strong> ${btc?.end_of_term_value?.toLocaleString('fr-FR')} </strong>due to an average real APY of
                <strong> {btc?.real_apy?.toLocaleString('fr-FR')}</strong>, or roughly a
                <strong> {difference?.percent} </strong>difference.
            </p>
            <p style={styles.disclaimer}>(This is a hypothetical model built on assumptions and user inputs. It is not financial advice and should not be relied upon for investment decisions.)</p>
        </div>
    );
};

export default InfoCard;
