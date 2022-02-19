import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import CircularProgress from '@mui/material/CircularProgress';

import {
  addTodoLoading,
  addTodoSuccess,
  deleteTodoLoading,
  deleteTodoSuccess,
  getTodoSuccess,
} from "../actions/todoAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const Todo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [loadsave, setLoadSave] = useState(false);

  const { loading, error, todos } = useSelector((res) => res);

  useEffect(() => {
    getData();
  }, []);

  function handleClick() {
    setLoadSave(true);
  }

  const getData = () => {
    axios.get("https://fake-api-project-for-masai.herokuapp.com/tasks").then(({ data }) => {
      dispatch(getTodoSuccess(data)), setLoadSave(false)
    });
  };

  return loading ? (
      <Box sx={{ display: 'flex', justifyContent:"space-around", margin:'100px' }}>
        <CircularProgress />
      </Box>
  
  ) : (
    <>
      <div>
        <h2>HELLO TODO</h2>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
          
            id="outlined-basic"
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Enter Todo.."
            variant="outlined"
          />
          <TextField
            id="filled-basic"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            label="Details"
            label="Details"
            variant="filled"
          />
          <LoadingButton
            sx={{ height: 53, maxWidth:100 }}
            color="secondary"
            onClick={() => {
              
              handleClick()
              dispatch(addTodoLoading());
              axios
                .post("https://fake-api-project-for-masai.herokuapp.com/tasks", {
                  title: text,
                  detail: desc,
                  status: false,
                })
                .then(() => setText(""),setDesc(''), dispatch(addTodoSuccess()), getData());
            }}
            loading={loadsave}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </LoadingButton>
        </Box>

        <Grid style={{
       margin:'auto',
        width: '100%',
        position: 'relative',
      }} item xs={12} md={4}>
          <Typography
            sx={{ mt: 1, mb: 4 }}
            variant="h6"
            component="div"
          ></Typography>

          <List>
            {todos.map((item, index) => {
              return (
                <>
                  <ListItem key={index*Math.random(1,5).toString()}
                
                    secondaryAction={
                      <IconButton
                      key={index*Math.random(1,3).toString()}
                        onClick={() => {
                          dispatch(deleteTodoLoading()),
                            axios
                              .delete(`https://fake-api-project-for-masai.herokuapp.com/tasks/${item.id}`)
                              .then(() => {
                                dispatch(deleteTodoSuccess());
                                getData();
                              });
                        }}
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon  />
                      </IconButton>
                    } 
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <Link to={`/todos/${item.id}`}>
                      <ListItemText primary={item.title} />
                    </Link>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Grid>
      </div>
    </>
  );
};
