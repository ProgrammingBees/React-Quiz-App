import React from 'react';
import Classes from "../styles/Video.module.css";

export default function Video({title,id,noq}) {
    return (
        <>
              <div className={Classes.video}>
              <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
              <p>{title}</p>
              <div className={Classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Total Points : {noq * 5}</p>
              </div>
            </div>
        </>
    )
}
