<script>
  import { page } from '$app/stores';

  console.log($page);
</script>

<h1>{$page.status}: {$page.data}</h1>
