import git from 'simple-git';

async function main() {
  const status = await git().status(['-s']);

  const hasChanges = status.not_added.length > 0;
}

main();
