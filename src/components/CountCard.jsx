import React from 'react';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import './CountCard.css';
import { defaultColors } from './DefaultColors';
 
const createGradient = (color, angle = 135) => {
    return `linear-gradient(${angle}deg,  ${color.darker} 0%, ${color.base} 50%, ${color.lighter} 100%);`;
  };
function getColorByNumber(colorNum) {
  const colorKeys = Object.keys(defaultColors);
  const selectedColor = defaultColors[colorKeys[colorNum - 1]];

  if (!selectedColor) {
      return null;
  }

  return {
      base: selectedColor.base,
      lighter: selectedColor.lighter,
      darker: selectedColor.darker,
  };
}
function GradientCircularProgress(color1,color2) {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#65e7e3" />
            <stop offset="100%" stopColor="#19a5cc" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} size={25} />
      </React.Fragment>
    );
  }
export default function CountCard({ title, isActive, onClick, height, enabled = true, color_num, loading = false,makeActive=false,color_shade="base" }) {
    
    
    const color = getColorByNumber(color_num);
    const backgroundColor = color_num ? color[color_shade] : 'inherit';
    const hoverColor = color_num ? color[color_shade] : 'inherit';

    const textColor = color_num ? '#FFFFFF' : 'inherit';
    if(makeActive){
        enabled = true;
        isActive="active";
    }
    return (
        <Card
            onClick={onClick}
            className={enabled ? `countcard ${isActive ? 'active' : ''}` : ``}
            sx={{
                p: 1,
                width: "100%",
                textAlign: 'center',
                height: height,
                display: "flex",
                flexDirection:"column",
                justifyContent:'center',
                alignContent: 'center',
                alignItems:"center",
                background: backgroundColor,
                color: textColor,
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                    backgroundColor: !isActive && enabled ? '#FFFFFF' : hoverColor,
                    color: !isActive && enabled ? hoverColor : '#FFFFFF',
                },
                borderRadius:"10px"
            }}
        >
            <Tooltip title={title} placement="top-start" arrow>
                <>
                    <Typography
                        className={isActive ? 'active' : ''}
                        variant="subtitle2"
                        sx={{ fontWeight: 'bold', whiteSpace: 'wrap' }}
                    >
                        {title}
                    </Typography>
                    {loading ? (
                        <GradientCircularProgress />
                    ) : (
                        <></>
                    )}
                </>
            </Tooltip>
        </Card>
    );
}