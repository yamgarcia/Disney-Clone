import { gql, GraphQLClient } from "graphql-request";
import Link from "next/Link";
import { useContext } from "react";
import AppContext from "../../AppContext";
import Footer from "../../components/Footer";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;

  const client = new GraphQLClient(url);

  client.setHeader("authorization", process.env.GRAPH_CMS_TOKEN);

  const pageSlug = pageContext.query.slug;

  const videosQuery = gql`
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

  const data = await client.request(videosQuery, variables);
  const video = data.video;

  return {
    props: {
      video,
    },
  };
};

const Video = ({ video }) => {
  console.log(video);

  const value = useContext(AppContext);
  let { watching } = value.state;
  let { setWatching } = value;

  return (
    <>
      {/* <div className='main-video'> */}
      {!watching && (
        <div className='video-image '>
          <img className='banner' src={video.thumbnail.url} alt={video.title} />
        </div>
      )}
      {!watching && (
        <div className='info'>
          <p>{video.tag}</p>
          <p>{video.description}</p>
          <Link href='/'>
            <p>Back</p>
          </Link>
          <button
            className='video-overlay'
            onClick={() => {
              watching ? setWatching(false) : setWatching(true);
            }}
          >
            PLAY
          </button>
        </div>
      )}

      {watching && (
        <video width='100%' controls autoPlay>
          <source src={video.mp4.url} type='video/mp4' />
        </video>
      )}
      <Footer />
    </>
  );
};

export default Video;
