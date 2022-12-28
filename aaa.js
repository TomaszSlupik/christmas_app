import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const [deleteProductList, setDeleteProductList] = useState(false)


<Box sx={{ width: '100%' }}>
<Collapse in={deleteProductList}>
  <Alert
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setDeleteProductList(false);
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
    sx={{ mb: 2 }}
  >
    Prezent został usunięty z listy. 
  </Alert>
</Collapse>
</Box>
