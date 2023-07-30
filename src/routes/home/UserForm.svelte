<script lang="ts">
  import { goto } from '$app/navigation';
  import type { UserDomain } from '../../shared/types/user-domain';
  import type { Domain } from '../../shared/types/domain';

  const domainOptions: UserDomain[] = [
    { label: 'MyAnimeList', value: 'my-anime-list' },
    { label: 'AniList', value: 'ani-list', disabled: true },
  ];

  let username = '';
  let domain: Domain = 'my-anime-list';

  function submit() {
    if (domain === 'my-anime-list' && !localStorage.getItem('malClientId')) {
      return;
    }
    goto(`/user/${domain}/${username}`);
  }
</script>

<form class="flex flex-row justify-center" on:submit|preventDefault={submit}>
  <div class="join">
    <div>
      <input
        class="input input-bordered join-item"
        placeholder="Username"
        bind:value={username}
        required
      />
    </div>

    <select class="select select-bordered join-item" bind:value={domain}>
      {#each domainOptions as domainOption}
        <option value={domainOption.value} disabled={domainOption.disabled}>
          {domainOption.label}
        </option>
      {/each}
    </select>

    <button class="btn btn-primary join-item" type="submit" disabled={!username}>
      ヨーソロー！
    </button>
  </div>
</form>
