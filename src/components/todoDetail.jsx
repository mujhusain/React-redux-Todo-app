import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const TodoDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    getData(id);
  }, []);

  const getData = (id) => {
    axios.get(`https://fake-api-project-for-masai.herokuapp.com/tasks/${id}`).then((data) => {
      setData(data.data);
    });
  };

  

  return (
    <>
      <Card style={{
       margin:'auto',
        width: '100%',
        position: 'relative',
      }} sx={{ maxWidth: 300}}>
        <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Detail About Task
          </Typography>
          <Typography variant="h5" component="div">
            Title: {data.title}
          </Typography>
          
          <Typography variant="body2">Description: {data.detail}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
