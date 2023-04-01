import { Button } from '@mui/material';
export default function ButtonBar({txt}){

    return(
<Button className='buttonBar' variant="contained" endIcon={<txt />}>
  {txt}
</Button>
    )
}