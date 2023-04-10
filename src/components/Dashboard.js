import React from "react";
import MiniDrawer from "./MiniDrawer";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import PrimaryAppBar from "./PrimaryAppBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./style.css";
import DummyTable from "./DummyTable";
import LineChart from "./TempLineChart";
//import Chart from "./Chart";
//import { fontWeight } from "@mui/system";

const Dashboard = () => {
  return (
    <div className="block">
      <PrimaryAppBar />
      <Box className="box" sx={{ display: "flex", marginTop: "95px" }}>
        <MiniDrawer />
        <Box sx={{ width: "100%" }}>
          <Stack spacing={3} direction="row">
            <Grid item xs={6}>
              <Card
                className="card1style"
                variant="outlined"
                sx={{ height: 45 + "vh", minWidth: "900px" }}
              >
                <CardContent>
                  <Typography className="textDesign">Today</Typography>
                </CardContent>
                <LineChart />
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card
                className="cardstyle"
                variant="outlined"
                sx={{ height: 45 + "vh", minWidth: "220px" }}
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
                </CardContent>
                <CardActions>
                  <Button className="viewBlnc">View Balance</Button>
                </CardActions>
              </Card>
            </Grid>
          </Stack>
          <Box sx={{ width: "97.5%", marginTop: "25px" }}>
            <Grid item xs={6}>
              <Card
                className="card1style"
                variant="outlined"
                sx={{ height: 45 + "vh", minWidth: "800px" }}
              >
                <CardContent>
                  <Typography className="textDesign">Recent Orders</Typography>
                  <DummyTable />
                  <Typography className="link">See more Orders</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Box>

        {/*<Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>*/}
      </Box>
    </div>
  );
};

export default Dashboard;
