import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';

const Root = styled('div')(({ theme }) => ({
  '& .username, & .email': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  '& .avatar': {
    background: theme.palette.background.default,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(selectUser);

  return (
    <Root className="user relative flex flex-col items-center justify-center mt-6 p-16 pb-14 shadow-0">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <div className="smd:hidden flex items-center flex-col pb-10 gap-10 justify-center px-20">
          <Typography className="whitespace-normal text-lg font-semibold tracking-tight leading-7 truncate" color={"#cca44d"}>
            {"Pioneering DeFi 3.0."}
          </Typography>
          <Typography className="whitespace-normal text-lg text-center" color={"#cca44d"}>
            {"With APY backed by revenue-generating businesses"}
          </Typography>
        </div>
      </div>
    </Root>
  );
}

export default UserNavbarHeader;
