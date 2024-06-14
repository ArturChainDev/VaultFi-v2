import { useTimeout } from '@fuse/hooks';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
import Box from '@mui/material/Box';

function FuseLoading(props) {
  const [showLoading, setShowLoading] = useState(!props.delay);

  useTimeout(() => {
    setShowLoading(true);
  }, props.delay);

  return (
    <div
      className={clsx(
        'flex flex-1 flex-col items-center justify-center p-24 my-auto',
        !showLoading && 'hidden'
      )}
    >
      <div className='flex flex-col items-center justify-center p-24 my-auto'>
        <div className='flex flex-col py-10'>
          <img
            src="/tokens/token.svg"
            alt="token"
            className="h-20"
          />
          <p className="text-5xl sm:text-20 font-medium -mb-16" color="text.secondary">
            Loading
          </p>
        </div>
        <div
          className='flex'
          id="spinner"
          sx={{
            '& > div': {
              backgroundColor: 'palette.secondary.main',
            },
          }}
        >
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    </div>
  );
}

FuseLoading.propTypes = {
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

FuseLoading.defaultProps = {
  delay: false,
};

export default FuseLoading;
