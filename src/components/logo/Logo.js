import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  svgHover: {
    '&:hover': {
      fill: 'red',
    },
    transition: 'all 0.5s ease',
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      className={classes.svgHover}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <path transform="translate(-3.6, -3.6), scale(2.7)" fill="#160f75" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokeWidth="0"/>
      </g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <path fill="#184568" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
        <path fill="#e0fffe" d="M24.125 9.652c0 1.209-.806 2.294-2.076 2.294c-1.271 0-2.264-.93-4.125-.93c-1.333 0-2.542.713-2.542 2.016c0 3.193 10.357 1.147 10.357 9.146c0 4.434-3.659 7.193-7.938 7.193c-2.388 0-7.534-.558-7.534-3.473c0-1.209.806-2.201 2.077-2.201c1.457 0 3.193 1.209 5.209 1.209c2.046 0 3.163-1.147 3.163-2.667c0-3.658-10.356-1.457-10.356-8.65c0-4.341 3.565-7.038 7.689-7.038c1.736.001 6.076.652 6.076 3.101z"/>
      </g>
    </svg>
  );
};