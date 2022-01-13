import "./logo.css"

import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Box from '@mui/material/Box';
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    width: "20vw",
    border: "3px solid white"
  
    
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static" >
        <Container>
          <Toolbar>
          <Box
              sx={{
              width: "100%" ,
              border : " 3px solid white",
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
          <Box
              sx={{
              width: "20vw" ,
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
              style={{ width: "100%", height: 40, marginLeft: 15 }}

              
            >
              Taj Exchange
            </Typography>
            </Box>
            {/* { <Button color="inherit">Login</Button>} */}
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"TRY"}>TRY</MenuItem>
            </Select>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
