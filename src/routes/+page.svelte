<script lang="ts">
  import { afterNavigate, goto } from '$app/navigation';

  afterNavigate(() => goto('/home'));
</script>
