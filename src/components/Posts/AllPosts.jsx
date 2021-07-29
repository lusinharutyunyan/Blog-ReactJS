import React from "react";
import { useHistory } from "react-router";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "./HeaderPosts";
// import { Button } from "@material-ui/core";
// import Posts from "./Posts";
// import CreatePost from "../Story/CreatePost";

export default function AllPosts({ data }) {

  let history = useHistory();
   const styles = {
     textAlign: "center",
   };
  return (
  
    <Box component='div' style={styles}>    <Header/>
      <Box component='h2'>There is no post on web-site</Box>
      <Box component='h1'>
        You have logged in,{" "}
        <Link
          onClick={() => {
            history.push("/story");
          }}>
          share your story
        </Link>
      </Box>
    </Box>
  );
}
//   const posts = {
//     boxShadow: "2px 2px 2px 2px lightgray",
//     width: "50em",
//     height: "10em",
//     textAlign: "center",
//     marginLeft: "18em",
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     padding: "2em",
//     flexDirection: "column",
//   };
//   const btnStyle = {
//     color: "crimson",
//     marginLeft: "48em",
//   };
//   const date = ("" + new Date()).substr(4, 11);

//   return (
//     <Box component='div' style={posts}>
//       <Box component='h4'>{data.title}</Box>
//       <Box component='span' style={{ color: "lightgray" }}>
//         {date} by {data.name}
//       </Box>
//       <Box component='p'>{data.content}...</Box>
//       <Button style={btnStyle}>LEARN MORE</Button>
//     </Box>
//   );
// }
