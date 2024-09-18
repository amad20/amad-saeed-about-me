import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MemoryRouter } from 'react-router-dom';
// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
    interface Palette {
      ochre: Palette['primary'];
    }
  
    interface PaletteOptions {
      ochre?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color options to include an ochre option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      ochre: true;
    }
  }

const theme = createTheme({
    palette: {
      ochre: {
        main: '#206A49',
        light: '#488C8E',
        dark: '#488C8E',
        contrastText: '#EEFBF7',
      },
    },
  });



export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ThemeProvider theme={theme}>
        <div style={{textAlign: 'center'}}>
        <Button variant = "contained" color = 'ochre'
                onClick ={() => navigate('/')}
            >About Me</Button>
            <Button variant = "contained" color = 'ochre'
                onClick ={() => navigate('/Hobby')}
            >Hobbies</Button>
            
        </div>  
        </ThemeProvider>

        
    )
    }