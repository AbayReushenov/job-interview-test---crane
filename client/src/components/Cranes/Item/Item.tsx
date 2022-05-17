import React from 'react';

interface Props {
  text: string;
  value: boolean;
}

export const Item: React.FC<Props> = ({text, value}) => {
  return (
    <>
      <p className='left'>{text}</p>
      <p className='center'>____________________________________</p>
      {!value ? (
        <p className='right red'>ошибка</p>
      ) : (
        <p className='right green'>ок</p>
      )}
    </>
  );
};
