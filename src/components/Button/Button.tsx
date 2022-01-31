import clsx from 'clsx';
import React from 'react';

interface IButton {
  children: React.ReactChild | React.ReactChild[];
  onClick?: () => void;
  active?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const { children, onClick, active = false } = props;
  return (
    <button
      className={clsx('py-1 px-4 rounded my-2 mx-1', {
        'bg-blue-500 hover:bg-blue-700 text-white': active,
        'bg-gray-200 hover:bg-gray-400 text-black': !active,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
