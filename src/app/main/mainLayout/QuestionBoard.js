import React from 'react'
export const QuestionBoard = ({ children, question, isDropDown, selectNumber, id, onClick }) => {
    const oneDropDown = id === selectNumber;
    const onClickHandler = () => {
      onClick(id);
    }
    return (
      <div className="my-3">
        <h3
          class="peer mb-4 pb-2 text-uppercase text-3xl cursor-pointer"
          onClick={onClickHandler}
        >
          {question}
        </h3>
        <img src="" />
        <div className='h-0 opacity-0 transition duration-1000 liner peer-focus:h-full focus:opacity-100 overflow-hidden'></div>
        { (oneDropDown && isDropDown) && <div>{children}</div>}
      </div>
    );
  };