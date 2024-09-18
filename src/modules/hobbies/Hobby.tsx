import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../navBar';
import Box from '@mui/material/Box';

export interface HobbyProps {
    /**
   * the title of the blog post
   */
  title: string
  description: string
  imgsrc: string
}



export const Hobby = ({ 
    title = 'some title',
    description,
    imgsrc, 
}: HobbyProps) => {
    const navigate = useNavigate()
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            padding: '10px',
            backgroundColor: 'blanchedalmond'
          },
        }}
      >
        
        <Paper elevation={5} style={{flex:'500', alignItems: 'center'}}>
           <NavBar/>
            <div>
        </div>  
            <div style={{ textAlign: 'center', padding: '5px', display: 'flex', flexDirection: 'row'}}>
            <span style={{flex: '1'}}>
                <Typography variant="h4" fontFamily='fantasy'>
                   {title}
                   </Typography>
                </span>
            </div>
            <div style={{ textAlign: 'center', padding: '0px', }}>
                <Typography variant="body2" gutterBottom fontFamily='initial'>
                {description}
                   </Typography>
                </div> 
             <div style={{textAlign: 'center', padding: '5px'}}> 
                <img src={imgsrc} width={500} />
             </div>
        </Paper>
        </Box>
    )
    }

