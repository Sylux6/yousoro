<script lang="ts">
  import type { Anime } from '$lib/types/anime';

  export let anime: Anime;
</script>

<div class="indicator">
  {#if anime.numberAiredEpisodes && anime.numberAiredEpisodes - anime.currentEpisode > 0}
    <span class="indicator-item badge badge-primary">
      {anime.numberAiredEpisodes - anime.currentEpisode}
    </span>
  {/if}
  <a class="card shadow-xl" href={`https://myanimelist.net/anime/${anime.id}/`} target="_blank">
    <figure>
      <img src={anime.thumbnailUrl} alt={anime.title} />
    </figure>
    <span class="text-center font-bold">{anime.title}</span>
  </a>
</div>

<style>
  .card {
    max-width: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    cursor: pointer;
  }

  .indicator-item {
    height: 30px;
    top: 20px;
    right: 20px;
  }

  .indicator:hover {
    animation: 0.2s pulse forwards;
  }

  img {
    border-radius: var(--rounded-box, 1rem) var(--rounded-box, 1rem) 0 0;
    max-height: 400px;
    max-width: 300px;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.03);
    }
  }
</style>
