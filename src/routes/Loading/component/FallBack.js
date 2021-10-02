import React from 'react'
import styled from "../assets/Loading.module.scss";

export default function FallBack() {
    return (
        <div style={{position:'absolute',zIndex:1060}}>
            <div className={styled.loading}>
                <div className={`${styled.loader}`}>
                    <div className={styled.one}></div>
                    <div className={styled.two}></div>
                    <div className={styled.three}></div>
                </div>

            </div>
        </div>
    )
}
