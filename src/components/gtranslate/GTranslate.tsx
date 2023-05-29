
import { IconButton, NativeSelect, TextField } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ClearIcon from '@mui/icons-material/Clear';

import './gtranslate.scss';
const GTranslate = () => {
    return (
        <div className="gtranslate-container">
            <div className='gtranslate-container-header'>

                <NativeSelect
                    size="small"
                    defaultValue={30}
                    inputProps={{
                        name: 'language',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Hungary</option>
                    <option value={20}>English</option>
                    <option value={30}>Swedish</option>
                </NativeSelect>

                <IconButton size="small" aria-label="delete">
                    <SyncAltIcon />
                </IconButton>

                <NativeSelect
                    size="small"
                    defaultValue={20}
                    inputProps={{
                        name: 'language',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Hungary</option>
                    <option value={20}>English</option>
                    <option value={30}>Swedish</option>
                </NativeSelect>

            </div>
            <div className='gtranslate-container-body'>
                <div className='gtranslate-source'>
                    <TextField
                        sx={{
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',

                            '&:hover fieldset &:focus-visible fieldset &:active fieldset ': {
                                border: '1px solid rgba(133, 133, 133)!important',
                            },
                        }}
                        id="outlined-basic"
                        variant="outlined"
                        multiline
                        rows={4}
                        maxRows={4}
                    />
                    <IconButton 
                        sx={{
                            position: 'absolute',
                            top: '0',
                            right: '6px'

                        }}
                        size="small" 
                        aria-label="delete">
                        <ClearIcon />
                    </IconButton>
                </div>
                <div className='gtranslate-target'>
                    <TextField
                        sx={{
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            backgroundColor: 'whitesmoke',
                            borderRadius: '3px',
                            
                            '& fieldset': {
                                border: 'none!important',
                            },

                            "& .MuiInputBase-input.Mui-disabled": {
                                WebkitTextFillColor: "rgba(0, 0, 0, 0.87)",
                            },
                        }}                        
                        id="outlined-basic"
                        variant="outlined"
                        multiline
                        rows={4}
                        maxRows={4}
                        defaultValue='Translate'
                        disabled
                    />
                </div>
            </div>
        </div>
    )
}

export default GTranslate;