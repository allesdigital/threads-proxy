<template>
  <div>
    <article
      v-for="post in thread.data.data.containing_thread.thread_items"
      class="media"
    >
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="profile_pic_url(post)" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ post.post.user.username }}</strong>
            <br />
            {{ post.post.caption.text }}
            <br />
            <small
              >{{ post.post.like_count }} Likes ·
              {{ post.post.text_post_app_info.direct_reply_count }} Replies ·
              {{ new Date(post.post.taken_at * 1000).toISOString() }}</small
            >
          </p>
        </div>
      </div>
    </article>

    <pre v-if="debug">thread: {{ thread }}</pre>
  </div>
</template>

<script setup>
const route = useRoute();
const debug = route.query.debug;

const { data: thread } = await useFetch(
  "/api/thread/" + route.params.thread_id
);

const profile_pic_url = ({
  post: {
    user: { profile_pic_url },
  },
}) => {
  const url = new URL(profile_pic_url);
  return "/profile_image" + url.pathname + url.search;
};
</script>
