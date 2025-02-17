import React from 'react';
import { useResult } from '../../context/ResultContext';
import { useCagr } from '../../context/CagrContext';
import { styles } from './styles';
import {formatNumber} from "../../utils/numberFormatter";
import {useForm} from "../../context/FormContext";

const InfoCard = () => {
    const { results } = useResult();
    const { cagrValue } = useCagr();
    const {formData} = useForm();

    if (!results) {
        return <div>Loading...</div>;
    }

    const { tradefi, btc, difference } = results;

    return (
        <div style={styles.card}>
            <p>
                Based on your inputs, putting
                <strong> ${formatNumber(tradefi?.total_financed)} </strong>down on a
                <strong> ${formatNumber(tradefi?.amount_down)} </strong>(D5) home at
                {/*<strong> D8 doesn't exist in the table </strong>*/}
                (D8) % for
                (D9) months, results in total monthly mortgage payment of
                (D12), or roughly
                (D13) annually.  With monthly rental income of
                (D15) and total monthly expenses of
                (D16), your Cash on Cash Returns are roughly
                (D17), annualized at
                (D18) or roughly
                (D19) % annually, growing at
                (D20) % YoY.  Reinvesting 100% of these cashflows into
                Bitcoin over a 10 year period results in total BTC accumulation of
                (D29), worth roughly
                (D30) after a 10 year period based on Bitcoin CAGR of
                (BTC CAGR).  Combined with the principal payments and gross home equity appreciating at
                (D24) % annually, the total investment value after 10 years is
                (D34).  Comparatively, if you took that same
                (D6) and invested it into Bitcoin on day 1, your total BTC holdings would be
                (E29), worth roughly
                (E30) after the same 10 year period, a difference of
                (E36), or
                (E38)%.
            </p>
            <p style={styles.disclaimer}>(This is a hypothetical model built on assumptions and user inputs. It is not financial advice and should not be relied upon for investment decisions.)</p>
        </div>
    );
};

export default InfoCard;
