import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ListItem from '@mui/material';

export function CarCard({ car }) {
  return (
    <Card sx={{ width: 500, height: 500 }}>
      <img src={car.image} width={300} height={200} alt="Car image" />
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        {car.make}
      </Typography>
      <Typography variant="h4" sx={{ color: 'text.primary' }}>
        {car.model}
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>1</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>2</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>3</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>4</Item>
  </Grid>
</Grid>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}