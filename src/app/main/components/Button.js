import React from 'react'
export const ButtonTop = ({ onClick, children }) => {
    return (
        <button className="btn connect_wallet_btn md:hidden !px-4 !py-3.5" onClick={() => onClick()} id="mobile-nav-btn">
            {/* {children} */}
            <img src="/wallet-icon.svg" alt="" width="28" />
        </button>
    )
}
export const ButtonBottom = ({ onClick, children }) => {
    return (
        <button className="btn connect_wallet_btn !hidden md:!flex" onClick={() => onClick()}>
            {children}
            <img src="/wallet-icon.svg" alt="" />
        </button>
    )
}