import React from 'react';
import SuccessImages from '../assets/images/success.png';
import Classes from '../styles/Summary.module.css';
import useFetch from './hooks/useFetch';

export default function Summary({score,noq}) {
    const getKeyWord = () => {
        if ((score / (noq * 5) * 100 < 50)) {
            return "failed";
        }else if ((score / (noq * 5) * 100 < 75)) {
            return "good";
        }
        else if ((score / (noq * 5) * 100 < 100)) {
            return "very good";
        }else {
            return "excellent";
        }
    }

    const {loading,error,result} = useFetch(`https://api.pexels.com/v1/search?query=${getKeyWord()}&per_page=1`, "GET", {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    });
    const image = result ? PushSubscriptionOptions[0].src.medium : SuccessImages;
    return (
        <div>
            <div className={Classes.summary}>
                <div className={Classes.point}>
                    {/* progress bar will be placed here */}
                    <p className={Classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                    </p>
                </div>

                    {loading && <div  className={Classes.badge}>Loading Your Badge.....</div>}
                    {error && <div  className={Classes.badge}>An Error Occured.....!</div>}

                {!loading && !error && (<div className={Classes.badge}>
                    <img src={image} alt="Success" />
                </div>)}
            </div>
        </div>
    )
}
