<script>
  import UserForm from './UserForm.svelte';
  import YouSvg from '$lib/images/minimalist_you.svg';
</script>

<svelte:head>
  <title>Home - Yousoro</title>
  <meta name="description" content="Keep track of your anime watching list" />
</svelte:head>

<section>
  <h1>
    <img src={YouSvg} alt="minimalist_you" />
  </h1>

  <UserForm />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.3;
  }

  img {
    user-select: none;
    width: 100%;
    height: 100%;
  }
</style>
