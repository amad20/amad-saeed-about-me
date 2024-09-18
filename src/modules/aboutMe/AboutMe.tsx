import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import flagsrc from './kurd.jpg'
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../navBar';
import Box from '@mui/material/Box';

export interface AboutMeProps {
    /**
   * the title of the blog post
   */
  title: string
  description: string
  imgsrc: string
}


export const AboutMe = ({ 
    title = 'some title',
    description,
    imgsrc, 
}: AboutMeProps) => {
    const navigate = useNavigate()
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            padding: '20px',
            backgroundColor: 'blanchedalmond',
            alignContent: 'center'
          },
        }}
      >
        <Paper elevation={8} style={{ flex: '500', textAlign: 'center', padding: '10px' }}>
            <NavBar />
            <div>
        </div>  
            <div style={{ display: 'flex', flexDirection: 'row'}}>
            <span style={{flex: '1'}}>
                <Typography variant="h4" gutterBottom fontFamily='fantasy'>
                   {title}
                   </Typography>
                </span>
            </div>
            <div style={{ marginTop: '10px'}}>
                <Typography variant="body2" gutterBottom>
                {description}
                   </Typography>
                </div> 
             <div> 
                <img src={flagsrc} alt="flag" width={500} />
             </div>
             
        </Paper>
        </Box>
    )
    }

