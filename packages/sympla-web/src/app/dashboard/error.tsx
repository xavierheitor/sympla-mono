'use client';

import { useEffect } from 'react';
import { Button, Result } from 'antd';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Erro na página:', error);
  }, [error]);

  return (
    <Result
      status='500'
      title='Erro inesperado'
      subTitle='Algo deu errado nesta seção.'
      extra={<Button onClick={reset}>Tentar novamente</Button>}
    />
  );
}
