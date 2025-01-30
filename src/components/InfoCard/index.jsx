import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import { useForm } from "../../context/FormContext";

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
                Based on your inputs, investing
                <strong> ${formData?.monthly_contribution}</strong> each month, or roughly
                <strong> {data.total_btc}</strong> every year into a College Savings 529 Plan, earning
                <strong> {formData?.cagr}</strong> compound growth annually, after {year} years you would have roughly
                <strong> {data.btc_net_value}</strong>. Comparatively, putting the same amount into Bitcoin appreciating at
                <strong> {cagrValue}</strong> annually, produces an ending net value of
                <strong> {data.btc_net_value}</strong>.
                {/*, a difference of*/}
                {/*<strong> ${ }</strong>(Difference $) or roughly*/}
                {/*<strong> { }%</strong>(Difference%)*/}
                .
            </p>
            <p style={styles.disclaimer}>
                (This is a hypothetical model built on assumptions and user inputs.
                It is not financial advice and should not be relied upon for investment decisions.)
            </p>
        </div>
    );
};

export default InfoCard;
