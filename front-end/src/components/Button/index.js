// import Button from '@mui/material/Button';
import Button from './styles'

export default function DisableElevation(props) {
   

    return (
        <div style={{width: '100%'}}>
            <Button disableElevation {...props}>
                {props.children}
            </Button>
        </div>

    );
}