import React from "react";
import MiniDrawer from "./MiniDrawer";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import PrimaryAppBar from "./PrimaryAppBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import "./style.css";
import DummyTable from "./DummyTable";
import TempChart from "./TempChart";

const Dashboard = () => {
  return (
    <div className="block">
      <PrimaryAppBar />
      <Box className="box" sx={{ display: "flex", marginTop: "75px" }}>
        <MiniDrawer />
        <div className="main">
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={3} direction="row">
              <Grid item lg={9} md={9} sm={12} xs={11}>
                <Card
                  className="card1style"
                  variant="outlined"
                  sx={{ height: 45 + "vh", maxWidth: "900px" }}
                >
                  <CardContent>
                    <Typography className="textDesign">Today</Typography>
                  </CardContent>
                  <TempChart />
                </Card>
              </Grid>

              <Grid item lg={3} md={3} sm={12} xs={11}>
                <Card
                  className="cardstyle"
                  variant="outlined"
                  sx={{
                    height: 45 + "vh",
                    //maxWidth: "250px"
                    // width: "100%",
                    display: "flex",
                  }}
                >
                  <CardContent>
                    <Typography className="textDesign">
                      Recent deposits
                    </Typography>

                    <Typography className="dollar">$3024.00</Typography>
                    <Typography className="date">
                      on 15March,2019
                      <br />
                    </Typography>
                    <Typography className="viewBlnc">
                      View Balance <br />
                    </Typography>
                  </CardContent>
                  {/*  <CardActions>
                    <Button className="viewBlnc">View Balance</Button>
                </CardActions>*/}
                </Card>
              </Grid>

              <Grid item lg={12} md={12} xs={14}>
                <Card
                  className="card1style"
                  variant="outlined"
                  sx={{
                    height: 40 + "vh",
                    // maxWidth: "1145px"
                    // width: "100%",
                    display: "flex",
                  }}
                >
                  <CardContent>
                    <Typography className="textDesign">
                      Recent Orders
                    </Typography>
                    <DummyTable />
                    <Typography className="link">See more Orders</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>

        {/*<Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>*/}
      </Box>
    </div>
  );
};

export default Dashboard;
