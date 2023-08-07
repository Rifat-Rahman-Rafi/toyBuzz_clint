import React from 'react';
import { Container } from 'react-bootstrap';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Blog = () => {
    return (
       <Container style={{ justifyContent: 'center', marginTop:60 }}>
        
      
    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </Typography>
          <Typography variant="body2" color="text.secondary">
        
An access token is a short-lived credential that grants a user access to specific resources or actions in a web application or API.

A refresh token is a longer-lived credential used to get a new access token after the original access token expires, without the user needing to log in again.

Access tokens are typically stored in memory or secure HTTP-only cookies on the client-side.

Refresh tokens should be stored securely on the server-side to prevent unauthorized access.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>







    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          2. Compare SQL and NoSQL databases? 
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
          SQL databases use structured schemas and SQL query language, while NoSQL databases store data in flexible, schema-less formats and use various data models.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>







          
    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          3. 
 What is express js? What is Nest JS?
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
         

          Express.js: Express.js is a minimalist web application framework for Node.js that simplifies the process of building web servers and APIs.

Nest.js: Nest.js is a powerful and scalable web application framework for Node.js, inspired by Angular's architecture and designed for building efficient and maintainable server-side applications

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>





    <Card className='mt-5' sx={{ maxWidth: 1500 }}>
      <CardActionArea>
       
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          4. What is MongoDB aggregate and how does it work?
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
         
          
          MongoDB's aggregate is a powerful method used to perform advanced data processing and analytics operations on MongoDB collections. It allows you to apply a series of data transformation stages to the documents in a collection and obtain the desired output.

The aggregate method works by processing the documents through a pipeline of stages, where each stage performs specific operations like filtering, grouping, sorting, projecting, and more. Each stage takes the input from the previous stage and produces a new output for the next stage in the pipeline.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>



       </Container>
    );
};

export default Blog;


















