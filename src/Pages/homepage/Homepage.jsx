import { Grid } from "@material-ui/core";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    
      
      <Header />
      <Grid container >
        <Grid item xs={9} sm={9}>
          <Posts />
        </Grid>
        {/* <Grid item xs={3} sm={3} >
          <Sidebar />
        </Grid> */}
      </Grid>
    
    </>
  );
}
