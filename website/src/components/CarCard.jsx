import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function CarCard({car}) {
  return (
    <Card sx={{ maxWidth: 345 }}>  
      <img src="../../2d_car.jpg" width={300} height={200} alt="Car image" />
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        {car.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          basic data
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}