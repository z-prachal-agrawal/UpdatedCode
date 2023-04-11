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
import TempLineChart from "./TempLineChart";

const Dashboard = () => {
  return (
    <div className="block">
      <PrimaryAppBar />
      <Box className="box" sx={{ display: "flex", marginTop: "75px" }}>
        <MiniDrawer />
        <Box sx={{ width: "100%" }}>
          <Stack direction="row">
            <Grid container spacing={3}>
              <Grid item lg={9} md={9} sm={12} xs={11}>
                <Card
                  className="card1style"
                  variant="outlined"
                  sx={{ height: 45 + "vh", maxWidth: "900px" }}
                >
                  <CardContent>
                    <Typography className="textDesign">Today</Typography>
                  </CardContent>
                  <TempLineChart />
                </Card>
              </Grid>

              <Grid item lg={3} md={3} sm={12} xs={11}>
                <Card
                  className="cardstyle"
                  variant="outlined"
                  sx={{ height: 45 + "vh", maxWidth: "250px" }}
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

              <Grid item lg={12} md={12} xs={12}>
                <Card
                  className="card1style"
                  variant="outlined"
                  sx={{ height: 40 + "vh", maxWidth: "1145px" }}
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
          </Stack>
        </Box>

        {/*<Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>*/}
      </Box>
    </div>
  );
};

export default Dashboard;
