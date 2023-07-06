import axios from "axios";

export default defineEventHandler(
  async ({
    context: {
      params: { thread_id },
    },
  }) => {
    const { data: initial_state } = await axios.get(
      "https://www.threads.net/t/" + thread_id
    );
    const [_, post_id] = initial_state.match(/"post_id":"(.+?)"/);

    const { data } = await axios.post(
      "https://www.threads.net/api/graphql",
      {
        doc_id: "5587632691339264",
        variables: JSON.stringify({ postID: post_id }),
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-IG-App-ID": "238260118697367",
        },
      }
    );
    return data;
  }
);
