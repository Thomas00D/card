'use client';

import { Button } from '@mantine/core';
import { useState } from 'react';

export function Carte() {
  const [buttonClickStatus, setButtonClickStatus] = useState(false);

  const Click = () => {
    setButtonClickStatus((prevState) => !prevState);
    console.log('buttonClickStatus', buttonClickStatus);
  };

  return (
    <>
      <Button onClick={Click}>Click me</Button>
    </>
  );
}
