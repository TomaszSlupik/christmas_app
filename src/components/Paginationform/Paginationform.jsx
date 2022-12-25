import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginationform() {
  return (
    <div>
    <Stack spacing={1}>
      <Pagination count={8} />
    </Stack>
    </div>
  )
}
