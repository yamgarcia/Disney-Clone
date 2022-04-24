import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;

  // const graphQLClient = new GraphQLClient(url, {
  //   headers: {
  //     "Authorization": process.env.GRAPH_CMS_TOKEN
  //   }
  // })

  const client = new GraphQLClient(url);

  client.setHeader(
    "authorization",
    process.env.GRAPH_CMS_TOKEN
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
  return <>Hello Disney Clone</>;
};

export default Home;
