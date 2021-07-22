import { Grid } from "@material-ui/core";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
       <Grid
       container
       >
        
      <Grid item xs={12} sm={3} >
        <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </Grid>
      <Grid item xs={12} sm={3}  >
        <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </Grid>
      <Grid item xs={12} sm={3} >
        <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </Grid>
      <Grid container>
      
      <Grid item xs={12} sm={3}>
        <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </Grid>
      </Grid>
        </Grid>
    </div>
  );
}
