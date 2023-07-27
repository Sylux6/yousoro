<script lang="ts">
  enum Domain {
    MY_ANIME_LIST,
    ANILIST,
  }
  type UserDomain = { label: string; value: Domain; disabled?: boolean };
  const domainOptions: UserDomain[] = [
    { label: 'MyAnimeList', value: Domain.MY_ANIME_LIST },
    { label: 'AniList', value: Domain.ANILIST, disabled: true },
  ];

  let userValue = '';
  let domainValue: Domain = Domain.MY_ANIME_LIST;
</script>

<form class="flex flex-row justify-center">
  <div class="join">
    <div>
      <input
        class="input input-bordered join-item"
        placeholder="Username"
        bind:value={userValue}
        required
      />
    </div>

    <select class="select select-bordered join-item" bind:value={domainValue}>
      {#each domainOptions as domainOption}
        <option value={domainOption.value} disabled={domainOption.disabled}>
          {domainOption.label}
        </option>
      {/each}
    </select>

    <button class="btn btn-primary join-item" type="submit" disabled={!userValue}
      >ヨーソロー！</button
    >
  </div>
</form>
