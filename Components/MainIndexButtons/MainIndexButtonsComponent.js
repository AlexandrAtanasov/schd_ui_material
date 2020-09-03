import Link from 'next/link' 
import React from 'react';
import Button from '@material-ui/core/Button';

export default function BasicButtonGroup() {
  return (
    <div className='intro_page'>
        <Link href="/first/SCHD">
            <a>
                <Button  variant="contained" color="primary">
                    First
                </Button>
            </a>
        </Link>
        <Link href="/second/SCHD">
            <a>
                <Button variant="contained" color="secondary">
                    Second
                </Button>
            </a>
        </Link>
    </div>
  );
}
