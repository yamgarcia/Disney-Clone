import { gql, GraphQLClient } from "graphql-request";
import Section from "../components/Section";
import NavBar from "../components/NavBar"

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;

  // const graphQLClient = new GraphQLClient(url, {
  //   headers: {
  //     "Authorization": process.env.GRAPH_CMS_TOKEN
  //   }
  // })

  const client = new GraphQLClient(url);

  client.setHeader("authorization", process.env.GRAPH_CMS_TOKEN);

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

  const accountQuery = gql `
  query {
    account (where: {id:"cl22us6jvosan0bmu7zx888t2"}) {
      username
      avatar {
        url
      }      
    }
  }
  `

  const data = await client.request(query);

  const videos = data.videos;

  return {
    props: {
      videos,
    },
  };
};

const Home = ({ videos }) => {
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre));
  };

  const unSeenVideos = (videos) => {
    return videos.filter(video => video.seen === null);;
  };

  return (
    <>
    <NavBar/>
      <div className='app'>
        <div className='main-video'>
          <img
            className='banner'
            src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).title}
          />
        </div>

        <div className='video-feed'>
          <Section
            genre={"Recommended for you"}
            videos={unSeenVideos(videos)}
          ></Section>
          <Section
            genre={"Family"}
            videos={filterVideos(videos, "Family")}
          ></Section>
          <Section
            genre={"Pixar"}
            videos={filterVideos(videos, "Pixar")}
          ></Section>
          <Section
            genre={"Disney"}
            videos={filterVideos(videos, "Disney")}
          ></Section>
          <Section
            genre={"Drama"}
            videos={filterVideos(videos, "Drama")}
          ></Section>
          <Section
            genre={"Fantasy"}
            videos={filterVideos(videos, "Fantasy")}
          ></Section>
          <Section
            genre={"Classic"}
            videos={filterVideos(videos, "Classic")}
          ></Section>
          <Section
            genre={"Thriller"}
            videos={filterVideos(videos, "Thriller")}
          ></Section>
          <Section
            genre={"Scary"}
            videos={filterVideos(videos, "Scary")}
          ></Section>
          <Section
            genre={"Horror"}
            videos={filterVideos(videos, "Horror")}
          ></Section>
        </div>
      </div>
    </>
  );
};

export default Home;
