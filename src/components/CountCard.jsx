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

export default function CountCard({ title, isActive, onClick, height, enabled = true, color_num, loading = false, makeActive=false, color_shade="base" }) {
    
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
  elevation={3}
  className={enabled ? `countcard ${isActive ? 'active' : ''}` : ``}
  sx={{
    p: 1,
    width: "100%",
    textAlign: 'center',
    height: height,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignContent: 'center',
    transition: 'all 0.5s ease',
    position: 'relative',
    alignItems: "center",
    background: 'linear-gradient(135deg, #6a0dad 30%, #8a2be2 100%)',
    color: "#ffffff",
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
    '&:hover': {
      backgroundColor: 'linear-gradient(135deg, #8a2be2 30%, #6a0dad 100%)',
      transform: 'scale(1.03)',
      boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.7)',
      color: "#6a0dad",
    },
    borderRadius: "16px",
    overflow: 'hidden',
    border: isActive ? '2px solid #ffffff' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.5s',
  }}
>
  <Tooltip title={title} placement="top-start" arrow>
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography
        className={isActive ? 'active' : ''}
        variant="subtitle2"
        sx={{
          fontWeight: 'bold',
          fontSize: '13px', 
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          display: '-webkit-box',
          WebkitLineClamp: 2, 
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          padding: '0 5px', 
        }}
      >
        {title}
      </Typography>

      {loading ? (
        <GradientCircularProgress />
      ) : (
        <></>
      )}
    </div>
  </Tooltip>
</Card>

    );
}