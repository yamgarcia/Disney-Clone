import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => { 
    
  const url =
  "https://api-us-west-2.graphcms.com/v2/cl22pprj84xlu01xue399hlte/master";

  const client = new GraphQLClient(url);

  client.setHeader('authorization', "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTAzNDc5NDUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsMjJwcHJqODR4bHUwMXh1ZTM5OWhsdGUvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWRhYmYwMWQtODE3OC00MjhiLTg5MzEtNzllY2FhNjJiM2VlIiwianRpIjoiY2wyNXFrMHBzN2lucDAxeHQ2aWFjNzAxdCJ9.JTQVfDFRkhGYfPvHEeHEROQV4yGkp2e_mvht-eDpPqk5O9ZGpX3FeCahs4s9lSuMJ3pkhhKHL8QqCBB2MZXQVlM-MbHIBIUrXm23ZpeqMfxUiMzEdaoD3US_lltyBNMfw2Q5-oWq8xlwwT_V9D1vJgkN5qdSL85sNZmcIqLdey9U5iZXHo2PEbntL-PHz60fOfNGGsVOVxiJ8_46qZ1iske8CG71XW8ZU-GOy1kgywEV48wi8mJZ60sthf6tacQm6GiUx4EUYwWB5rcHDZipHjVXr6QMMOIP7-Dp6HGwgP7ceu3oCPKm9w_6w7MGggxK4GU5xF2VGVD0_f7zbS8vXb39Ua5VNR5VMuy1tGLIH-IcF4XtUhpoAFB3IilNhUihODc5U_irXu1_Q9axXHdQ_uNGOG6VcdQecoJQ5b4_Rfse-33hZtLin_idiVQu6atf7JlbhrWcarLhErw1BfI5kV3MyROXxyZVHCgKNGD4BFw_DY9nZw-CUE9sQy-ruq0JlNLW7mWfzfrYhJXfVBHztnKUItLE6LP_qtxWqCezYZNpMcvkfsEDOb8PcVWAkY7I5ciQEnbPr4Q6p2fUtqJZP2L6PiBvqLWnX5W3yVtWLXEUw7NqRhswi6Ljs7CGrFoXeEPmtam8552TfhQsG_d5cUMiSmE-UJgcB-vBOuVDNlE",
  );

  const query = gql`
    {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const data = await client.request(query);

  const videos = data.videos;

  return {
    props: {
      videos,
    },
  };
};

const Home = ({ videos }) => {
  console.log(videos);
  return <>Hello Disney Clone</>;
};

export default Home;
