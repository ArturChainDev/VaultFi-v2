import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ReferralWidget from "../widgets/ReferralWidget"

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

export const ButtonHover = ({ children }) => {
    const [open, setOpen] = useState(false);
    const tokenAmount = useSelector((state) => state.setToken.tokenAmount);
    const bonusAmount = useSelector((state) => state.setToken.bonusAmount);
    const profitAmount = tokenAmount * 0.0002 + bonusAmount * 0.0008;

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const onClickHandler = () => {
        setOpen(!open);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div >
            <button
                id="walletButton"
                ref={buttonRef}
                onClick={onClickHandler}
                className="peer btn p-3 connect_wallet_btn"
            >
                {children}
                {
                    open ? <img src="/arrow.svg" alt="" /> :
                        <img src="/arrow.svg" alt="" className={`rotate-180`} />
                }
            </button>
            <div
                ref={dropdownRef}
                className={`absolute ${open ? 'flex' : 'hidden'} z-10 flex-col top-[70px] right-[13px] bg-[var(--purple)] md:w-[650px] w-[350px] gap-3 p-3 overflow-auto rounded-[5px]`}
            >
                <p className="text-center text-white/70 font-medium">Launch Price</p>
                <p className="text-center font-semibold">1 VaultFi token = $0.0008</p>
                <div className='flex justify-between'>
                    <p className="font-semibold max-w-[200px] md:max-w-full pr-3">VaultFi tokens in wallet</p>
                    <p className="font-medium  text-[var(--green)]">{tokenAmount}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="font-semibold max-w-[200px] md:max-w-full pr-3">Profit on launch</p>
                    <p className="font-medium text-[var(--green)]">{profitAmount} USD</p>
                </div>
                <div className='flex justify-between'>
                    <p className="font-semibold max-w-[200px] md:max-w-full pr-3">Profit on launch if token price does a 5x</p>
                    <p className="font-medium text-[var(--green)]">{profitAmount * 5} USD</p>
                </div>
                <div className='flex justify-between'>
                    <p className="font-semibold max-w-[200px] md:max-w-full pr-3">Profit if VaultFi reaches $500M market cap</p>
                    <p className="font-medium text-[var(--green)]">{profitAmount * 111} USD</p>
                </div>
                <div className='flex justify-between'>
                    <p className="font-semibold max-w-[200px] md:max-w-full pr-3">Profit if VaultFi reaches $1B market cap</p>
                    <p className="font-medium text-[var(--green)]">{profitAmount * 222} USD</p>
                </div>
                <div className='flex justify-between'>
                    <p className="font-semibold max-w-[200px] md:max-w-full pr-3">Profit if VaultFi reaches $5B market cap ($1 per token)</p>
                    <p className="font-medium text-[var(--green)]">{profitAmount * 1110} USD</p>
                </div>
                <ReferralWidget />
            </div>
        </div>
    );
}