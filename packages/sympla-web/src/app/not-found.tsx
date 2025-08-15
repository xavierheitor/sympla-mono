'use client';

import { Button, Result } from 'antd';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Result
      status='404'
      title='Página não encontrada'
      subTitle='A página que você está tentando acessar não existe.'
      extra={
        <Link href='/dashboard'>
          <Button>Voltar para o início</Button>
        </Link>
      }
    />
  );
}
