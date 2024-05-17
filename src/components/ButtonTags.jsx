import { alpha, Button } from '@mui/material';

const ButtonTags = ({ text, onClick }) => {
  const customStyle = {
    height: '32px',
    color: '#212121',
    borderRadius: '3px',
    padding: '0px 20px 0px 20px',
    textTransform: 'none',
    backgroundColor: alpha('#FDFDFD', 0.8),
    '&:hover': {
      backgroundColor: alpha('#FDFDFD', 1),
    },
  };
  return (
    <Button onClick={onClick} sx={customStyle}>
      {text}
    </Button>
  );
};

export default ButtonTags;
