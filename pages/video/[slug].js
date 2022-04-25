import { gql, GraphQLClient } from "graphql-request";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;

  const client = new GraphQLClient(url);

  client.setHeader("authorization", process.env.GRAPH_CMS_TOKEN);

  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
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

  const variables = {
    pageSlug,
  };

  const data = await client.request(query, variables);
  const video = data.video;

  return {
    props: {
      video,
    },
  };
};

const Video = ({ video }) => {
  console.log(video);
  return (
    <>
      <div className='main-video'>
        <img className='banner' src={video.thumbnail.url} alt={video.title} />
      </div>
    </>
  );
};

export default Video;
