<script lang="ts">
  import { page } from '$app/stores';
  import type { Domain } from '../../../../shared/types/domain';
  import { onMount } from 'svelte';
  import { isDomain } from '../../../../shared/types/domain.js';
  import { authenticate } from './my-anime-list';

  let isLoading = true;
  let domain: Domain;
  let username: string;
  let r;

  onMount(() => {
    if (isDomain($page.params.domain)) {
      domain = $page.params.domain;
    } else {
      throw 'invalid domain';
    }
    username = $page.params.username;
    authenticate().then((result) => {
      r = result;
      isLoading = false;
    });
  });
</script>

<svelte:head>
  <title>{username} - Yousoro</title>
  <meta name="description" content="Yousoro app" />
</svelte:head>

{#if isLoading}
  <section class="loading-container">
    <span class="loading loading-ring loading-lg" />
  </section>
{:else}
  <div>
    {#each r.data as d}
      <div>
        {d.node.title}
      </div>
    {/each}
  </div>
{/if}

<style>
  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.3;
  }
</style>
