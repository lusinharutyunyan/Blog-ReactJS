import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router";

export default function Page() {
  let history = useHistory();
  const styles = {
    textAlign: "center",
  };

  return (
    <Box mt={10} style={styles}>
      {" "}
      <Box component='h2' display='block'>
        There is no post on web-site.
      </Box>
      <Box component='h1' display='block'>
        <Link
          to='/LogIn.jsx'
          onClick={() => {
            history.push("/LogIn");
          }}>
          Log in 
        </Link> 
         and be our first story teller.
      </Box>
    </Box>
  );
}
