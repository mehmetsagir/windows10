<template>
  <Layout folderName="Chrome" type="browser">
    <iframe src="https://www.google.com/webhp?igu=1"></iframe>
  </Layout>
</template>

<script>
import Layout from "../Layouts/FolderLayout.vue";
export default {
  name: "Chrome",
  components: { Layout },
};
</script>
