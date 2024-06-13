import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

function FuseCountdown(props) {
  const { onComplete } = props;
  const [endDate] = useState(
    moment.isMoment(props.endDate) ? props.endDate : moment(props.endDate)
  );
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const intervalRef = useRef();

  const complete = useCallback(() => {
    window.clearInterval(intervalRef.current);
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  const tick = useCallback(() => {
    const currDate = moment();
    const diff = endDate.diff(currDate, 'seconds');
    if (diff < 0) {
      complete();
      return;
    }
    const timeLeft = moment.duration(diff, 'seconds');
    setCountdown({
      days: timeLeft.asDays().toFixed(0),
      hours: timeLeft.hours(),
      minutes: timeLeft.minutes(),
      seconds: timeLeft.seconds(),
    });
  }, [complete, endDate]);

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [tick]);

  return (
    <div className={clsx('flex items-center', props.className)}>
      <div className="flex flex-col items-center justify-center px-3">
        <h3 className="mb-4 text-2xl">
          {countdown.days}
        </h3>
        <p className='text-white/50' variant="caption" color="text.secondary">
          days
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-3">
        <h3 className="mb-4 text-2xl">
          {countdown.hours}
        </h3>
        <p variant="caption" color="text.secondary">
          hours
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-3">
        <h3 className="mb-4 text-2xl">
          {countdown.minutes}
        </h3>
        <p variant="caption" color="text.secondary">
          minutes
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-3">
        <h3 className="mb-4 text-2xl">
          {countdown.seconds}
        </h3>
        <p variant="caption" color="text.secondary">
          seconds
        </p>
      </div>
    </div>
  );
}

FuseCountdown.propTypes = {
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onComplete: PropTypes.func,
};

FuseCountdown.defaultProps = {
  endDate: moment().add(15, 'days'),
};

export default memo(FuseCountdown);
